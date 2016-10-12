import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { ProjectSearchService } from './project-search.service';
import { Project }              from './project';

@Component({
	selector:    'my-project-search',
	templateUrl: 'app/project-search.component.html',
	providers:   [ProjectSearchService]
})

export class ProjectSearchComponent implements OnInit {

	arrProjects: Observable<Project[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private projectSearchService: ProjectSearchService,
		private router: Router) {}

	// Push a search term into the observable stream
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.arrProjects = this.searchTerms
				// Wait for 300ms pause in events
		    .debounceTime(300)
		    // Ingore if next search term is same as previous
		    .distinctUntilChanged()
		    // Switch to new observable each time
		    .switchMap(term => term  
			    // Return the http search observable
			    ? this.projectSearchService.search(term)
			    // Or the observable of empty projects if no search term
			    : Observable.of<Project[]>([]))
		    .catch(error => {
		    	console.log(error);
		    	return Observable.of<Project[]>([]);
		    });
	}

	gotoDetail(project: Project): void {
		let link = ['/detail', project.id];
		this.router.navigate(link);
	}
}