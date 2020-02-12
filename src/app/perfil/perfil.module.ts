import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

import { PerfilRoutingModule } from './perfil-routing.module';
import { ConfigperfilComponent } from './configperfil/configperfil.component';
import { CiraComponent } from './cira/cira.component';
import { RelacionadoComponent } from './relacionado/relacionado.component';
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake
 
// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [ConfigperfilComponent, CiraComponent, RelacionadoComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    PerfilRoutingModule,
    
    
  ]
})
export class PerfilModule { }
