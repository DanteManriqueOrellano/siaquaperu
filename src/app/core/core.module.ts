import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainComponent } from '../main/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShellComponent } from './shell/shell.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';
import { MenuizquierdoComponent } from './shell/menuizquierdo/menuizquierdo.component';
import { BodyComponent } from './shell/body/body.component';
import { HeaderComponent } from './shell/body/header/header.component';
import {MatSelectModule} from '@angular/material/select';
import { CoreRoutingModule } from './core-routing.module';
import { MainModule } from '../main/main.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfiguracionModule } from '../configuracion/configuracion.module';



@NgModule({
  declarations: [ShellComponent,HeaderComponent,BodyComponent,MenuizquierdoComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatDividerModule,
    MatSelectModule,
    MatRippleModule,
    CoreRoutingModule,
    MainModule,
    RouterModule,
    NgbModule,
    ConfiguracionModule,
  ],
  exports:[ShellComponent]
})
export class CoreModule { }
