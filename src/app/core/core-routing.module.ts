import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main/main.component';
import { ConfiguracionComponent } from '../configuracion/configuracion/configuracion.component';
import { MenuizquierdoComponent } from './shell/menuizquierdo/menuizquierdo.component';
import { PanelComponent } from '../panelfotografico/panel/panel.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'menuizquierdo/project/projectid/settings/general', component: ConfiguracionComponent},
  {path:'menuizquierdo', component:MenuizquierdoComponent},
  {path:'panel', component:PanelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
