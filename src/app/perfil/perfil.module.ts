import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { ConfigperfilComponent } from './configperfil/configperfil.component';
import { CiraComponent } from './cira/cira.component';


@NgModule({
  declarations: [ConfigperfilComponent, CiraComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
