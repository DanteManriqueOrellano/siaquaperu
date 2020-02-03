import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingService } from '../services/routing/routing.service';

const routes: Routes = new RoutingService().routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
