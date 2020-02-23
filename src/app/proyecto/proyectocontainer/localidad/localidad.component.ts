import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders, NgxFormWithArrayControls } from 'ngx-sub-form';
import { ILocalidad } from 'src/app/core/models/localidad';
import { FormControl, FormArray } from '@angular/forms';
import { ICentroEducativo } from 'src/app/core/models/centroeducativo';
import { IFoto } from 'src/app/core/models/foto';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css'],
  providers:subformComponentProviders(LocalidadComponent)
})
export class LocalidadComponent extends NgxSubFormComponent<ICentroEducativo[], ILocalidad> implements NgxFormWithArrayControls<ILocalidad> {
  
  public createFormArrayControl(
    key: "centrosEducativos", 
    value: ICentroEducativo
    ): FormControl {
    switch(key){
      case 'centrosEducativos':
        return new FormControl(value);
      
    }
  }
  protected getFormControls(): Controls<ILocalidad> {
    return {
      centrosEducativos:new FormArray([]),
      fotos:new FormControl(),
      nombreLocalidad:new FormControl(),
      viviendasBeneficiadas:new FormControl(),
      sistemaAgua:new FormControl()
    }
  }
  eliminaCentroEducativo(i){}
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
}
