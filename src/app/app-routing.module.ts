import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelcontrolComponent } from './overview/panelcontrol/panelcontrol.component';
import { NuevoproyectoComponent } from './project/nuevoproyecto/nuevoproyecto.component';


const routes: Routes = [
  {path:'',component: NuevoproyectoComponent},
  {path:'project',component: PanelcontrolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
