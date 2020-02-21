import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ProyectoresolverService } from '../servicios/proyectoresolver.service';
import { NuevoproyectoComponent } from './addproyecto/nuevoproyecto/nuevoproyecto.component';


const routes: Routes = [
  {path:'',component:ProyectoComponent,resolve:{
      proyectoid:ProyectoresolverService
    }
  },
  {path:'proyecto',component:NuevoproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }
