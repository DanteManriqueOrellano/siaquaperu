import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { IObjetivoMuni } from 'src/app/core/models/objetivomuni';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-objetivomuni',
  templateUrl: './objetivomuni.component.html',
  styleUrls: ['./objetivomuni.component.css'],
  providers: subformComponentProviders(ObjetivomuniComponent)
})
export class ObjetivomuniComponent extends NgxSubFormComponent<IObjetivoMuni> {
  // TODO: add explicit constructor

  protected getFormControls(): Controls<IObjetivoMuni> {
    return {
      problema: new FormControl(),
      solucion: new FormControl(),
    }
  }
}
