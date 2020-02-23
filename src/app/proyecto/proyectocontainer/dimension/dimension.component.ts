import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { IDimension } from 'src/app/core/models/dimencion';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dimension',
  templateUrl: './dimension.component.html',
  styleUrls: ['./dimension.component.css'],
  providers:subformComponentProviders(DimensionComponent)
})
export class DimensionComponent extends NgxSubFormComponent<IDimension> {
  protected getFormControls():Controls<IDimension> {
    return {
      alto: new FormControl(),
      ancho:new FormControl(),
      espesor:new FormControl(),
      largo: new FormControl()
    }
  }


}
