import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './proyectocontainer/proyectocontainer.component';

import { ListarproyectoComponent } from './proyectocontainer/listarproyectolayout/listarproyecto.layout.component';
import { NuevoproyectoComponent } from './proyectocontainer/addproyectolayout/nuevoproyecto/nuevoproyecto.component';
import { AddproyectoComponent } from './proyectocontainer/addproyectolayout/addproyecto.layout.component';



@NgModule({
  declarations: [ProyectoComponent, AddproyectoComponent, ListarproyectoComponent, NuevoproyectoComponent],
  imports: [
    CommonModule,
    ProyectoRoutingModule,

  ]
})
export class ProyectoModule { }
