import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Project }        from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'portfolio',
  templateUrl: './app/portfolio.component.html'
})

export class PortfolioComponent implements OnInit {
	arrProjects: Project[];
	selProject: Project;
  error: any;
  addingProject: boolean = false;

	constructor(
    private router: Router,
    private projectService: ProjectService) {

  }

	onSelect(project: Project) { this.selProject = project; }

	getProjects() {
    this.projectService.getProjects().then(projects => this.arrProjects = projects);
  }

  gotoDetail(project: Project) {
    let link = ['/detail', project.id];
    this.router.navigate(link);
  }

  addProject(): void {
    this.addingProject = true;
    this.selProject = null;
  }

  deleteProject(project: Project, event: any): void {
    event.stopPropagation();
    this.projectService
        .delete(project)
        .then(res => {
          this.arrProjects = this.arrProjects.filter(p => p !== project);
          if (this.selProject === project) { this.selProject = null; }
        })
        .catch(error => this.error = error);
  }

  close(savedProject: Project): void {
    this.addingProject = false;
    if (savedProject) { this.getProjects(); }
  }

  ngOnInit() {
		this.getProjects();
	}
}