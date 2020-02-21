import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyectocontainer.component.html',
  styleUrls: ['./proyectocontainer.component.css']
})
export class ProyectoComponent implements OnInit {
  listaProyectos = []

  constructor(private _ac:ActivatedRoute) { }

  ngOnInit() {
    console.log(this._ac.snapshot.data.proyectoid)
    if(!this._ac.snapshot.data.proyectoid){
      this.listaProyectos.push(this._ac.snapshot.data.proyectoid)
    }
    
    
  }

}
