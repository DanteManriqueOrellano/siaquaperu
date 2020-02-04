import { Component, } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { IProyecto } from 'src/app/models/proyecto/nuevoproyecto';
import { FormControl } from '@angular/forms';
import { IChkbox } from 'src/app/models/proyecto/chkbox';

// random interface to show that in order to keep the checkbox sub form
// reusable with any kind of object (here user), we will use a generic
// interface `CheckboxItem` and we will need to remap our data set to it
interface User {
  readonly id: string;
  readonly name: string;
  readonly age: number;
}

// users mock
const users: ReadonlyArray<User> = [
  { id: 'user-1', name: 'Carolyn Lane', age: 24 },
  { id: 'user-1', name: 'Andrea Pearson', age: 46 },
  { id: 'user-1', name: 'Wallace Fowler', age: 62 },
  { id: 'user-1', name: 'Derek Chambers', age: 28 },
];

// function to map our users to the format expected by the checkbox sur form component
const transformToCheckboxesFormat = (users: ReadonlyArray<User>): ReadonlyArray<IChkbox> =>
  !users ?
    []:
    users.map(user => ({
      checked: false,
      // display your entity the way you like! =)
      text: `${user.name}, ${user.age} years old`
    }))


@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css'],
  providers:subformComponentProviders(NuevoproyectoComponent)
})
export class NuevoproyectoComponent extends NgxSubFormComponent<IProyecto>  {
  public checkboxes: FormControl = new FormControl(transformToCheckboxesFormat(users));
  
  protected getFormControls(): Controls<IProyecto> {
    return {
      empresaResponsable: new FormControl(),
      nombreProyecto: new FormControl()
    }
  }

  public continuar(){
    console.log('nuevo')

  }

  

}
