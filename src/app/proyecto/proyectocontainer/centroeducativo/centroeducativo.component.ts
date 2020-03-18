import { Component} from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { ICentroEducativo } from 'src/app/core/models/centroeducativo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-centroeducativo',
  templateUrl: './centroeducativo.component.html',
  styleUrls: ['./centroeducativo.component.css'],
  providers:subformComponentProviders(CentroeducativoComponent)
})
export class CentroeducativoComponent extends NgxSubFormComponent<ICentroEducativo> {
  // TODO: add explicit constructor

  
  protected getFormControls():Controls<ICentroEducativo> {
    return {
      codigoModular:new FormControl(),
      direccionIE:new FormControl(),
      gestion_dependencia:new FormControl(),
      nivel_modalidad: new FormControl(),
      nombreIE: new FormControl(),
      nro_alumnos: new FormControl(),
      nro_docentes: new FormControl(),
      secciones: new FormControl()
    }
  }


}
