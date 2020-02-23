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
  private proyectoDocument: AngularFirestoreDocument<IProyecto>
  public proyectos: Observable<IProyecto[]>;

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
    return this.proyectoCollection.valueChanges();
  }
  public unProyectoPorId(id:string){
    return this.proyectoCollection.doc(id).valueChanges()
     
    
  }
  
  getProyectById(id:string){
    return {nombre:'nombre del proyecto by id'}
  }
  getListProyects(){
    return []
  }
}
