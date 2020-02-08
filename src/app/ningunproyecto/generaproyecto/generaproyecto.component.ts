import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { IProyecto } from 'src/app/models/project/project';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-generaproyecto',
  templateUrl: './generaproyecto.component.html',
  styleUrls: ['./generaproyecto.component.css'],
  providers:subformComponentProviders(GeneraproyectoComponent),
})
export class GeneraproyectoComponent extends NgxSubFormComponent<IProyecto>  {

  constructor(public dialogRef: MatDialogRef<GeneraproyectoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProyecto)
    {super();}

  protected getFormControls():Controls<IProyecto>{
    return {
      nombreProyecto: new FormControl(),
      empresaResponsable: new FormControl(),
      departamento: new FormControl(),
      provincia: new FormControl(),
      distrito: new FormControl(),
      localidad: new FormControl(),
      requisitosExpedientes: new FormControl(),
      requisitosPerfiles: new FormControl(),
      
    }
  }

  

}
