import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { ILocalidad } from 'src/app/core/models/localidad';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css'],
  providers:subformComponentProviders(LocalidadComponent)
})
export class LocalidadComponent extends NgxSubFormComponent<ILocalidad> {
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
  agregaCentroEducativo(){}
}
