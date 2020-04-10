import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIdesComponent } from './list-ides.component';

describe('ListIdesComponent', () => {
  let component: ListIdesComponent;
  let fixture: ComponentFixture<ListIdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
