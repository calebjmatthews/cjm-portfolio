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
var project_1 = require('./project');
var project_service_1 = require('./project.service');
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(projectService, router, route) {
        this.projectService = projectService;
        this.router = router;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.slides = [];
        this.navigated = false;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] != undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.projectService.getProject(id).then(function (project) {
                    _this.project = project;
                    _this.setSlides();
                });
            }
            else {
                _this.navigated = false;
                _this.project = new project_1.Project();
            }
        });
    };
    ProjectDetailComponent.prototype.setSlides = function () {
        for (var iii = 0; iii < this.project.screenshots.length; iii++) {
            var tCaption = void 0;
            if (this.project.captions[iii] != undefined) {
                tCaption = this.project.captions[iii];
            }
            else if (this.project.captions[0] != undefined) {
                tCaption = this.project.captions[0];
            }
            this.slides.push({ image: this.project.screenshots[iii], text: tCaption });
        }
    };
    ProjectDetailComponent.prototype.gotoIdDetail = function (id) {
        var link = ['/detail', id];
        this.router.navigate(link);
    };
    ProjectDetailComponent.prototype.goBack = function (savedProject) {
        if (savedProject === void 0) { savedProject = null; }
        this.close.emit(savedProject);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_1.Project)
    ], ProjectDetailComponent.prototype, "project", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProjectDetailComponent.prototype, "close", void 0);
    ProjectDetailComponent = __decorate([
        core_1.Component({
            selector: 'project-detail',
            templateUrl: './app/project-detail.component.html',
            styleUrls: ['./app/project-detail.component.css']
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router, router_1.ActivatedRoute])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map