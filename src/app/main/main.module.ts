import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[MainComponent]
})
export class MainModule { }
