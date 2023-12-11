import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import {
  addTodo,
  loadTodos,
  removeTodo,
  toggleTodo,
} from 'src/app/store/actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos$!: Todo[];
  store = inject(Store<{ todos: { todo: Todo[] } }>);

  newTodoTitle = '';

  constructor() {
    this.store.select('todos').subscribe((todosState: { todos: Todo[] }) => {
      this.todos$ = todosState.todos;
    });
  }

  ngOnInit() {
    this.store.dispatch(loadTodos({ todos: this.todos$ }));
  }

  addTodo() {
    if (this.newTodoTitle.trim() === '') {
      return;
    }
    const todo: Todo = {
      id: Date.now().toString(),
      title: this.newTodoTitle,
      completed: false,
      userId: 1,
    };

    this.store.dispatch(addTodo({ todo }));
    this.newTodoTitle = '';
  }

  toggleTodo(id: string) {
    this.store.dispatch(toggleTodo({ id }));
  }
  
  removeTodo(id: string) {
    this.store.dispatch(removeTodo({ id }));
  }
}
