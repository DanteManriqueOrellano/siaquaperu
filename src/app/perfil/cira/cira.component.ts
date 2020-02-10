import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { FormControl, FormsModule } from '@angular/forms';
import { relacionado } from '../relacionado/relacionado.component';


interface relacion {
  propiedad:String;
  larelacion:relacionado
}
@Component({
  selector: 'app-cira',
  templateUrl: './cira.component.html',
  styleUrls: ['./cira.component.css'],
  providers:subformComponentProviders(CiraComponent)
})
export class CiraComponent extends NgxSubFormComponent<relacion>  {
  
  protected getFormControls():Controls<relacion>{
    return {
      propiedad:new FormControl(),
      larelacion: new FormControl()
    }
  }
  ver(){
    console.log(this.formGroupValues)
  }
  



}
