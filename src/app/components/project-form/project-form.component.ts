import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {
  @Input() project: Project = new Project(0, '', new Date());

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existingProject = this.projectService.getProject(+id).project;
      if (existingProject) {
        this.project = existingProject;
      }
    }
  }

  onSave(): void {
    if (this.project.id) {
      this.projectService.updateProject(this.project);
    } else {
      const newId = this.projectService.getProjects().length + 1;
      this.project.id = newId;
      this.projectService.addProject(this.project);
    }
    this.router.navigate(['/projects']);
  }
}
