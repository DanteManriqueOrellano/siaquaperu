import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls, subformComponentProviders } from 'ngx-sub-form';
import { IChkbox } from 'src/app/models/proyecto/chkbox';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chkbox',
  templateUrl: './chkbox.component.html',
  styleUrls: ['./chkbox.component.css'],
  providers: subformComponentProviders(ChkboxComponent)
})
export class ChkboxComponent extends NgxSubFormComponent<IChkbox>  {
  protected getFormControls(): Controls<IChkbox> {
    return {
      checked: new FormControl(),
      text: new FormControl()
    }
  }

}
