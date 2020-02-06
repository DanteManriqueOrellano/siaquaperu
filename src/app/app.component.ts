import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService, IProyectoById } from 'src/app/services/project/project.service';
import { Subscription } from 'rxjs';
import { MatDialog} from '@angular/material/dialog';

import { IProyecto } from './models/project/project';
import { DialognewComponent } from './project/dialognew/dialognew.component';
import { IRequisitoPerfil } from './models/project/requisitoPerfil';
import { IRequisitoExpediente } from './models/project/requisitoExpediente';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'siaquaperu';
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
