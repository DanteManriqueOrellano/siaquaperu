import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
import { NingunproyectoModule } from '../ningunproyecto/ningunproyecto.module';



@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,    
    CoreRoutingModule, NingunproyectoModule,
  ],
  exports:[ShellComponent]
})
export class CoreModule { }
