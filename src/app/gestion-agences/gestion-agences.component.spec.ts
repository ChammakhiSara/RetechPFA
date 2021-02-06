import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAgencesComponent } from './gestion-agences.component';

describe('GestionAgencesComponent', () => {
  let component: GestionAgencesComponent;
  let fixture: ComponentFixture<GestionAgencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAgencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAgencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
