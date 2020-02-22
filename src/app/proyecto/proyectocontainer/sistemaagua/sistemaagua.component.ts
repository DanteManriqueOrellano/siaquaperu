import { Component } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders,Controls } from 'ngx-sub-form';
import { ISistemaAgua } from 'src/app/core/models/sistemaagua';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sistemaagua',
  templateUrl: './sistemaagua.component.html',
  styleUrls: ['./sistemaagua.component.css']
})
export class SistemaaguaComponent extends NgxSubFormComponent<ISistemaAgua> {
  protected getFormControls():Controls<ISistemaAgua> {
    return {
      intervenciones:new FormArray([]),
      propuesto:new FormControl()
    }
  }
  eliminaIntervencion(i){

  }
  agregaIntervencion(){
    
  }

}
