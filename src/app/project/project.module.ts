import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';



import { RecentComponent } from './recent/recent.component';
import { AllComponent } from './all/all.component';
import { DialognewComponent } from './dialognew/dialognew.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { RequisitoperfilComponent } from './requisitoperfil/requisitoperfil.component';
import { RequisitoexpedienteComponent } from './requisitoexpediente/requisitoexpediente.component';
import { DisponibilidadhidricaComponent } from './requisitos/perfil/disponibilidadhidrica/disponibilidadhidrica.component';
import { DemandaComponent } from './requisitos/expediente/demanda/demanda.component';



@NgModule({
  declarations: [RecentComponent, AllComponent, DialognewComponent, ProyectoComponent, RequisitoperfilComponent, RequisitoexpedienteComponent, DisponibilidadhidricaComponent, DemandaComponent],
  entryComponents: [
    DialognewComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[RecentComponent, AllComponent, DialognewComponent]

})
export class ProjectModule { }
