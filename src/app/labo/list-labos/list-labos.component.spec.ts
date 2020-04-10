import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLabosComponent } from './list-labos.component';

describe('ListLabosComponent', () => {
  let component: ListLabosComponent;
  let fixture: ComponentFixture<ListLabosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLabosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLabosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
