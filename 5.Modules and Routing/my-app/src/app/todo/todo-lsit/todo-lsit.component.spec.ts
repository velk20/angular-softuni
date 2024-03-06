import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLsitComponent } from './todo-lsit.component';

describe('TodoLsitComponent', () => {
  let component: TodoLsitComponent;
  let fixture: ComponentFixture<TodoLsitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoLsitComponent]
    });
    fixture = TestBed.createComponent(TodoLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
