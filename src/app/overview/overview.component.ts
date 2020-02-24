import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable,Subject } from 'rxjs';
import { map, shareReplay, mergeMap, takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../servicios/proyecto.service';
import { IProyecto } from '../core/models/proyecto';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit,OnDestroy  {
  private unsubscribe$ = new Subject<void>()

  proyecto:IProyecto = {
    nombreProyecto:'',
    aliasProyecto:'',
    anioPriorizacion:'',
    aprobacionPerfil:'',
    cliente:'',
    coordenada:{este:'',latitud:'',norte:''},
    fechaAprobacion:'',
    fotos:[{url:''}],
    limiteProvincia:{este:'',norte:'',oeste:'',sur:''},
    localidades:[
      {centrosEducativos:[
        {codigoModular:'',direccionIE:'',gestion_dependencia:'',nivel_modalidad:'',nombreIE:'',nro_docentes:0,secciones:'',nro_alumnos:0}
      ],fotos:[{url:''}],
      nombreLocalidad:'',sistemaAgua:{intervenciones:[{anio:'',captacion:{aforo:'',antiguedad:'',dimension:{alto:0,ancho:0,espesor:0,largo:0},fotos:[{url:''}],fugaAgua:false,funcionamiento:false,mantenimientos:[{entidadEjecutora:'',tipoMantenimiento:''}],materialUtilizado:'',nombreCaptacion:'',operativo:true,tipoCaptacion:''},ejecutor:''}],propuesto:''},viviendasBeneficiadas:0}],nroInformeTecnico:'',objetivosMuni:[{problema:'',solucion:''}],objetivosProy:[{objetivo:''}],responsable:{ejecutora:'',evaluadora:'',formuladora:''},snip:'',ubicacionproyecto:{distrito:'',provincia:'',region:''},viasAcceso:[{distancia:'',nombreLugar:'',tiempo:'',tipoVia:''}]

  };
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router:Router,
    private route:ActivatedRoute,
    private webApi:ProyectoService,
    private cd:ChangeDetectorRef
    ) {}
  ngOnInit(){
    
    this.route.paramMap.pipe(
      mergeMap(  x=> this.webApi.unProyectoPorId(x.get('id'))),
      takeUntil(this.unsubscribe$)
    ).subscribe( (value:IProyecto)=> {
     this.proyecto.nombreProyecto = value.nombreProyecto;
     this.cd.markForCheck();
      
    })

  }
  ngOnDestroy():void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
