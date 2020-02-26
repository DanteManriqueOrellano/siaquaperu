import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ShareddependenciasService } from 'src/app/shared/shareddependencias.service';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { CheckboxItem } from 'src/app/core/models/checkbox-item.interface';



@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.css']
})
export class NavlistComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>()
 
  
  statusChange:CheckboxItem = {checked:false,nombreDependencia:''};
  ala:CheckboxItem = {checked:false,nombreDependencia:''}
  cira:CheckboxItem = {checked:false,nombreDependencia:''}


  constructor(
    private shareService: ShareddependenciasService,
    private cd:ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.shareService.dependencia$.pipe(
      map(x=>x),
      takeUntil(this.unsubscribe$)
      ).subscribe((val:CheckboxItem)=>{
        
        
        this.statusChange = val 
        if(val.nombreDependencia === 'ALA'){
          this.ala.nombreDependencia = val.nombreDependencia
          this.ala.checked = val.checked
        }
        if(val.nombreDependencia === 'CIRA'){
          this.cira.nombreDependencia = val.nombreDependencia
          this.cira.checked = val.checked
        }
        
         
        
        this.cd.markForCheck();
      })
  }
  ngOnDestroy():void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
