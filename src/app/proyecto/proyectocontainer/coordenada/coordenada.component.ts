import { Component } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders, Controls } from 'ngx-sub-form';
import { ICoordenada } from 'src/app/core/models/coordenada';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-coordenada',
  templateUrl: './coordenada.component.html',
  styleUrls: ['./coordenada.component.css'],
  providers:subformComponentProviders(CoordenadaComponent)
})
export class CoordenadaComponent extends NgxSubFormComponent<ICoordenada> {
  protected getFormControls(): Controls<ICoordenada> {
    return {
      este:new FormControl(),
      latitud: new FormControl(),
      norte: new FormControl()
    }
  }


}
