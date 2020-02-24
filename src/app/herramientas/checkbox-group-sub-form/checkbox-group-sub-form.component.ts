import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { CheckboxItem } from 'src/app/core/models/checkbox-item.interface';
import { FormArray } from '@angular/forms';

interface CheckboxGroupSubForm {
  checkboxes: CheckboxItem[];
}
@Component({
  selector: 'app-checkbox-group-sub-form',
  templateUrl: './checkbox-group-sub-form.component.html',
  styleUrls: ['./checkbox-group-sub-form.component.css'],
  providers:subformComponentProviders(CheckboxGroupSubFormComponent)
})
export class CheckboxGroupSubFormComponent extends NgxSubFormComponent<CheckboxItem[],CheckboxGroupSubForm> {
  
  protected getFormControls(): Controls<CheckboxGroupSubForm> {
    return {
      checkboxes: new FormArray([])
    }
  }

  protected transformToFormGroup(checkboxes: CheckboxItem[]): CheckboxGroupSubForm {
    return {
      checkboxes: !checkboxes ? [] : checkboxes
    };
  }

  protected transformFromFormGroup(formValue: CheckboxGroupSubForm): CheckboxItem[] | null {
    return formValue.checkboxes;
  }
  
  


}
