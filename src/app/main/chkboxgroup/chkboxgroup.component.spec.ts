import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkboxgroupComponent } from './chkboxgroup.component';

describe('ChkboxgroupComponent', () => {
  let component: ChkboxgroupComponent;
  let fixture: ComponentFixture<ChkboxgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChkboxgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChkboxgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
