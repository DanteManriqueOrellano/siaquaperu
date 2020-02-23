import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { IDimension } from 'src/app/core/models/dimencion';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dimenciones',
  templateUrl: './dimenciones.component.html',
  styleUrls: ['./dimenciones.component.css'],
  providers:subformComponentProviders(DimencionesComponent)
})
export class DimencionesComponent extends NgxSubFormComponent<IDimension> {
  
  
  protected getFormControls():Controls<IDimension> {
    return {
      alto: new FormControl(),
      ancho: new FormControl(),
      espesor: new FormControl(),
      largo: new FormControl()
    }
  }

  

}
