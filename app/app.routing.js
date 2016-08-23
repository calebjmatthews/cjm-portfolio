"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var portfolio_component_1 = require('./portfolio.component');
var project_detail_component_1 = require('./project-detail.component');
var appRoutes = [
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
        path: 'portfolio',
        component: portfolio_component_1.PortfolioComponent
    },
    {
        path: 'detail/:id',
        component: project_detail_component_1.ProjectDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map