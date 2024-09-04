import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
