import { Component } from '@angular/core';
import { IUbicacionproyecto } from 'src/app/core/models/ubicacionproyecto';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ubicacionproyecto',
  templateUrl: './ubicacionproyecto.component.html',
  styleUrls: ['./ubicacionproyecto.component.css'],
  providers:subformComponentProviders(UbicacionproyectoComponent)
})
export class UbicacionproyectoComponent extends NgxSubFormComponent<IUbicacionproyecto> {
  
  protected getFormControls(): Controls<IUbicacionproyecto> {
    return {
      distrito:new FormControl(),
      provincia:new FormControl(),
      region:new FormControl(),
    }
  }
  

  

}
