import { Component, } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { IProyecto } from 'src/app/models/proyecto/nuevoproyecto';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css'],
  providers:subformComponentProviders(NuevoproyectoComponent)
})
export class NuevoproyectoComponent extends NgxSubFormComponent<IProyecto>  {
  protected getFormControls(): Controls<IProyecto> {
    return {
      empresaResponsable: new FormControl(),
      nombreProyecto: new FormControl()
    }
  }

  public continuar(){
    console.log('nuevo')

  }

}
