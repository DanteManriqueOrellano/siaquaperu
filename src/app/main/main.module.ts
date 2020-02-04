import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';


import { NuevoproyectoComponent } from './nuevoproyecto/nuevoproyecto.component';
import { MainComponent } from './main/main.component';
import { ChkboxComponent } from './chkbox/chkbox.component';
import { ChkboxgroupComponent } from './chkboxgroup/chkboxgroup.component';
@NgModule({
  declarations: [MainComponent, NuevoproyectoComponent, ChkboxComponent, ChkboxgroupComponent],
  imports: [
    CommonModule,
    MatCardModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  exports:[MainComponent],
  providers:[{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}]
})
export class MainModule { }
