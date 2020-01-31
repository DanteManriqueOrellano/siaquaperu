import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FotoDescripcionComponent } from './foto-descripcion/foto-descripcion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [PanelComponent, GaleriaComponent, FotoDescripcionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class PanelfotograficoModule { }
