import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Project }        from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit { 
	arrProjects: Project[] = [];

	constructor(
		private router: Router,
		private projectService: ProjectService) {

	}

	ngOnInit() {
		this.projectService.getProjects()
			.then(arrProjects => this.arrProjects = arrProjects.slice(0, 4));
	}

	gotoDetail(project: Project) {
		let link = ['/detail', project.id];
		this.router.navigate(link);
	}
}