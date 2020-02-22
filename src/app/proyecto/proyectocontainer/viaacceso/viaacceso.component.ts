import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { IViaAcceso } from 'src/app/core/models/viaacceso';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viaacceso',
  templateUrl: './viaacceso.component.html',
  styleUrls: ['./viaacceso.component.css'],
  providers:subformComponentProviders(ViaaccesoComponent)
})
export class ViaaccesoComponent extends NgxSubFormComponent<IViaAcceso> {
  protected getFormControls(): Controls<IViaAcceso> {
    return {
      distancia: new FormControl(),
      nombreLugar: new FormControl(),
      tiempo: new FormControl(),
      tipoVia: new FormControl(),
    }

  }

  

}
