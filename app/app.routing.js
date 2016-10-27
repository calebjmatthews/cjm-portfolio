"use strict";
const router_1 = require('@angular/router');
const dashboard_component_1 = require('./dashboard.component');
const portfolio_component_1 = require('./portfolio.component');
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
        path: 'detail/:id',
        component: project_detail_component_1.ProjectDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map