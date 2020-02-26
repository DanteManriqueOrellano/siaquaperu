import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { CheckboxItem } from 'src/app/core/models/checkbox-item.interface';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ShareddependenciasService } from 'src/app/shared/shareddependencias.service';

@Component({
  selector: 'app-checkbox-item-sub-form',
  templateUrl: './checkbox-item-sub-form.component.html',
  styleUrls: ['./checkbox-item-sub-form.component.css'],
  providers:subformComponentProviders(CheckboxItemSubFormComponent)
})
export class CheckboxItemSubFormComponent extends NgxSubFormComponent<CheckboxItem> {
  
  constructor(private shareService:ShareddependenciasService){
    super();

  }
  protected getFormControls(): Controls<CheckboxItem> {
    return {
      checked: new FormControl(null),
      nombreDependencia: new FormControl(null)
    }
  }
  sendStatusChk(event: MatCheckboxChange) {   
    this.shareService.enviaDependencia(this.formGroupValues)
    
  }

  
}
