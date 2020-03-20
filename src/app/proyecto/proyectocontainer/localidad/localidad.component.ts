import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders, NgxFormWithArrayControls, NgxSubFormRemapComponent } from 'ngx-sub-form';
import { ILocalidad } from 'src/app/core/models/localidad';
import { FormControl, FormArray } from '@angular/forms';
import { ICentroEducativo } from 'src/app/core/models/centroeducativo';
import { IFoto } from 'src/app/core/models/foto';
import { MatDialog } from '@angular/material/dialog';
import { FotodialogComponent } from 'src/app/herramientas/fotodialog/fotodialog.component';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css'],
  providers:subformComponentProviders(LocalidadComponent)
})
export class LocalidadComponent extends NgxSubFormRemapComponent<[ICentroEducativo[],IFoto[]], ILocalidad> implements NgxFormWithArrayControls<ILocalidad> {
  
  fotosUrl:any;
  constructor(public dialog: MatDialog,private storage: AngularFireStorage){
    super();
  }
  protected transformToFormGroup(obj: [ICentroEducativo[], IFoto[]], defaultValues: Partial<ILocalidad>): ILocalidad {
    return {
      centrosEducativos:!obj[0] ? [] : obj[0],//[{codigoModular:'',direccionIE:'',gestion_dependencia:'',nivel_modalidad:'',nombreIE:'',nro_alumnos:0,nro_docentes:0,secciones:''}],
      fotos:!obj[1] ? [] : obj[1],//[{url:''}],
      nombreLocalidad:'',
      sistemaAgua:{
        propuesto:'',
        intervenciones:[{
          anio:'',
          ejecutor:'',
          captacion:{
            aforo:'',
            antiguedad:'',
            fugaAgua:true,
            funcionamiento:true,
            operativo:true,
            fotos:[{url:''}],
            materialUtilizado:'',
            tipoCaptacion:'',
            nombreCaptacion:'',
            dimension:{alto:0,ancho:0,largo:0,espesor:0},
            mantenimientos:[{tipoMantenimiento:''}]
          }
        }]
      },
      viviendasBeneficiadas:0
    }
  }
  protected transformFromFormGroup(formValue: ILocalidad): [ICentroEducativo[], IFoto[]] {
    return [formValue.centrosEducativos,formValue.fotos]
  }
  // TODO: add explicit constructor

  
  public createFormArrayControl(key: "centrosEducativos" | "fotos",value: ICentroEducativo | IFoto): FormControl {
    switch(key){
      case 'centrosEducativos':
        return new FormControl(value);
      case 'fotos':
        return new FormControl(value)
      
    }
  }
  protected getFormControls(): Controls<ILocalidad> {
    return {
      centrosEducativos:new FormArray([]),
      fotos:new FormArray([]),
      nombreLocalidad:new FormControl(),
      viviendasBeneficiadas:new FormControl(),
      sistemaAgua:new FormControl()
    }
  }
  eliminaCentroEducativo(index:number){
    this.formGroupControls.centrosEducativos.removeAt(index);
  }
  eliminaUnaFoto(value,index){
    this.storage.storage.refFromURL(value.url).delete();
    this.formGroupControls.fotos.removeAt(index);

  }
  agregarUnaFoto(){
    this.openDialog();
  }
  agregaCentroEducativo(){
    this.formGroupControls.centrosEducativos.push(
      this.createFormArrayControl('centrosEducativos',{
        codigoModular:'',
        direccionIE:'',
        gestion_dependencia:'',
        nivel_modalidad:'',
        nombreIE:'',
        nro_alumnos:0,
        nro_docentes:0,
        secciones:''

      })
    )
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
