import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarproyecto',
  templateUrl: './listarproyecto.layout.component.html',
  styleUrls: ['./listarproyecto.layout.component.scss']
})
export class ListarproyectoComponent implements OnInit {
  @Input('proyectos') proyectos:[] = []
  constructor(private router:Router) { }

  ngOnInit() {
    //console.log(this.proyectos)
  }
  verProyecto(idproyecto:string){
    this.router.navigate(
      ["/project",idproyecto,"overview"]
    )
  }

}
