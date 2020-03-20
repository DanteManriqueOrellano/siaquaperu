import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CaptacionComponent } from 'src/app/proyecto/proyectocontainer/captacion/captacion.component';
import { IFoto } from 'src/app/core/models/foto';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';
import { ImageService } from 'src/app/servicios/image.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { isArray, isObject } from 'util';

@Component({
  selector: 'app-fotodialog',
  templateUrl: './fotodialog.component.html',
  styleUrls: ['./fotodialog.component.css']
})
export class FotodialogComponent {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  profileUrl = new Array<string>(); 
  imgSrc: string;
  selectedImage: any = "tu vieja";
  isSubmitted: boolean;

  

  constructor(
    

    public dialogRef: MatDialogRef<FotodialogComponent>,
    private storage: AngularFireStorage,
    
    @Inject(MAT_DIALOG_DATA) public data:IFoto ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  upload(event) {
    
    
    for (let i = 0; i < event.target.files.length; i++) {
      var filePath = `${Math.random().toString(36).substring(2)}/${this.selectedImage.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, event.target.files[i]).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.profileUrl.push(url)
           
          })
        })
      ).subscribe();
      
    }
   



  }
}
