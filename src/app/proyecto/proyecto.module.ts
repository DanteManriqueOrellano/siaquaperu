import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './proyectocontainer/proyecto.component';

import { ListarproyectoComponent } from './listarproyectolayout/listarproyecto.layout.component';
import { NuevoproyectoComponent } from './addproyectolayout/nuevoproyecto/nuevoproyecto.component';
import { AddproyectoComponent } from './addproyectolayout/addproyecto.layout.component';


@NgModule({
  declarations: [ProyectoComponent, AddproyectoComponent, ListarproyectoComponent, NuevoproyectoComponent],
  imports: [
    CommonModule,
    ProyectoRoutingModule
  ]
})
export class ProyectoModule { }
