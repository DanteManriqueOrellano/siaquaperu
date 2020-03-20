import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Controls,subformComponentProviders, NgxFormWithArrayControls, NgxSubFormRemapComponent } from 'ngx-sub-form';
import { ICaptacion } from 'src/app/core/models/captacion';
import { FormControl, FormArray } from '@angular/forms';
import { IMantenimiento } from 'src/app/core/models/mantenimiento';
import { IFoto } from 'src/app/core/models/foto';
import { FotodialogComponent } from 'src/app/herramientas/fotodialog/fotodialog.component';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-captacion',
  templateUrl: './captacion.component.html',
  styleUrls: ['./captacion.component.css'],
  providers:subformComponentProviders(CaptacionComponent)
})
export class CaptacionComponent extends NgxSubFormRemapComponent<[IMantenimiento[],IFoto[]], ICaptacion>implements NgxFormWithArrayControls<ICaptacion> {
  animal: string;
  name: string;
  fotosUrl:[string];
  constructor(public dialog: MatDialog,private storage: AngularFireStorage) {super();}
  protected transformToFormGroup(obj: [IMantenimiento[], IFoto[]], defaultValues: Partial<ICaptacion>): ICaptacion {
    return {
      aforo:'',
      antiguedad:'',
      dimension:{alto:0,ancho:0,espesor:0,largo:0},
      fugaAgua:true,
      funcionamiento:true,
      materialUtilizado:'',
      nombreCaptacion:'',
      operativo:true,
      tipoCaptacion:'',
      mantenimientos:!obj[0] ? [] : obj[0],
      fotos:!obj[1] ? [] : obj[1]
      
    }
  }
  protected transformFromFormGroup(formValue: ICaptacion): [IMantenimiento[], IFoto[]] {
    return [formValue.mantenimientos,formValue.fotos]
    
  }
  // TODO: add explicit constructor

  
  
  public createFormArrayControl(key: "mantenimientos" | "fotos", value: IMantenimiento | IFoto): FormControl {
    switch (key){
      case 'mantenimientos':
        return new FormControl(value);
      case 'fotos':
        return new FormControl(value)
    } 
  }
  protected getFormControls(): Controls<ICaptacion> {
    return {
      aforo: new FormControl(),
      antiguedad: new FormControl(),
      dimension:new FormControl(),
      fotos:new FormArray([]),
      fugaAgua:new FormControl(),
      funcionamiento: new FormControl(),
      mantenimientos:new FormArray([]),
      materialUtilizado:new FormControl(),
      nombreCaptacion: new FormControl(),
      operativo:new FormControl(),
      tipoCaptacion: new FormControl()
    }
  }
  
  agregarMantenimiento(){
    this.formGroupControls.mantenimientos.push(
      this.createFormArrayControl('mantenimientos',{
       
        tipoMantenimiento:''
      })
    )

  }
  agregarFoto(){
    this.openDialog();
  }
  eliminaFoto(value,index){
    
    
    this.storage.storage.refFromURL(value.url).delete();
    this.formGroupControls.fotos.removeAt(index);
    
    
    
  }
  eliminaMantenimiento(index:number){
    this.formGroupControls.mantenimientos.removeAt(index);
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FotodialogComponent, {
      width: '800px',
      data: [{url: this.fotosUrl}]// se usa  en caso el dialogo tubiera campos a rellenar
    });

    dialogRef.afterClosed().subscribe(result => {
      
      result.map((urlFoto)=>{
        this.formGroupControls.fotos.push(
          this.createFormArrayControl('fotos',{
            url:urlFoto
          })
        )

      })
    });
  }


}
