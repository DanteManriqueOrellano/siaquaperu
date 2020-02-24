import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders,Controls } from 'ngx-sub-form';
import { IMantenimiento } from 'src/app/core/models/mantenimiento';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css'],
  providers:subformComponentProviders(MantenimientoComponent)
})
export class MantenimientoComponent extends NgxSubFormComponent<IMantenimiento>{
  protected getFormControls(): Controls<IMantenimiento> {
    return {
      
      tipoMantenimiento: new FormControl()
    }
  }


}
