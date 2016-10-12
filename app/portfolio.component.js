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
var PortfolioComponent = (function () {
    function PortfolioComponent(router, projectService) {
        this.router = router;
        this.projectService = projectService;
        this.addingProject = false;
    }
    PortfolioComponent.prototype.onSelect = function (project) { this.selProject = project; };
    PortfolioComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().then(function (projects) { return _this.arrProjects = projects; });
    };
    PortfolioComponent.prototype.gotoDetail = function (project) {
        var link = ['/detail', project.id];
        this.router.navigate(link);
    };
    PortfolioComponent.prototype.addProject = function () {
        this.addingProject = true;
        this.selProject = null;
    };
    PortfolioComponent.prototype.deleteProject = function (project, event) {
        var _this = this;
        event.stopPropagation();
        this.projectService
            .delete(project)
            .then(function (res) {
            _this.arrProjects = _this.arrProjects.filter(function (p) { return p !== project; });
            if (_this.selProject === project) {
                _this.selProject = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    PortfolioComponent.prototype.close = function (savedProject) {
        this.addingProject = false;
        if (savedProject) {
            this.getProjects();
        }
    };
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    PortfolioComponent = __decorate([
        core_1.Component({
            selector: 'portfolio',
            templateUrl: './app/portfolio.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, project_service_1.ProjectService])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map