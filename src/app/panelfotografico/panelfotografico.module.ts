import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FotoDescripcionComponent } from './foto-descripcion/foto-descripcion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PanelComponent, GaleriaComponent, FotoDescripcionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PanelfotograficoModule { }
