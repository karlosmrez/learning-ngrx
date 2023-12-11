import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import * as TodoActions from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  actions$ = inject(Actions);
  todoService = inject(TodoService);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      exhaustMap(() =>
        this.todoService
          .getTodos()
          .pipe(map((todos: Todo[]) => TodoActions.loadTodos({ todos })))
      )
    )
  );
}
