import { Component} from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders, ArrayPropertyKey, ArrayPropertyValue, NgxFormWithArrayControls, NgxSubFormRemapComponent } from 'ngx-sub-form';
import { IProyecto } from 'src/app/core/models/proyecto';
import { FormControl, FormArray, Validators } from '@angular/forms';
import { ILocalidad } from 'src/app/core/models/localidad';
import { IViaAcceso } from 'src/app/core/models/viaacceso';
import { IFoto } from 'src/app/core/models/foto';
import { IObjetivoMuni } from 'src/app/core/models/objetivomuni';
import { IObjetivoProy } from 'src/app/core/models/objetivoproy';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css'],
  providers:subformComponentProviders(NuevoproyectoComponent),
})
export class NuevoproyectoComponent extends NgxSubFormRemapComponent<[ILocalidad[],IViaAcceso[]],IProyecto> implements NgxFormWithArrayControls<IProyecto>  {
  
  
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
  public createFormArrayControl(key: "localidades"  | "viasAcceso", value: ILocalidad | IViaAcceso | IFoto | IObjetivoMuni | IObjetivoProy): FormControl {
    switch (key){
      case 'viasAcceso':
        return new FormControl(value);
      case 'localidades':
        return new FormControl(value);
    }
  }
  protected transformToFormGroup(obj: [ILocalidad[], IViaAcceso[]], defaultValues: Partial<IProyecto>): IProyecto {
    return {
      localidades: !obj[0] ? [] : obj[0],
      viasAcceso: !obj[1] ? [] : obj[1],
      nombreProyecto:'',
      cliente: '',
      snip: '',
      anioPriorizacion: '',
      fechaAprobacion: '',
      nroInformeTecnico: '',
      responsable:{ejecutora:'',evaluadora:'',formuladora:''},//responsable de las unidades
      aprobacionPerfil: '',
      ubicacionproyecto: {distrito:'',provincia:'',region:''},//ubicacion del proyecto
      limiteProvincia:{este:'',norte:'',oeste:'',sur:''},  
      fotos: [{url:''}],
      coordenada:{este:'',norte:'',latitud:''},
      objetivosMuni:[{problema:'',solucion:''}],
      objetivosProy: [{objetivo:''}],
    }
  }
  
  protected transformFromFormGroup(formValue: IProyecto): [ILocalidad[], IViaAcceso[]] {
    return [formValue.localidades,formValue.viasAcceso]
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
  agregaViaAcceso(){
    this.formGroupControls.viasAcceso.push(
      this.createFormArrayControl('viasAcceso',{
        nombreLugar:'',
        tipoVia:'',
        distancia:'',
        tiempo:'',
      })
    )
  }
  eliminaViaAcceso(){

  }

  


}
