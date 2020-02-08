import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',loadChildren:()=>{return import('../ningunproyecto/ningunproyecto.module').then(m=>m.NingunproyectoModule)} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
