import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import {
  addTodo,
  loadTodos,
  removeTodo,
  toggleTodo,
} from '../actions/todo.actions';

export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: [
    {
      id: '1',
      title: 'Todo 1',
      completed: false,
      userId: 1,
    },
  ],
};

export const TodosReducer = createReducer(
  initialState,
  on(loadTodos, (state, { todos }) => ({
    ...state,
    todos,
  })),
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))
);
