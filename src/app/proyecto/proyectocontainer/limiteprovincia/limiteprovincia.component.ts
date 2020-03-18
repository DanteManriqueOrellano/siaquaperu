import { Component} from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { ILimiteProvincia } from 'src/app/core/models/limiteprovincia';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-limiteprovincia',
  templateUrl: './limiteprovincia.component.html',
  styleUrls: ['./limiteprovincia.component.css'],
  providers: subformComponentProviders(LimiteprovinciaComponent )
})
export class LimiteprovinciaComponent extends NgxSubFormComponent<ILimiteProvincia> {
  // TODO: add explicit constructor

  protected getFormControls():Controls<ILimiteProvincia> {
    return {
      este: new FormControl(),
      norte: new FormControl(),
      oeste: new FormControl(),
      sur: new FormControl(),
    }
  }


}
