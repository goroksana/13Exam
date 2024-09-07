export class Project {
  // Властивості к Project
  id: number = 0;
  name: string = '';
  tildate: Date = new Date();

  // Конструктор приймає параметри id та name
  constructor(id: number, name: string, tildate: Date) {
    // Ініціалізація властивостей
    this.id = id;
    this.name = name;
    this.tildate = tildate;
  }
}
