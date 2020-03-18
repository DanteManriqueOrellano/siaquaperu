import { Component} from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { IResponsable } from 'src/app/core/models/responsable';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css'],
  providers:subformComponentProviders(ResponsableComponent)
})
export class ResponsableComponent extends NgxSubFormComponent<IResponsable> {
  // TODO: add explicit constructor

  protected getFormControls(): Controls<IResponsable> {
    return {
      ejecutora: new FormControl(),
      evaluadora:new FormControl(),
      formuladora: new FormControl(),
    }
  }

 

}
