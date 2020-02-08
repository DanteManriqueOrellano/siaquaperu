import { Component,OnInit, ChangeDetectorRef, ChangeDetectionStrategy,OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, mergeMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project/project.service';
import { IProyecto } from '../../models/project/project';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit,OnDestroy {
  private unsubscribe$ = new Subject<void>()

  proyecto:IProyecto = {
    departamento:'',
    distrito:'',
    empresaResponsable:'',
    localidad:'',
    nombreProyecto:'',
    provincia:'',

  }
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private route:ActivatedRoute, private webApi:ProjectService,private cd:ChangeDetectorRef) {}
  ngOnInit():void{
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
