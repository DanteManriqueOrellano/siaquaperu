import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders,Controls } from 'ngx-sub-form';
import { IObjetivoProy } from 'src/app/core/models/objetivoproy';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-objetivoproy',
  templateUrl: './objetivoproy.component.html',
  styleUrls: ['./objetivoproy.component.css'],
  providers:subformComponentProviders(ObjetivoproyComponent)
})
export class ObjetivoproyComponent extends NgxSubFormComponent<IObjetivoProy> {
  // TODO: add explicit constructor

  protected getFormControls(): Controls<IObjetivoProy> {
    return {
    objetivo:new FormControl(),
    }
  }


}
