import { NgModule } from '@angular/core';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './proyectocontainer/proyectocontainer.component';

import { ListarproyectoComponent } from './proyectocontainer/listarproyectolayout/listarproyecto.layout.component';

import { AddproyectoComponent } from './proyectocontainer/addproyectolayout/addproyecto.layout.component';
import { GeneralidadesComponent } from './proyectocontainer/generalidades/generalidades.component';
import { NuevoproyectoComponent } from './proyectocontainer/nuevoproyecto/nuevoproyecto.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { AutoridadesComponent } from './proyectocontainer/autoridades/autoridades.component';
import { UbicacionComponent } from './proyectocontainer/ubicacion/ubicacion.component';
import { LimitesComponent } from './proyectocontainer/limites/limites.component';
import { LocalidadesComponent } from './proyectocontainer/localidades/localidades.component';
import { CentroeducativoComponent } from './proyectocontainer/centroeducativo/centroeducativo.component';
import { HistoricoaguaComponent } from './proyectocontainer/historicoagua/historicoagua.component';
import { CaptacionComponent } from './proyectocontainer/captacion/captacion.component';
import { MantenimientosComponent } from './proyectocontainer/mantenimientos/mantenimientos.component';
import { MantenimientoComponent } from './proyectocontainer/mantenimiento/mantenimiento.component';
import { ManterialesutilizadosComponent } from './proyectocontainer/manterialesutilizados/manterialesutilizados.component';
import { DimencionesComponent } from './proyectocontainer/dimenciones/dimenciones.component';




@NgModule({
  declarations: [ProyectoComponent, AddproyectoComponent, ListarproyectoComponent, NuevoproyectoComponent, GeneralidadesComponent, AutoridadesComponent, UbicacionComponent, LimitesComponent, LocalidadesComponent, CentroeducativoComponent, HistoricoaguaComponent, CaptacionComponent, MantenimientosComponent, MantenimientoComponent, ManterialesutilizadosComponent, DimencionesComponent],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PlatformModule,
    ObserversModule,
    MatGridListModule,
    MatStepperModule,
    MatCardModule,
    MatCheckboxModule,

  ],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
  ]
})
export class ProyectoModule { }
