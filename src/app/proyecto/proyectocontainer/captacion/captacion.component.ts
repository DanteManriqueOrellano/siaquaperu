import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders, NgxFormWithArrayControls } from 'ngx-sub-form';
import { ICaptacion } from 'src/app/core/models/captacion';
import { FormControl, FormArray } from '@angular/forms';
import { IMantenimiento } from 'src/app/core/models/mantenimiento';
import { IFoto } from 'src/app/core/models/foto';

@Component({
  selector: 'app-captacion',
  templateUrl: './captacion.component.html',
  styleUrls: ['./captacion.component.css'],
  providers:subformComponentProviders(CaptacionComponent)
})
export class CaptacionComponent extends NgxSubFormComponent<[IMantenimiento[],IFoto[]], ICaptacion>implements NgxFormWithArrayControls<ICaptacion> {
  
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
        entidadEjecutora:'',
        tipoMantenimiento:''
      })
    )

  }
  agregarFoto(){
    this.formGroupControls.fotos.push(
      this.createFormArrayControl('fotos',{
        url:''
      })
    )

  }


}
