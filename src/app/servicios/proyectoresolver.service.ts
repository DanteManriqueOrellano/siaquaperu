import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProyectoService } from './proyecto.service';
import { IProyecto } from '../core/models/proyecto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//los resolvers crearan el componente si se envia perfectamente los datos de forma asincrona
export class ProyectoresolverService implements Resolve<Observable<any>> {
  
  constructor(private prjSrv: ProyectoService) { }
  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot){//}:Observable<IProyecto[]> | IProyecto[] {
    //const proyectbyid = this.prjSrv.getProyectById(route.paramMap.get('id'))//para obtener el id en el parameto de la ruta
    //console.log(this.prjSrv.listaTodosProyectos())
     

    return of (this.prjSrv.listaTodosProyectos()) 
  }
}
