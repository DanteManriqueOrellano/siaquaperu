import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor() { }

  getProyectById(id:string){
    return {nombre:'nombre del proyecto by id'}
  }
  getListProyects(){
    return []
  }
}
