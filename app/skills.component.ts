import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Project }        from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'skills',
  templateUrl: './app/skills.component.html',
  styleUrls: ['./app/skills.component.css']
})

export class SkillsComponent implements OnInit {
	arrProjects: Project[];
  error: any;
  addingProject: boolean = false;

	constructor(
    private router: Router,
    private projectService: ProjectService) {
  }

	getProjects() {
    this.projectService.getProjects().then(projects => this.arrProjects = projects);
  }

  gotoDetail(project: Project) {
    let link = ['/detail', project.id];
    this.router.navigate(link);
  }

  close(savedProject: Project): void {
    this.addingProject = false;
    if (savedProject) { this.getProjects(); }
  }

  ngOnInit() {
		this.getProjects();
	}
}