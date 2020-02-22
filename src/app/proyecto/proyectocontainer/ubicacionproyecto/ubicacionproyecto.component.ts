import { Component } from '@angular/core';
import { IUbicacion } from 'src/app/core/models/ubicacion';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ubicacionproyecto',
  templateUrl: './ubicacionproyecto.component.html',
  styleUrls: ['./ubicacionproyecto.component.css'],
  providers:subformComponentProviders(UbicacionproyectoComponent)
})
export class UbicacionproyectoComponent extends NgxSubFormComponent<IUbicacion> {
  
  protected getFormControls(): Controls<IUbicacion> {
    return {
      distrito:new FormControl(),
      provincia:new FormControl(),
      region:new FormControl(),
    }
  }
  

  

}
