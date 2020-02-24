import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { CheckboxItem } from 'src/app/core/models/checkbox-item.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-item-sub-form',
  templateUrl: './checkbox-item-sub-form.component.html',
  styleUrls: ['./checkbox-item-sub-form.component.css'],
  providers:subformComponentProviders(CheckboxItemSubFormComponent)
})
export class CheckboxItemSubFormComponent extends NgxSubFormComponent<CheckboxItem> {
  
  protected getFormControls(): Controls<CheckboxItem> {
    return {
      checked: new FormControl(null),
      nombreDependencia: new FormControl(null)
    }
  }

  
}
