"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const project_service_1 = require('./project.service');
let SkillsComponent = class SkillsComponent {
    constructor(router, projectService) {
        this.router = router;
        this.projectService = projectService;
        this.addingProject = false;
    }
    getProjects() {
        this.projectService.getProjects().then(projects => this.arrProjects = projects);
    }
    gotoDetail(project) {
        let link = ['/detail', project.id];
        this.router.navigate(link);
    }
    close(savedProject) {
        this.addingProject = false;
        if (savedProject) {
            this.getProjects();
        }
    }
    ngOnInit() {
        this.getProjects();
    }
    getProject(givenId) {
        for (let iii = 0; iii < this.arrProjects.length; iii++) {
            if (this.arrProjects[iii].id === givenId) {
                return this.arrProjects[iii];
            }
        }
        return null;
    }
    linkInitials(project, linkId) {
        let initials = "";
        let projectName = this.getProject(linkId).name;
        for (let iii = 0; iii < projectName.length; iii++) {
            let character = projectName[iii];
            if ((character === ".") || (character === " ")) {
                continue;
            }
            else if (character == character.toUpperCase()) {
                initials += (character);
            }
        }
        if (initials.length === 0) {
            return "";
        }
        else if (initials.length <= 3) {
            return initials;
        }
        else if (initials.length > 3) {
            return initials.slice(0, 3);
        }
        else {
            return "";
        }
    }
};
SkillsComponent = __decorate([
    core_1.Component({
        selector: 'skills',
        templateUrl: './app/skills.component.html',
        styleUrls: ['./app/skills.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.Router, project_service_1.ProjectService])
], SkillsComponent);
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=skills.component.js.map