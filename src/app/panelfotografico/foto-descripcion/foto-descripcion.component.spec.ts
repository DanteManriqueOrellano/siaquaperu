import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoDescripcionComponent } from './foto-descripcion.component';

describe('FotoDescripcionComponent', () => {
  let component: FotoDescripcionComponent;
  let fixture: ComponentFixture<FotoDescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoDescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
