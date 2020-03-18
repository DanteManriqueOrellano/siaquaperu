import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoModule } from '../proyecto/proyecto.module';


const routes: Routes = [
  {path:'',loadChildren:() => import('../proyecto/proyecto.module').then(m => m.ProyectoModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
