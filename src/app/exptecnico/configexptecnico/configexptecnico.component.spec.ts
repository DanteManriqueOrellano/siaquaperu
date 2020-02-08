import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigexptecnicoComponent } from './configexptecnico.component';

describe('ConfigexptecnicoComponent', () => {
  let component: ConfigexptecnicoComponent;
  let fixture: ComponentFixture<ConfigexptecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigexptecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigexptecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
