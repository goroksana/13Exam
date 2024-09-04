import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

// Routes: Це тип, який представляє масив об'єктів маршрутів.
// Angular використовує цей масив для конфігурації маршрутизації в додатку.
// TaskListComponent та TaskFormComponent: Це компоненти, які будуть
// відображені при переході за певними маршрутами.

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/add', component: TaskFormComponent },
  { path: 'tasks/edit/:id', component: TaskFormComponent },
];

// { path: '', redirectTo: '/tasks', pathMatch: 'full' }:

//     Цей маршрут перенаправляє користувача з кореневого
// шляху (порожнього шляху) до маршруту /tasks.
//     redirectTo: '/tasks' означає, що коли користувач
// відкриває кореневу URL-адресу (наприклад, http://example.com/),
// він буде перенаправлений на /tasks.
//     pathMatch: 'full' означає, що перенаправлення відбудеться
// тільки тоді, коли шлях точно відповідає порожньому рядку.

// { path: 'tasks', component: TaskListComponent }:

//     Цей маршрут визначає, що при переході на /tasks буде
// відображений компонент TaskListComponent, який показує список завдань.

// { path: 'tasks/add', component: TaskFormComponent }:

//     Цей маршрут відображає компонент TaskFormComponent,
// який використовується для додавання нового завдання.
// Викликається, коли користувач переходить за URL /tasks/add.

// { path: 'tasks/edit/:id', component: TaskFormComponent }:

//     Цей маршрут також відображає компонент TaskFormComponent,
// але вже для редагування існуючого завдання.
//     :id є динамічним параметром, який представляє ідентифікатор
// завдання. Наприклад, URL може виглядати так: /tasks/edit/3.
