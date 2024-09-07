import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from './mock-project';
import { TaskService } from './task.service';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // Ініціалізуємо приватне поле масивом проектів
  private projects: Project[] = PROJECTS;


  constructor(private taskService:TaskService) {}

  // Метод для отримання всіх проектів
  getProjects(): Project[] {
    return this.projects;
  }

  //* */ Метод для отримання проекту за  task  за його id
  getProject(id: number){
    const proj= this.projects.find(project => project.id === id);
    const tasks=this.taskService.getTasks().filter(task=>task.projectid === id)
    return{
      project:proj,
      tasks:tasks,
    };

  }

  // Метод для додавання нового проекту
  addProject(project: Project): void {
    this.projects.push(project);
  }

  // Метод для оновлення існуючого проекту
  updateProject(updatedProject: Project): void {
    const index = this.projects.findIndex(project => project.id === updatedProject.id);
    if (index !== -1) {
      this.projects[index] = updatedProject;
    }
  }

  // Метод для видалення проекту за id
  deleteProject(id: number): void {
    this.projects = this.projects.filter(project => project.id !== id);
  }
}
interface ProjectWithTasks {
  project: Project;
  tasks: Task[];
}
