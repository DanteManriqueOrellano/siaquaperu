import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
import { NingunproyectoModule } from '../ningunproyecto/ningunproyecto.module';
import { OverviewModule } from '../overview/overview.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ConsultaproyectosModule } from '../consultaproyectos/consultaproyectos.module';



@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,    
    CoreRoutingModule, NingunproyectoModule, OverviewModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, ConsultaproyectosModule,
  ],
  exports:[ShellComponent]
})
export class CoreModule { }
