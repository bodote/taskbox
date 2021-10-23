import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class PureTaskListComponent {
  /** The list of tasks */
  tasksInOrder: Task[];
  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter((t) => t.state === 'TASK_PINNED'),
      ...arr.filter((t) => t.state !== 'TASK_PINNED'),
    ];
  }

  /** Checks if it's in loading state */
  @Input() loading = false;

  /** Event to change the task to pinned */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTaskP = new EventEmitter<Event>();

  /** Event to change the task to archived */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTaskP = new EventEmitter<Event>();
}
