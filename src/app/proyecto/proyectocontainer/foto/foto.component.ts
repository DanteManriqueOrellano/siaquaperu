import { Component } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders,Controls } from 'ngx-sub-form';
import { IFoto } from 'src/app/core/models/foto';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css'],
  providers:subformComponentProviders(FotoComponent)
})
export class FotoComponent extends NgxSubFormComponent<IFoto> {
  // TODO: add explicit constructor

  protected getFormControls(): Controls<IFoto> {
    return {
      url: new FormControl()
    }
  }

  }
