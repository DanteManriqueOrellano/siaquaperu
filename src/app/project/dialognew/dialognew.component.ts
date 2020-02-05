import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../recent/recent.component';

@Component({
  selector: 'app-dialognew',
  templateUrl: './dialognew.component.html',
  styleUrls: ['./dialognew.component.css']
})
export class DialognewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialognewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
