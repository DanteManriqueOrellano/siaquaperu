import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CheckboxItem } from '../core/models/checkbox-item.interface';



@Injectable({
  providedIn: 'root'
})
export class ShareddependenciasService {

  private dependencia = new Subject<CheckboxItem>();
  
  dependencia$=this.dependencia.asObservable()
  
  public enviaDependencia(dependencia:CheckboxItem){
    
    this.dependencia.next(dependencia)
  }

  constructor() { }

}
