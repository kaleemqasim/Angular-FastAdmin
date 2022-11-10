import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/TodoItem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() removeTodoItem = new EventEmitter();
  @Output() markCompleteItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo() {
    this.removeTodoItem.emit(this.item.id);
  }
  
  markComplete() {
    this.markCompleteItem.emit(this.item.id);
  }

}
