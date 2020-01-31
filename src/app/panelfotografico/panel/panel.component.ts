import { Component } from '@angular/core';
import { FormControl,FormArray } from '@angular/forms';
import { NgxSubFormComponent,subformComponentProviders,NgxFormWithArrayControls,Controls} from 'ngx-sub-form';
import { IPanel } from 'src/app/models/panelfotografico/panel';
import { IGaleria } from 'src/app/models/panelfotografico/galeria';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: subformComponentProviders(PanelComponent)
})
export class PanelComponent extends NgxSubFormComponent<IGaleria[],IPanel> implements NgxFormWithArrayControls<IPanel>  {
  
  protected getFormControls(): Controls<IPanel> {
    return {
      nombreProyecto: new FormControl(),
      constructora: new FormControl(),
      galerias: new FormArray([]),
    }
  }
  
  createFormArrayControl(
    key: "galerias", 
    value: IGaleria
    ): FormControl {
    switch (key){
      case('galerias'):
      return new FormControl();
      default:
      return new FormControl(value) 
    }
  }
  
  


}
