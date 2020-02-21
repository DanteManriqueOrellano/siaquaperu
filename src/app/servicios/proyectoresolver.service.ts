import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProyectoService } from './proyecto.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoresolverService implements Resolve<Observable<any>> {

  constructor(private prjSrv: ProyectoService) { }
  resolve(route: ActivatedRouteSnapshot){
    //const proyectbyid = this.prjSrv.getProyectById(route.paramMap.get('id'))
    const listaProyectos = this.prjSrv.getListProyects();
    return of (listaProyectos)
  }
}
