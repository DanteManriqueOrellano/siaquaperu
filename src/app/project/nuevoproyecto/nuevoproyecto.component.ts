import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Subscription } from 'rxjs';
import { MatDialog} from '@angular/material/dialog';
import { IRequisitoPerfil } from 'src/app/models/project/requisitoPerfil';
import { IRequisitoExpediente } from 'src/app/models/project/requisitoExpediente';
import { IProyecto } from 'src/app/models/project/project';
import { DialognewComponent } from '../dialognew/dialognew.component';



@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit, OnDestroy {

  unproyecto:any;
  nombreProyecto:string;
  empresaResponsable:string;
  requisitosPerfiles = new Array<IRequisitoPerfil>();
  requisitosExpedientes = new Array<IRequisitoExpediente>();
  proyectosSubscription = new Array<Subscription>()
  proyectos = new Array<IProyecto>()

  constructor(public projectDataService: ProjectService,  public dialog: MatDialog){}

  ngOnInit() {
    this.proyectosSubscription.push(this.projectDataService.listaTodosProyectos().subscribe((val)=>{this.proyectos = val})) 
    
  }
  ngOnDestroy(){
    this.proyectosSubscription.map((val)=>{val.unsubscribe()})
  }
  new(){
    const dialogRef = this.dialog.open(DialognewComponent, {
      width: '250px',
      data: {nombreProyecto: this.nombreProyecto, empresaResponsable: this.empresaResponsable}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      const identificador = this.projectDataService.agregarUnProyecto(result)
      console.log(identificador)
      
    });
  
    
  }
}
