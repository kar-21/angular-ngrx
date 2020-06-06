import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListenComponent } from './todo-listen.component';

describe('TodoListenComponent', () => {
  let component: TodoListenComponent;
  let fixture: ComponentFixture<TodoListenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
