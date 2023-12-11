import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';

export const loadTodos = createAction(
  '[Todos] Load Todos',
  props<{ todos: Todo[] }>()
);

export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{ todo: Todo }>()
);

export const toggleTodo = createAction(
  '[Todos] Toggle Todo',
  props<{ id: String }>()
);

export const removeTodo = createAction(
  '[Todos] Remove Todo',
  props<{ id: String }>()
);
