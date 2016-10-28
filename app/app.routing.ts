import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }    from './dashboard.component';
import { PortfolioComponent }    from './portfolio.component';
import { EmploymentComponent }	 from './employment.component';
import { SkillsComponent }			 from './skills.component';
import { TheRestComponent }      from './the-rest.component';
import { ProjectDetailComponent} from './project-detail.component';

const appRoutes: Routes = [
	{
	  path: '',
	  redirectTo: '/dashboard',
	  pathMatch: 'full'
	},
	{
	  path: 'dashboard',
	  component: DashboardComponent
	},
  {
    path: 'programming',
    component: PortfolioComponent
  },
  {
    path: 'employment',
    component: EmploymentComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'the-rest',
    component: TheRestComponent
  },
  {
  	path: 'detail/:id',
  	component: ProjectDetailComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);