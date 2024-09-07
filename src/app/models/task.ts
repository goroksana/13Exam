export class Task {
  id: number = 0;                  // Унікальний ідентифікатор завдання
  name: string = '';               // Назва завдання
  description: string = '';        // Опис завдання
  dueDateTime: string = '';        // Дата і час виконання завдання у форматі рядка
  priority: string = '';
  projectid:number = 0;          // Пріоритет завдання (наприклад, 'Low', 'Medium', 'High')

  constructor(
    id: number,
    name: string,
    description: string,
    dueDateTime: string,
    priority: string,
    projectid:number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDateTime = dueDateTime;
    this.priority = priority;
    this.projectid = projectid;
  }
}
