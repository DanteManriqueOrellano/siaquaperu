import { Component, Optional} from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders, ArrayPropertyKey, ArrayPropertyValue, NgxFormWithArrayControls, NgxSubFormRemapComponent } from 'ngx-sub-form';
import { IProyecto } from 'src/app/core/models/proyecto';
import { FormControl, FormArray, Validators } from '@angular/forms';
import { ILocalidad } from 'src/app/core/models/localidad';
import { IViaAcceso } from 'src/app/core/models/viaacceso';
import { IFoto } from 'src/app/core/models/foto';
import { IObjetivoMuni } from 'src/app/core/models/objetivomuni';
import { IObjetivoProy } from 'src/app/core/models/objetivoproy';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Router } from '@angular/router';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';
import { FotodialogComponent } from 'src/app/herramientas/fotodialog/fotodialog.component';

const listAnimation =  trigger('listAnimation',[
  transition('*<=>*',[
    query(':enter',[
      style({opacity:0}),
      stagger('60ms',animate('600ms ease-out',style({opacity:1})))
    ],
    {optional:true}
    ),
    query(':leave',
      animate('200ms',
        style({opacity:0})
      ),
      {optional:true}
    )
  ]
  )
]);
const todos = [
  {id:1,data:'fist todo'},
  {id:2,data:'second todo'},
  {id:3,data:'third todo'},
]

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css'],
  providers:subformComponentProviders(NuevoproyectoComponent),
  animations:[listAnimation]
})
export class NuevoproyectoComponent extends NgxSubFormRemapComponent<[ILocalidad[],IViaAcceso[],IFoto[]],IProyecto> implements NgxFormWithArrayControls<IProyecto>  {
  fotosUrl:any;
  todos = []
  constructor(
    public dialog: MatDialog,
    private storage: AngularFireStorage,
    private apiWeb:ProyectoService,
    private router:Router){
    super();
    this.todos = this.todos.length ? [] : todos;
   


  }
  
  removeTodo(id){
    this.todos = this.todos.filter(todo => todo.id !== id)

  }
  protected getFormControls(): Controls<IProyecto> {
    return {
      dependenciasChk:new FormControl(),
      nombreProyecto: new FormControl(),
      cliente: new FormControl(),
      aliasProyecto:new FormControl(),
      snip: new FormControl(),
      anioPriorizacion: new FormControl(),
      fechaAprobacion: new FormControl(),
      nroInformeTecnico: new FormControl(),
      responsable:new FormControl(),//responsable de las unidades
      aprobacionPerfil: new FormControl(),
      ubicacionproyecto:new FormControl(),//ubicacion del proyecto
      limiteProvincia:new FormControl(),
      fotos:new FormArray([]),
      coordenada:new FormControl(),
      objetivosMuni:new FormControl(),
      objetivosProy: new FormControl(),
      localidades:new FormArray([]),//localidades que abarca el proyecto
      viasAcceso: new FormArray([]),
     
    }
  }
  public createFormArrayControl(key: "localidades"  | "viasAcceso" | "fotos", value: ILocalidad | IViaAcceso | IFoto | IObjetivoMuni | IObjetivoProy): FormControl {
    switch (key){
      case 'viasAcceso':
        return new FormControl(value);
      case 'localidades':
        return new FormControl(value);
      case 'fotos':
        return new FormControl(value)
    }
  }
  protected transformToFormGroup(obj: [ILocalidad[], IViaAcceso[],IFoto[]], defaultValues: Partial<IProyecto>): IProyecto {
    return {
      
      localidades: !obj[0] ? [] : obj[0],
      viasAcceso: !obj[1] ? [] : obj[1],
      fotos: !obj[2] ? [] : obj[2],//ubicacion del proyecto en el pery, ubicacion del peroyecto en la region
      nombreProyecto:'',
      aliasProyecto:'',
      cliente: '',
      snip: '',
      anioPriorizacion: '',
      fechaAprobacion: '',
      nroInformeTecnico: '',
      responsable:{ejecutora:'',evaluadora:'',formuladora:''},//responsable de las unidades
      aprobacionPerfil: '',
      ubicacionproyecto: {distrito:'',provincia:'',region:''},//ubicacion del proyecto
      limiteProvincia:{este:'',norte:'',oeste:'',sur:''},  
      coordenada:{este:'',norte:'',latitud:''},
      objetivosMuni:[{problema:'',solucion:''}],
      objetivosProy: [{objetivo:''}],
      
    }
  }
  
  protected transformFromFormGroup(formValue: IProyecto): [ILocalidad[], IViaAcceso[],IFoto[]] {
    return [formValue.localidades,formValue.viasAcceso, formValue.fotos]
  }
  




  eliminaLocalidad(index:number){
    this.formGroupControls.localidades.removeAt(index);

  }
  agregaLocalidad() {
    this.formGroupControls.localidades.push(
      this.createFormArrayControl('localidades', {
        nombreLocalidad: '',
        viviendasBeneficiadas: 0,
        fotos: [],
        centrosEducativos: [],
        sistemaAgua: {
          intervenciones:[],
          propuesto:''
        }
      })
    )

  }
  agregaViaAcceso(){
    this.formGroupControls.viasAcceso.push(
      this.createFormArrayControl('viasAcceso',{
        nombreLugar:'',
        tipoVia:'',
        distancia:'',
        tiempo:'',
      })
    )
  }
  eliminaViaAcceso(index:number){
    this.formGroupControls.viasAcceso.removeAt(index);

  }
  guardarProyecto(){
    const proyecto = this.formGroupValues
    const idproyecto = this.apiWeb.agregarUnProyecto(proyecto)
    this.router.navigate(
      ["/project",idproyecto,"overview","configura"]
    )
  }
  eliminaUnaFoto(value,index){
    this.storage.storage.refFromURL(value.url).delete();
    this.formGroupControls.fotos.removeAt(index);
    

  }
  agregaUnaFotoUbicacion(){
    this.openDialog()

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FotodialogComponent, {
      width: '800px',
      data: [{url: this.fotosUrl}]// se usa  en caso el dialogo tubiera campos a rellenar
    });

    dialogRef.afterClosed().subscribe(result => {
      
      result.map((urlFoto)=>{
        this.formGroupControls.fotos.push(
          this.createFormArrayControl('fotos',{
            url:urlFoto
          })
        )

      })
    });
  }


  


}
