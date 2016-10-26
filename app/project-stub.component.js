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
const project_service_1 = require('./project.service');
let ProjectStubComponent = class ProjectStubComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.navigated = false;
    }
    ngOnInit() {
        this.projectService.getProject(this.givenId).then(project => {
            this.project = project;
        });
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], ProjectStubComponent.prototype, "givenId", void 0);
ProjectStubComponent = __decorate([
    core_1.Component({
        selector: 'project-stub',
        templateUrl: './app/project-stub.component.html',
        styleUrls: ['./app/project-stub.component.css']
    }), 
    __metadata('design:paramtypes', [project_service_1.ProjectService])
], ProjectStubComponent);
exports.ProjectStubComponent = ProjectStubComponent;
//# sourceMappingURL=project-stub.component.js.map