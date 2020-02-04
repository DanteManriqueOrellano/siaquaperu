import { Component } from '@angular/core';
import { IChkbox } from 'src/app/models/proyecto/chkbox';
import { NgxSubFormComponent,Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormArray } from '@angular/forms';
interface IChkGroup {
  chkboxes : IChkbox[]
}
@Component({
  selector: 'app-chkboxgroup',
  templateUrl: './chkboxgroup.component.html',
  styleUrls: ['./chkboxgroup.component.css'],
  providers: subformComponentProviders(ChkboxgroupComponent)
})
export class ChkboxgroupComponent extends NgxSubFormComponent<IChkbox[],IChkGroup> {
  
  protected getFormControls(): Controls<IChkGroup> {
    return {
      chkboxes: new FormArray([])
    }
  }
  protected transformToFormGroup(checkboxses: IChkbox[]): IChkGroup | null{
    return {
      chkboxes: !checkboxses ? [] : checkboxses
    }

  }
  protected transformFromFormGroup(formValue: IChkGroup):IChkbox[] | null{
    return formValue.chkboxes

  }
  
  




}
