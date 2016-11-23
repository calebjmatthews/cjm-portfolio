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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var project_service_1 = require('./project.service');
var SkillsComponent = (function () {
    function SkillsComponent(router, projectService) {
        this.router = router;
        this.projectService = projectService;
        this.addingProject = false;
    }
    SkillsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().then(function (projects) { return _this.arrProjects = projects; });
    };
    SkillsComponent.prototype.gotoDetail = function (project) {
        var link = ['/detail', project.id];
        this.router.navigate(link);
    };
    SkillsComponent.prototype.close = function (savedProject) {
        this.addingProject = false;
        if (savedProject) {
            this.getProjects();
        }
    };
    SkillsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    SkillsComponent.prototype.getProject = function (givenId) {
        for (var iii = 0; iii < this.arrProjects.length; iii++) {
            if (this.arrProjects[iii].id === givenId) {
                return this.arrProjects[iii];
            }
        }
        return null;
    };
    SkillsComponent.prototype.linkInitials = function (project, linkId) {
        var initials = "";
        var projectName = this.getProject(linkId).name;
        for (var iii = 0; iii < projectName.length; iii++) {
            var character = projectName[iii];
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
    };
    SkillsComponent = __decorate([
        core_1.Component({
            selector: 'skills',
            templateUrl: './app/skills.component.html',
            styleUrls: ['./app/skills.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, project_service_1.ProjectService])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=skills.component.js.map