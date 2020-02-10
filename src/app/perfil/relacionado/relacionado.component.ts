import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface relacionado {
  locallidad:string;
  intervencion:string;
}
@Component({
  selector: 'app-relacionado',
  templateUrl: './relacionado.component.html',
  styleUrls: ['./relacionado.component.css'],
  providers:subformComponentProviders(RelacionadoComponent)
})
export class RelacionadoComponent extends NgxSubFormComponent<relacionado>{
  protected getFormControls():Controls<relacionado>{
    return {
      intervencion: new FormControl(),
      locallidad: new FormControl()
    }

  }

  

}
