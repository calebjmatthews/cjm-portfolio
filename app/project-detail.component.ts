import { Component, EventEmitter, Input, OnInit, Output }       from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { CarouselModule } from 'ng2-bootstrap/components/carousel';

import { Project }        from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'project-detail',
  templateUrl: './app/project-detail.component.html',
  styleUrls: ['./app/project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {
	@Input() project: Project;
	@Output() close = new EventEmitter();
	public slides: any[] = [];
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
				this.projectService.getProject(id).then(project => {
					this.project = project;
					this.setSlides();
				});
			}
			else {
				this.navigated = false;
				this.project = new Project();
			}
		});
	}

	setSlides(): void {
		for (let iii = 0; iii < this.project.screenshots.length; iii++) {
			let tCaption: string;
			if (this.project.captions[iii] != undefined) {
				tCaption = this.project.captions[iii];
			}
			else if (this.project.captions[0] != undefined) {
				tCaption = this.project.captions[0];
			}
			this.slides.push({image: this.project.screenshots[iii], text: tCaption});
		}
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
