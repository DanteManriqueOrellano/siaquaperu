import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoproyectoComponent } from './nuevoproyecto/nuevoproyecto.component';


const routes: Routes = [
  {path:'',component:NuevoproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NingunproyectoRoutingModule { }
