import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigperfilComponent } from './configperfil.component';

describe('ConfigperfilComponent', () => {
  let component: ConfigperfilComponent;
  let fixture: ComponentFixture<ConfigperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
