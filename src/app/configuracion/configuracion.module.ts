import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import { DialogoComponent } from './dialogo/dialogo.component';

@NgModule({
  declarations: [ConfiguracionComponent, DialogoComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule

  ]
})
export class ConfiguracionModule { }
