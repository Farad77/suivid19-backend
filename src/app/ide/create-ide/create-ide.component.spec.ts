import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIdeComponent } from './create-ide.component';

describe('CreateIdeComponent', () => {
  let component: CreateIdeComponent;
  let fixture: ComponentFixture<CreateIdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
