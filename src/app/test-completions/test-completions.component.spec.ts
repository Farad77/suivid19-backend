import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompletionsComponent } from './test-completions.component';

describe('TestCompletionsComponent', () => {
  let component: TestCompletionsComponent;
  let fixture: ComponentFixture<TestCompletionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCompletionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompletionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
