import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonitorsComponent } from './list-monitors.component';

describe('ListMonitorsComponent', () => {
  let component: ListMonitorsComponent;
  let fixture: ComponentFixture<ListMonitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMonitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
