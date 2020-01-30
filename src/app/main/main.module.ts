import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MatCardModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  exports:[MainComponent]
})
export class MainModule { }
