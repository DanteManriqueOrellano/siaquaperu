import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { GeneraproyectoComponent } from '../generaproyecto/generaproyecto.component';
import { ProjectService } from 'src/app/services/project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent  {
  nombreProyecto: string;
  empresaResponsable: string;
  departamento: string;
  provincia: string;
  distrito: string;
  localidad: string;

  constructor(public dialog: MatDialog, private apiService:ProjectService,private router:Router) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(GeneraproyectoComponent, {
      width: '500px',
      data: {
        nombreProyecto: this.nombreProyecto,
        empresaResponsable: this.empresaResponsable,
        departamento: this.departamento,
        provincia: this.provincia,
        distrito: this.distrito,
        localidad: this.localidad

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == undefined) return null //garantiza que si se cancela se termine el proceso.
      const id = this.apiService.agregarUnProyecto(result)
      this.router.navigate(['project',id,'overview'])
    });
  }


}
