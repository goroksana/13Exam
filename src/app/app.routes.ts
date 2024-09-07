import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

export const routes: Routes = [

  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/add', component: TaskFormComponent },
  { path: 'tasks/edit/:id', component: TaskFormComponent },

  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/add', component: ProjectFormComponent },
  { path: 'projects/edit/:id', component: ProjectFormComponent },

];

