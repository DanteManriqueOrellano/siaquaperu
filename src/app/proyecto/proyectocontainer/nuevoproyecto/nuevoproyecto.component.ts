import { Component} from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders, ArrayPropertyKey, ArrayPropertyValue } from 'ngx-sub-form';
import { IProyecto } from 'src/app/core/models/proyecto';
import { FormControl, FormArray, Validators } from '@angular/forms';
import { ILocalidad } from 'src/app/core/models/localidad';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css'],
  providers:subformComponentProviders(NuevoproyectoComponent),
})
export class NuevoproyectoComponent extends NgxSubFormComponent<ILocalidad[], IProyecto> {
  protected getFormControls(): Controls<IProyecto> {
    return {
      nombreProyecto: new FormControl(),
      cliente: new FormControl(),
      snip: new FormControl(),
      anioPriorizacion: new FormControl(),
      fechaAprobacion: new FormControl(),
      nroInformeTecnico: new FormControl(),
      responsable:new FormControl(),//responsable de las unidades
      aprobacionPerfil: new FormControl(),
      ubicacionproyecto:new FormControl(),//ubicacion del proyecto
      limiteProvincia:new FormControl(),
      fotos:new FormControl(),
      coordenada:new FormControl(),
      objetivosMuni:new FormControl(),
      objetivosProy: new FormControl(),
      localidades:new FormArray([]),//localidades que abarca el proyecto
      viasAcceso: new FormArray([]),
    }
  }
  public createFormArrayControl(
    key: ArrayPropertyKey<IProyecto> | undefined,
    value: ArrayPropertyValue<IProyecto>,
  ): FormControl {
    switch (key) {
      // note: the following string is type safe based on your form properties!
      case 'localidades':
        return new FormControl(value, [Validators.required]);
      default:
        return new FormControl(value);
    }
  }



  eliminaLocalidad(i){

  }
  agregaLocalidad() {
    this.formGroupControls.localidades.push(
      this.createFormArrayControl('localidades', {
        nombreLocalidad: '',
        viviendasBeneficiadas: 0,
        fotos: [],
        centrosEducativos: [],
        sistemaAgua: {
          intervenciones:[],
          propuesto:''
        }
      })
    )

  }

  


}
