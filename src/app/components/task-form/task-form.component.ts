import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Input() task: Task = new Task(0, '', '', '', '', 0);
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router


  ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existingTask = this.taskService.getTask(+id);
      if (existingTask) {
        this.task = existingTask;
      }
    }
  }
  onSave(): void {
    if (this.task.id) {
      this.taskService.updateTask(this.task);

    }
    else {
      const newId = this.taskService.getTasks().length + 1;
      this.task.id = newId;
      this.taskService.addTask(this.task);
    }
    this.router.navigate(['/tasks']);
  }

}
