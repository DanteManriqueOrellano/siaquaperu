import { Component, OnInit } from '@angular/core';
import { FormArray,FormControl } from '@angular/forms';
import { NgxSubFormComponent, NgxFormWithArrayControls,Controls } from 'ngx-sub-form';
import { IFoto_descripcion } from 'src/app/models/panelfotografico/foto_descripcion';
@Component({
  selector: 'app-foto-descripcion',
  templateUrl: './foto-descripcion.component.html',
  styleUrls: ['./foto-descripcion.component.css']
})
export class FotoDescripcionComponent extends NgxSubFormComponent<IFoto_descripcion>  {
  protected getFormControls(): Controls<IFoto_descripcion> {
    return {
      descripcion: new FormControl(),
      urlfirestore: new FormControl(),
    }
  }
}
