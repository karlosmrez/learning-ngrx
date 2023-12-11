import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  httpClient = inject(HttpClient);

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }
}
