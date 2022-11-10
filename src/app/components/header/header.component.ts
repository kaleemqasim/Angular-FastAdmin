import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/TodoItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: TodoItem[]= []
  @Output() btnClickRoot = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  addTodoItem(item: TodoItem) {
    this.btnClickRoot.emit(item)
  }

}
