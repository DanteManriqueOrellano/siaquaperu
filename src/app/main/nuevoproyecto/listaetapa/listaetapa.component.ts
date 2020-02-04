import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaetapa',
  templateUrl: './listaetapa.component.html',
  styleUrls: ['./listaetapa.component.scss']
})
export class ListaetapaComponent implements OnInit {
  etapas = Array<object>()

  constructor() { }

  ngOnInit() {
    this.etapas = [
      {nombre:'Perfil',ruta:'/perfil'},
      {nombre: 'Expediente Técnico',ruta:'/exptecnico'}
    ]
  }
  public onCardClick(etapa){
    console.log(etapa);
  }

}
