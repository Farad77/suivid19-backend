import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPatientComponent } from './choix-patient.component';

describe('ChoixPatientComponent', () => {
  let component: ChoixPatientComponent;
  let fixture: ComponentFixture<ChoixPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
