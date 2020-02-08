import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaproyectosRoutingModule } from './consultaproyectos-routing.module';
import { RecientesComponent } from './recientes/recientes.component';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [RecientesComponent, TodosComponent],
  imports: [
    CommonModule,
    ConsultaproyectosRoutingModule
  ]
})
export class ConsultaproyectosModule { }
