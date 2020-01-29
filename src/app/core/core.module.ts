import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';

import { LayoutModule } from '@angular/cdk/layout';
import { MenuizquierdoComponent } from './shell/menuizquierdo/menuizquierdo.component';
import { BodyComponent } from './shell/body/body.component';
import { HeaderComponent } from './shell/body/header/header.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [ShellComponent, MenuizquierdoComponent, BodyComponent, HeaderComponent],
  imports: [
    CommonModule,
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
  ],
  exports:[ShellComponent]
})
export class CoreModule { }
