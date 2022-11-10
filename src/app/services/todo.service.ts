import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/TodoItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('http://localhost:3000/items');
  }

  removeTodo(id: number): Observable<TodoItem> {
    return this.http.delete<TodoItem>(`http://localhost:3000/items/${id}`)
  }

  addTodo(task: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(`http://localhost:3000/items`, task, httpOptions)
  }
}
