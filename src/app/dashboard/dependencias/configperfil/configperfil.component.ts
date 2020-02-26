import { Component,OnChanges,SimpleChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShareddependenciasService } from 'src/app/shared/shareddependencias.service';
import { MatCheckboxChange } from '@angular/material/checkbox';


interface Idependencia {
  nombreDependencia:string;
}
const dependencias: ReadonlyArray<Idependencia> = [
  {nombreDependencia:'ALA'},
  {nombreDependencia:'CIRA'},
  {nombreDependencia:'analisis'},
  {nombreDependencia:'agua'},
  {nombreDependencia:'cemento'},
  {nombreDependencia:'tierra'},
  
];
const dependenciasToCheckboxesFormat = (dependencias:ReadonlyArray<Idependencia>)=>
!dependencias ? [] :dependencias.map(dependencia=>({checked:false,nombreDependencia:dependencia.nombreDependencia}))

@Component({
  selector: 'app-configperfil',
  templateUrl: './configperfil.component.html',
  styleUrls: ['./configperfil.component.css']
})
export class ConfigperfilComponent  {
  
  public checkboxes: FormControl = new FormControl(dependenciasToCheckboxesFormat(dependencias));
  
  



  
}
