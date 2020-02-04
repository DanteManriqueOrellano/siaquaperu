import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaetapaComponent } from './listaetapa.component';

describe('ListaetapaComponent', () => {
  let component: ListaetapaComponent;
  let fixture: ComponentFixture<ListaetapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaetapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaetapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
