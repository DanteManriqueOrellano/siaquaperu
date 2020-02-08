import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';


import { NingunproyectoRoutingModule } from './ningunproyecto-routing.module';
import { NuevoproyectoComponent } from './nuevoproyecto/nuevoproyecto.component';
import { GeneraproyectoComponent } from './generaproyecto/generaproyecto.component';

@NgModule({
  declarations: [NuevoproyectoComponent, GeneraproyectoComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,

    NingunproyectoRoutingModule
  ],
  entryComponents: [
    GeneraproyectoComponent
  ],
  providers:[{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
})
export class NingunproyectoModule { }