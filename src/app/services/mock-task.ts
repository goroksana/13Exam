// 2 імпортує клас Task, який раніше створили в файлі
// task.ts в папці models. Імпорт дозволяє
// використовувати цей клас у поточному файлі для
// створення об'єктів типу Task.

import { Task } from '../models/task';

// Ця константа TASKS може бути використана
// в сервісі TaskService, який згенерували,
// для надання даних про завдання вашим компонентам.
export const TASKS: Task[] = [
  // Цей рядок оголошує та експортує константу TASKS,
  // яка є масивом об'єктів типу Task. Використання ключового слова
  // export дозволяє використовувати цей масив в інших файлах

  new Task(1, 'Complete Angular project', 'Finish the to-do list project in Angular.', '2024-09-10 10:00', 'High'),
  new Task(2, 'Buy groceries', 'Purchase milk, bread, eggs, and fruits.', '2024-09-04 18:00', 'Medium'),
  new Task(3, 'Workout', 'Attend the gym for an hour of exercise.', '2024-09-05 07:00', 'Low'),
  new Task(4, 'Prepare presentation', 'Create slides for the upcoming meeting.', '2024-09-08 09:00', 'High'),
  new Task(5, 'Read a book', 'Finish reading the current chapter of the book.', '2024-09-06 20:00', 'Low')
];
