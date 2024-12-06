import { TasksService } from './../tasks.service';
import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private TasksService = inject(TasksService);

  onCompleteTask() {
    this.TasksService.removeTask(this.task.id);
  }
}
