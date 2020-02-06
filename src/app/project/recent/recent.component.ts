import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialognewComponent } from '../dialognew/dialognew.component';


export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent  {
  
  animal: string;
  name: string;

  constructor(
    public dialog: MatDialog,
    
    ) {}

 
  
  new(){
    const dialogRef = this.dialog.open(DialognewComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  

  }
}
