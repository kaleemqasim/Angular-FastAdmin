import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  itemForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    is_completed: new FormControl(false)
  })
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  get title() {
    return this.itemForm.get('title');
  }

  addItem() {
    let values: any = this.itemForm.value;

    values.id = uuidv4();
    this.btnClick.emit(this.itemForm.value);
  }
}
