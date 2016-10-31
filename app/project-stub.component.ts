import { Component, Input, OnInit }       from '@angular/core';

import { Project }        from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'project-stub',
  templateUrl: './app/project-stub.component.html',
  styleUrls: ['./app/project-stub.component.css']
})

export class ProjectStubComponent implements OnInit {
	@Input() givenId: number;
	project: Project;
	error: any;
	navigated = false;	

	constructor(
		private projectService: ProjectService) { }

	ngOnInit(): void {
		this.projectService.getProject(this.givenId).then(project => {
			this.project = project;
		});
	}

	translateFamiliarity(givenFamiliarity: string) {
		let famArray: string[] = ["No", "Some", "Moderate", "Extensive"];
		return famArray[givenFamiliarity];
	}
}