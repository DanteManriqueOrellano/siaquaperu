import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoContainerComponent } from './proyectocontainer/proyectocontainer.component';
import { ProyectoresolverService } from '../servicios/proyectoresolver.service';
import { NuevoproyectoComponent } from './proyectocontainer/nuevoproyecto/nuevoproyecto.component';
import { OverviewComponent } from '../overview/overview.component';


const routes: Routes = [
  {path:'',component:ProyectoContainerComponent,resolve:{
      proyectoid:ProyectoresolverService
    }
  },
  {path:'proyecto',component:NuevoproyectoComponent},
  {path:'project/:id/overview',component:OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }
