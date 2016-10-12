import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project }  from './project';

@Injectable()
export class ProjectService {
  private projectsUrl = 'app/projects';  // URL to web api

  constructor(private http: Http) { }

  getProjects() {
    return this.http.get(this.projectsUrl)
               .toPromise()
               .then(response => response.json().data as Project[])
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getProject(id: number) {
    return this.getProjects()
      .then(projects => projects.find(project => project.id === id));
  }
}