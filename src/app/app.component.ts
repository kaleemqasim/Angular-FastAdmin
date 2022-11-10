import { Component, OnInit } from '@angular/core';
import { TodoItem } from './interfaces/TodoItem';
import { TodoService } from './services/todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-fast-admin';
  items: TodoItem[] = []

  constructor (private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => this.items = todos);
  }

  addItemInList (item: TodoItem) {
    this.todoService.addTodo(item).subscribe((it) => {
      this.items.push(it);
    })
    console.log(this.items)
  }

  removeItem(id: number) {
    this.todoService.removeTodo(id).subscribe(() => {
      this.items = this.items.filter((it) => it.id !== id)
    })
  }

  completeItem(id: number) {
    this.items = this.items.filter((it) => it.id !== id)
  }
}
