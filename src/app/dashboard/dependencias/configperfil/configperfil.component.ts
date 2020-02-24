import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Idependenias {
  readonly nombreDependencia:string;
}
const dependencias: ReadonlyArray<Idependenias> = [
  {nombreDependencia:'ALA'},
  {nombreDependencia:'CIRA'},
  
];
const dependenciasToCheckboxesFormat = (dependencias:ReadonlyArray<Idependenias>)=>
!dependencias ? [] :dependencias.map(dependencia=>({checked:false,nombreDependencia:dependencia.nombreDependencia}))

@Component({
  selector: 'app-configperfil',
  templateUrl: './configperfil.component.html',
  styleUrls: ['./configperfil.component.css']
})
export class ConfigperfilComponent  {

  public checkboxes: FormControl = new FormControl(dependenciasToCheckboxesFormat(dependencias));
}
