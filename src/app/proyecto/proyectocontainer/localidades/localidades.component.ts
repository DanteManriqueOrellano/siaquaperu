import { Component} from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { ILocalidad } from 'src/app/core/models/localidad';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css'],
  providers:subformComponentProviders(LocalidadesComponent),
})
export class LocalidadesComponent extends NgxSubFormComponent<ILocalidad> {
  
  
  protected getFormControls(): Controls<ILocalidad> {
    return {
      centrosEducativos:new FormControl(),
      fotos: new FormControl(),
      nombreLocalidad: new FormControl(),
      sistemaAgua:new FormControl(),
      viviendasBeneficiadas:new FormControl()
    }
  }

  

}
