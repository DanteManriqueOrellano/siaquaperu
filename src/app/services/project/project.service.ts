import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProyecto } from 'src/app/models/project/project';

export interface IProyectoById extends IProyecto {
  id: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  

  private proyectoCollection: AngularFirestoreCollection<IProyecto>;
  private proyectoDocument: AngularFirestoreDocument<IProyecto>
  public proyectos: Observable<IProyectoById[]>;

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
  
  

}
