import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { IIntervencion } from 'src/app/core/models/intervencion';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-intervencion',
  templateUrl: './intervencion.component.html',
  styleUrls: ['./intervencion.component.scss'],
  providers:subformComponentProviders(IntervencionComponent),
})
export class IntervencionComponent extends NgxSubFormComponent<IIntervencion>  {
  // TODO: add explicit constructor

  protected getFormControls():Controls<IIntervencion> {
    return {
      anio: new FormControl(),
      captacion: new FormControl(),
      ejecutor: new FormControl()
    }
  }

  

}
