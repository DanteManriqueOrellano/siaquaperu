import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProyecto } from '../core/models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proyectoCollection: AngularFirestoreCollection<IProyecto>;
  private proyectos: Observable<IProyecto[]>;
  private proyectoDocument: AngularFirestoreDocument<IProyecto>
  private proyecto: Observable<IProyecto>
  

  constructor(private readonly afs: AngularFirestore) {
    this.proyectoCollection = this.afs.collection<IProyecto>('proyectos');
    

    this.proyectos = this.proyectoCollection.snapshotChanges() // stateChanges(['added'])
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as IProyecto;
          const id = a.payload.doc.id;
          
          return { id , ...data };
        }))
      );
  }

  public agregarUnProyecto(data: IProyecto) {
    const referencia = this.proyectoCollection.ref // .add(data);
    const identiicador = this.afs.createId()
    referencia.doc(identiicador).set(data)
    return identiicador
  }
  public listaTodosProyectos(){
    return this.proyectos;
  }
  public unProyectoPorId(iddocument:string){
    
    //return this.proyectoCollection.doc<IProyecto>(iddocument).valueChanges()
    this.proyectoDocument = this.proyectoCollection.doc<IProyecto>(iddocument); // stateChanges(['added'])
      this.proyecto = this.proyectoDocument.snapshotChanges()
      .pipe(
        map(a => {
          if(!a.payload.exists) return null;
          const data = a.payload.data() as IProyecto;
          const id = a.payload.id;  
          return { id , ...data };
        }
        )
      );
      return this.proyecto
  }
  
}
