import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main/main.component';
import { ConfiguracionComponent } from '../configuracion/configuracion/configuracion.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'project/projectid/settings/general', component: ConfiguracionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
