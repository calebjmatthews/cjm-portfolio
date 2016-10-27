// ToDo: 
// 1. Change tabs to spaces
// 2. Give selectors cjmp- prefix
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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
// Imports for Angular2 Bootstrap
const ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
// Imports for loading & configuring the in-memory web api
const http_2 = require('@angular/http');
const angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
const in_memory_data_service_1 = require('./in-memory-data.service');
const app_component_1 = require('./app.component');
const app_routing_1 = require('./app.routing');
const dashboard_component_1 = require('./dashboard.component');
const portfolio_component_1 = require('./portfolio.component');
const employment_component_1 = require('./employment.component');
const skills_component_1 = require('./skills.component');
const project_detail_component_1 = require('./project-detail.component');
const project_stub_component_1 = require('./project-stub.component');
const project_service_1 = require('./project.service');
const project_search_component_1 = require('./project-search.component');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule, ng2_bootstrap_1.CarouselModule],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, portfolio_component_1.PortfolioComponent,
            employment_component_1.EmploymentComponent, skills_component_1.SkillsComponent, project_detail_component_1.ProjectDetailComponent, project_stub_component_1.ProjectStubComponent,
            project_search_component_1.ProjectSearchComponent],
        providers: [project_service_1.ProjectService,
            { provide: http_2.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
            { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService } // in-mem server
        ],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map