import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { ICaptacion } from 'src/app/core/models/captacion';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-captacion',
  templateUrl: './captacion.component.html',
  styleUrls: ['./captacion.component.css'],
  providers:subformComponentProviders(CaptacionComponent)
})
export class CaptacionComponent extends NgxSubFormComponent<ICaptacion> {
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


}
