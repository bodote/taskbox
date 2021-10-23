import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: Task; // consists of id,title,state

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTaskC = new EventEmitter<string>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTaskC = new EventEmitter<string>();

  /**
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: string) {
    // called with task.id when click on star icon exept when already archived
    this.onPinTaskC.emit(id);
  }
  /**
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(taskId: string) {
    this.onArchiveTaskC.emit(taskId);
  }
}
