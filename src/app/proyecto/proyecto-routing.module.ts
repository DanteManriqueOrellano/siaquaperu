import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoContainerComponent } from './proyectocontainer/proyectocontainer.component';
import { ProyectoresolverService } from '../servicios/proyectoresolver.service';
import { NuevoproyectoComponent } from './proyectocontainer/nuevoproyecto/nuevoproyecto.component';
import { OverviewComponent } from '../overview/overview.component';
import { ConfigdependenciaComponent } from '../dashboard/configdependencia/configdependencia.component';
import { ConfigperfilComponent } from '../dashboard/dependencias/configperfil/configperfil.component';
import { ConfigexptecnicoComponent } from '../dashboard/dependencias/configexptecnico/configexptecnico.component';


const routes: Routes = [
  {path:'',component:ProyectoContainerComponent,resolve:{
      proyectoid:ProyectoresolverService
    }
  },
  {path:'proyecto',component:NuevoproyectoComponent},
  {path:'project/:id/overview',component:OverviewComponent,
    children: [
    {
      path: 'configura', component: ConfigdependenciaComponent,
      
      children: [
        { path: 'perfil', component: ConfigperfilComponent },
        { path: 'exptecnico', component: ConfigexptecnicoComponent }
      ]
    },
    
    /*{
      path:'cira',component:CiraComponent
    }*/
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }
