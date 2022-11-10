import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void { 
    // kind of reducer, changing state of showAddTask
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> { 
    // kind of selector in redux, we can subscribe to it,
    // if any changes happens, listener will be triggered.
    return this.subject.asObservable();
  }
}
