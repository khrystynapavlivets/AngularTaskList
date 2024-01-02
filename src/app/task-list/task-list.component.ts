import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ChildComponent } from './child/child.component'
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  public count: number = 6;
  private tasks: string[] = [];
  public newTask: string = '';
  public taskName: string = '';
  public user = 'Ivan Ivanov'

  addTask(): void {
    if (this.taskName.trim() !== '') {
      this.count++;
      this.newTask = this.taskName
      this.taskName = '';
    }
  }

  onTaskDeleted(index: number) {
    this.count--;
  }
}

