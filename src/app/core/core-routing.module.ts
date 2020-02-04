import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from 'src/app/main/main/main.component';
import { ConfiguracionComponent } from 'src/app/configuracion/configuracion/configuracion.component';
import { MenuizquierdoComponent } from 'src/app/core/shell/menuizquierdo/menuizquierdo.component';
import { PanelComponent } from 'src/app/panelfotografico/panel/panel.component';
import { NuevoproyectoComponent } from 'src/app/main/nuevoproyecto/nuevoproyecto.component';
const routes: Routes = [
  {path:'',component:MainComponent},
    {path:'menuizquierdo/project/projectid/settings/general', component: ConfiguracionComponent},
    {path:'menuizquierdo', component:MenuizquierdoComponent},
    {path:'panel', component:PanelComponent},
    {path:'nuevoproyecto', component: NuevoproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
