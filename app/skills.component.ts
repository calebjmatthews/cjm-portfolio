import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { TooltipModule }     from 'ng2-bootstrap/components/tooltip';

import { Project }        from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'skills',
  templateUrl: './app/skills.component.html',
  styleUrls: ['./app/skills.component.css'],
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

  getProject(givenId: number) {
    for (let iii = 0; iii < this.arrProjects.length; iii++) {
      if (this.arrProjects[iii].id === givenId) {
        return this.arrProjects[iii];
      }
    }
    return null;
  }

  linkInitials(project: Project, linkId: number) {
    let initials: string = "";
    let projectName: string = this.getProject(linkId).name;

    for (let iii = 0; iii < projectName.length; iii++) {
      let character = projectName[iii];
      if ((character === ".")  || (character === " ")) { continue; }
      else if (character == character.toUpperCase()) { initials += (character); }
    }

    if (initials.length === 0) { return ""; }
    else if (initials.length <= 3) { return initials; }
    else if (initials.length > 3) { return initials.slice(0, 3); }
    else { return ""; }
  }
}