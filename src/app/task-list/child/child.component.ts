import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Task {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() user!: string;
  @Output() taskDeleted = new EventEmitter<number>();
  public isEditing: boolean = false;
  public editIndex = -1;
  public editedTaskName: string = '';

  @Input() set newTask(value: string) {
    if (value.trim() !== '') {
      this.tasks.push({ name: value, done: false });
    }
  }

  @Input() tasks: Task[] = [
    { name: 'Html5', done: true },
    { name: 'CSS3', done: true },
    { name: 'SCSS', done: false },
    { name: 'Java Script', done: false },
    { name: 'JQuery', done: false },
    { name: 'Angular', done: false },
  ];

  editTask(index: number) {
    this.isEditing = true;
    this.editIndex = index;
    this.editedTaskName = this.tasks[index].name;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.taskDeleted.emit(index);
  }

  onTaskAdded(task: string) {
    this.newTask = task;
  }

  saveTask(): void {
    this.isEditing = false;
    if (this.editIndex !== -1) {
      this.tasks[this.editIndex].name = this.editedTaskName;
      this.isEditing = false;
      this.editedTaskName = '';
    }
  }
  isControlDisabled(index: number): boolean {
    return this.isEditing;
  }
}
