import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProyecto } from 'src/app/core/models/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyectocontainer.component.html',
  styleUrls: ['./proyectocontainer.component.css']
})
export class ProyectoContainerComponent implements OnInit {
  @Output('proyectos') proyectos:IProyecto[] = []

  constructor(private _ac:ActivatedRoute) { }

  ngOnInit() {
    //console.log(this._ac.snapshot.data)//para obtner el dato del resolve    
   this._ac.snapshot.data.proyectoid.subscribe(data=>{
    this.proyectos = data;
   })
    
    
  }

}
