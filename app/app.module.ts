// ToDo: 
// 1. Change tabs to spaces
// 2. Give selectors cjmp- prefix

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for Angular2 Bootstrap
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

// Imports for loading & configuring the in-memory web api
import { XHRBackend }                        from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { AppComponent }           from './app.component';
import { routing }                from './app.routing';
import { DashboardComponent }     from './dashboard.component';
import { PortfolioComponent }     from './portfolio.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectStubComponent }   from './project-stub.component';
import { ProjectService }         from './project.service';
import { ProjectSearchComponent } from './project-search.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule, CarouselModule ],
  declarations: [ AppComponent, DashboardComponent, PortfolioComponent, 
    ProjectDetailComponent, ProjectStubComponent, ProjectSearchComponent ],
  providers:    [ ProjectService, 
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
