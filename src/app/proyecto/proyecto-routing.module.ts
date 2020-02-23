import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoContainerComponent } from './proyectocontainer/proyectocontainer.component';
import { ProyectoresolverService } from '../servicios/proyectoresolver.service';
import { NuevoproyectoComponent } from './proyectocontainer/nuevoproyecto/nuevoproyecto.component';


const routes: Routes = [
  {path:'',component:ProyectoContainerComponent,resolve:{
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
