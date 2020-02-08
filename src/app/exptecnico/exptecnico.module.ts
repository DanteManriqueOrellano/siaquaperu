import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExptecnicoRoutingModule } from './exptecnico-routing.module';
import { ConfigexptecnicoComponent } from './configexptecnico/configexptecnico.component';


@NgModule({
  declarations: [ConfigexptecnicoComponent],
  imports: [
    CommonModule,
    ExptecnicoRoutingModule
  ]
})
export class ExptecnicoModule { }
