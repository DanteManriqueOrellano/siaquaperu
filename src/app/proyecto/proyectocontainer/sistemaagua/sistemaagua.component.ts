import { Component } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders,Controls, NgxFormWithArrayControls } from 'ngx-sub-form';
import { ISistemaAgua } from 'src/app/core/models/sistemaagua';
import { FormControl, FormArray } from '@angular/forms';
import { IIntervencion } from 'src/app/core/models/intervencion';

@Component({
  selector: 'app-sistemaagua',
  templateUrl: './sistemaagua.component.html',
  styleUrls: ['./sistemaagua.component.css'],
  providers:subformComponentProviders(SistemaaguaComponent)
})
export class SistemaaguaComponent extends NgxSubFormComponent<IIntervencion[], ISistemaAgua> implements NgxFormWithArrayControls<ISistemaAgua> {
  
  public createFormArrayControl(
    key: "intervenciones", 
    value: IIntervencion
    ): FormControl {
    switch (key){
      case 'intervenciones':
        return new FormControl(value)
    }
  }
  protected getFormControls():Controls<ISistemaAgua> {
    return {
      intervenciones:new FormArray([]),
      propuesto:new FormControl()
    }
  }
  eliminaIntervencion(i){

  }
  agregaIntervencion(){
    this.formGroupControls.intervenciones.push(this.createFormArrayControl('intervenciones',{
      anio:'',
      captacion:{
        aforo:'',
        antiguedad:'',
        dimension:{
          alto:0,
          ancho:0,
          espesor:0,
          largo:0
        },
        fotos:[{url:''}],
        fugaAgua:false,
        funcionamiento:false,
        mantenimientos:[{tipoMantenimiento:''}],
        materialUtilizado:'',
        nombreCaptacion:'',
        operativo:true,
        tipoCaptacion:''
      },
      ejecutor:''
    }))
    
  }

}
