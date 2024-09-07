import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  // Масив проектів
  projects: Project[] = [];

  // Інжектуємо ProjectService для доступу до даних проектів
  constructor(private projectService: ProjectService) {}

  // Викликається під час ініціалізації компонента
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    // Отримує всі проекти через сервіс і зберігає їх у змінну projects
  }

  // Метод для видалення проекту
  deleteProject(id: number): void {
    this.projectService.deleteProject(id);
    this.projects = this.projectService.getProjects();
    // Після видалення проекту, оновлює список проектів, викликаючи getProjects()
  }
}
