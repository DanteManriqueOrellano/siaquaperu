import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelcontrolComponent } from './panelcontrol/panelcontrol.component';
import { AppRoutingModule } from '../app-routing.module';
import { OverviewRoutingModule } from './overview-routing.module';



@NgModule({
  declarations: [PanelcontrolComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
