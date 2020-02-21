import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { AddproyectolayoutComponent } from './addproyecto/addproyecto.layout.component';
import { ListarproyectoComponent } from './listarproyecto/listarproyecto.component';
import { NuevoproyectoComponent } from './addproyecto/nuevoproyecto/nuevoproyecto.component';


@NgModule({
  declarations: [ProyectoComponent, AddproyectolayoutComponent, ListarproyectoComponent, NuevoproyectoComponent],
  imports: [
    CommonModule,
    ProyectoRoutingModule
  ]
})
export class ProyectoModule { }
