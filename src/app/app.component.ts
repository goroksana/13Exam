import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent, RouterLink, ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-list-app';
}
