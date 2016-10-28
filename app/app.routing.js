"use strict";
const router_1 = require('@angular/router');
const dashboard_component_1 = require('./dashboard.component');
const portfolio_component_1 = require('./portfolio.component');
const employment_component_1 = require('./employment.component');
const skills_component_1 = require('./skills.component');
const the_rest_component_1 = require('./the-rest.component');
const project_detail_component_1 = require('./project-detail.component');
const appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'programming',
        component: portfolio_component_1.PortfolioComponent
    },
    {
        path: 'employment',
        component: employment_component_1.EmploymentComponent
    },
    {
        path: 'skills',
        component: skills_component_1.SkillsComponent
    },
    {
        path: 'the-rest',
        component: the_rest_component_1.TheRestComponent
    },
    {
        path: 'detail/:id',
        component: project_detail_component_1.ProjectDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map