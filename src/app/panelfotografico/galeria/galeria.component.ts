import { Component } from '@angular/core';
import { FormArray,FormControl } from '@angular/forms';
import { NgxSubFormComponent,NgxFormWithArrayControls,Controls } from 'ngx-sub-form';
import { IFoto_descripcion } from 'src/app/models/panelfotografico/foto_descripcion';
import { IGaleria } from 'src/app/models/panelfotografico/galeria';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent extends NgxSubFormComponent<IFoto_descripcion[],IGaleria> implements NgxFormWithArrayControls<IGaleria> {
  createFormArrayControl(
    key: "fotos_descripciones", 
    value: IFoto_descripcion
    ): FormControl {
      switch (key){
        case('fotos_descripciones'):
        return new FormControl();
        default:
        return new FormControl(value) 
      }
  }
  protected getFormControls(): Controls<IGaleria> {
    return {
      localidad: new FormControl(),
      fotos_descripciones: new FormArray([])
    }
  }

}
