import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './proyectocontainer/proyectocontainer.component';

import { ListarproyectoComponent } from './proyectocontainer/listarproyectolayout/listarproyecto.layout.component';

import { AddproyectoComponent } from './proyectocontainer/addproyectolayout/addproyecto.layout.component';
import { GeneralidadesComponent } from './proyectocontainer/generalidades/generalidades.component';
import { NuevoproyectoComponent } from './proyectocontainer/nuevoproyecto/nuevoproyecto.component';



@NgModule({
  declarations: [ProyectoComponent, AddproyectoComponent, ListarproyectoComponent, NuevoproyectoComponent, GeneralidadesComponent],
  imports: [
    CommonModule,
    ProyectoRoutingModule,

  ]
})
export class ProyectoModule { }
