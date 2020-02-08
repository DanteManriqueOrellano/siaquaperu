import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project/project.service';
import { IProyecto } from '../models/project/project';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

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

  constructor(private breakpointObserver: BreakpointObserver,private route:ActivatedRoute, private webApi:ProjectService) {}
  ngOnInit():void{
    this.route.paramMap.pipe(
      mergeMap(  x=> this.webApi.unProyectoPorId(x.get('id')))
    ).subscribe( (value:IProyecto)=> {
     this.proyecto.nombreProyecto = value.nombreProyecto
      
    })
        
  }
  
}
