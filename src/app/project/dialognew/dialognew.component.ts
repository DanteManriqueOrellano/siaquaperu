import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../recent/recent.component';
import { NgxSubFormComponent,Controls } from 'ngx-sub-form';
import { IProyecto } from 'src/app/models/project/project';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialognew',
  templateUrl: './dialognew.component.html',
  styleUrls: ['./dialognew.component.css']
})
export class DialognewComponent extends NgxSubFormComponent<IProyecto> implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<DialognewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { super();}

  protected getFormControls():Controls<IProyecto>{
    return {
      empresaResponsable: new FormControl(),
      nombreProyecto: new FormControl(),
      requisitosExpedientes: new FormControl(),
      requisitosPerfiles: new FormControl()
    }
    
  }  

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
