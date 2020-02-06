import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { IDisponibilidadHidrica } from 'src/app/models/project/documents/ALA';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-disponibilidadhidrica',
  templateUrl: './disponibilidadhidrica.component.html',
  styleUrls: ['./disponibilidadhidrica.component.css'],
  providers: subformComponentProviders(DisponibilidadhidricaComponent)
})
export class DisponibilidadhidricaComponent extends NgxSubFormComponent<IDisponibilidadHidrica>  {

  protected getFormControls():Controls<IDisponibilidadHidrica>{
    return {
      administradorAgua: new FormControl(),
      celTramitador: new FormControl(),
      departamentoProyecto: new FormControl(),
      distritoProyecto: new FormControl(),
      dniTramitador: new FormControl(),
      domicilioTramitador: new FormControl(),
      nombreProyecto: new FormControl(),
      nombreSolicitante: new FormControl(),
      nombresyapellidosTramitador: new FormControl(),
      organizacionBeneficiaria: new FormControl(),
      provinciaProyecto: new FormControl(),
      ruc_dniSolicitante: new FormControl(),
      fuenteDeAgua:new FormControl(),
      tipo: new FormControl(),
      tipoDeUso: new FormControl(),
    }

  }


}
