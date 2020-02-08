import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ConfignuevoproyectoComponent } from './confignuevoproyecto/confignuevoproyecto.component';
import { ConfigperfilComponent } from '../perfil/configperfil/configperfil.component';
import { ConfigexptecnicoComponent } from '../exptecnico/configexptecnico/configexptecnico.component';
import { CiraComponent } from '../perfil/cira/cira.component';


const routes: Routes = [
  {
    path: 'project/:id/overview', component: OverviewComponent,
    children: [
      {
        path: 'configura', component: ConfignuevoproyectoComponent,
        children: [
          { path: 'perfil', component: ConfigperfilComponent },
          { path: 'exptecnico', component: ConfigexptecnicoComponent }
        ]
      },
      {
        path:'cira',component:CiraComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
