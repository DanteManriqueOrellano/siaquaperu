import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
import { ProyectoModule } from '../proyecto/proyecto.module';


@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ProyectoModule
  ],
  exports:[ShellComponent]
})
export class CoreModule { }
