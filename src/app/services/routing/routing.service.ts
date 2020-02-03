import { Injectable, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/main/main/main.component';
import { ConfiguracionComponent } from 'src/app/configuracion/configuracion/configuracion.component';
import { MenuizquierdoComponent } from 'src/app/core/shell/menuizquierdo/menuizquierdo.component';
import { PanelComponent } from 'src/app/panelfotografico/panel/panel.component';
interface ruta {
  path:string;
  componente:Component
}
@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }

  public routes: Routes = [
    {path:'',component:MainComponent},
    {path:'menuizquierdo/project/projectid/settings/general', component: ConfiguracionComponent},
    {path:'menuizquierdo', component:MenuizquierdoComponent},
    {path:'panel', component:PanelComponent}
  ];
  public setRoute(unaRuta:ruta){
    this.routes.push()

  }
}
