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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.projectsUrl = 'app/projects'; // URL to web api
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.projectsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ProjectService.prototype.getProject = function (id) {
        return this.getProjects()
            .then(function (projects) { return projects.find(function (project) { return project.id === id; }); });
    };
    ProjectService.prototype.post = function (project) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.projectsUrl, JSON.stringify(project), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ProjectService.prototype.put = function (project) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.projectsUrl + "/" + project.id;
        return this.http
            .put(url, JSON.stringify(project), { headers: headers })
            .toPromise()
            .then(function () { return project; })
            .catch(this.handleError);
    };
    ProjectService.prototype.delete = function (project) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.projectsUrl + "/" + project.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    ProjectService.prototype.save = function (project) {
        if (project.id) {
            return this.put(project);
        }
        return this.post(project);
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map