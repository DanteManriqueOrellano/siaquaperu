
import { NgModule } from '@angular/core';



import {ObserversModule} from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';
import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoContainerComponent } from './proyectocontainer/proyectocontainer.component';

import { ListarproyectoComponent } from './proyectocontainer/listarproyectolayout/listarproyecto.layout.component';

import { AddproyectoComponent } from './proyectocontainer/addproyectolayout/addproyecto.layout.component';

import { NuevoproyectoComponent } from './proyectocontainer/nuevoproyecto/nuevoproyecto.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

import {MatIconModule} from '@angular/material/icon';


import { CentroeducativoComponent } from './proyectocontainer/centroeducativo/centroeducativo.component';

import { CaptacionComponent } from './proyectocontainer/captacion/captacion.component';

import { MantenimientoComponent } from './proyectocontainer/mantenimiento/mantenimiento.component';


import { UbicacionproyectoComponent } from './proyectocontainer/ubicacionproyecto/ubicacionproyecto.component';
import { ResponsableComponent } from './proyectocontainer/responsable/responsable.component';
import { ViaaccesoComponent } from './proyectocontainer/viaacceso/viaacceso.component';
import { CoordenadaComponent } from './proyectocontainer/coordenada/coordenada.component';
import { LimiteprovinciaComponent } from './proyectocontainer/limiteprovincia/limiteprovincia.component';
import { ObjetivomuniComponent } from './proyectocontainer/objetivomuni/objetivomuni.component';
import { ObjetivoproyComponent } from './proyectocontainer/objetivoproy/objetivoproy.component';
import { LocalidadComponent } from './proyectocontainer/localidad/localidad.component';
import { SistemaaguaComponent } from './proyectocontainer/sistemaagua/sistemaagua.component';
import { IntervencionComponent } from './proyectocontainer/intervencion/intervencion.component';
import { DimensionComponent } from './proyectocontainer/dimension/dimension.component';
import { FotoComponent } from './proyectocontainer/foto/foto.component';
import { OverviewComponent } from '../overview/overview.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ConfigdependenciaComponent } from '../dashboard/configdependencia/configdependencia.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { ConfigperfilComponent } from '../dashboard/dependencias/configperfil/configperfil.component';
import { ConfigexptecnicoComponent } from '../dashboard/dependencias/configexptecnico/configexptecnico.component';
import { CheckboxGroupSubFormComponent } from '../herramientas/checkbox-group-sub-form/checkbox-group-sub-form.component';
import { CheckboxItemSubFormComponent } from '../herramientas/checkbox-group-sub-form/checkbox-item-sub-form/checkbox-item-sub-form.component';
import { NavlistComponent } from '../overview/navlist/navlist.component';
import { AlaComponent } from '../formatos/ala/ala.component';
import { CiraComponent } from '../formatos/cira/cira.component';
import { PlatformModule } from '@angular/cdk/platform';
import { FotodialogComponent } from '../herramientas/fotodialog/fotodialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';








@NgModule({
  declarations: [ProyectoContainerComponent, AddproyectoComponent, ListarproyectoComponent, NuevoproyectoComponent, CentroeducativoComponent, CaptacionComponent, MantenimientoComponent, UbicacionproyectoComponent, ResponsableComponent, ViaaccesoComponent, CoordenadaComponent, LimiteprovinciaComponent, ObjetivomuniComponent, ObjetivoproyComponent, LocalidadComponent, SistemaaguaComponent, IntervencionComponent, DimensionComponent, FotoComponent, OverviewComponent, ConfigdependenciaComponent, DashboardComponent, ConfigperfilComponent, ConfigexptecnicoComponent, CheckboxGroupSubFormComponent, CheckboxItemSubFormComponent, NavlistComponent, AlaComponent, CiraComponent, FotodialogComponent],
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
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
   

  ],
  entryComponents: [
    FotodialogComponent
  ],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ]
})
export class ProyectoModule { }
