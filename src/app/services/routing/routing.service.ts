import { Injectable, Component } from '@angular/core';

interface ruta {
  path:string;
  componente:Component
}
@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }

  
}
