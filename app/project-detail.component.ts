import { Component, EventEmitter, Input, OnInit, Output }       from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Project }        from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'project-detail',
  templateUrl: './app/project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
	@Input() project: Project;
	@Output() close = new EventEmitter();
	error: any;
	navigated = false;	

	constructor(
		private projectService: ProjectService,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			if (params['id'] != undefined) {
				let id = +params['id'];
				this.navigated = true;
				this.projectService.getProject(id).then(project => this.project = project);
			}
			else {
				this.navigated = false;
				this.project = new Project();
			}
		});
	}

	gotoIdDetail(id) {
		let link = ['/detail', id];
		this.router.navigate(link);
	}

	goBack(savedProject: Project = null): void {
		this.close.emit(savedProject);
		if (this.navigated) { window.history.back(); }
	}
}
