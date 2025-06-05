import { Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { WebsiteManagementComponent } from './website-management/website-management.component';
export const DASHBOARD_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'website-management',
    component: WebsiteManagementComponent,
  },
  {
    path: 'dashboard2',
    component: Dashboard2Component,
  },

  { path: '**', component: Page404Component },
];
