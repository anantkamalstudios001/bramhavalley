import { Route } from '@angular/router';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { WebsiteVisitorsComponent } from './website-visitors/website-visitors.component';
import { LeadReportsComponent } from '../library/lead-reports/lead-reports.component';
import { ApplicationReportsComponent } from '../library/application-reports/application-reports.component';

export const DEPARTMENT_ROUTE: Route[] = [
  {
    path: 'website-visitors',
    component: WebsiteVisitorsComponent,
  },
  {
    path: 'lead-reports',
    component: LeadReportsComponent,
  },
  {
    path: 'application-reports',
    component: ApplicationReportsComponent,
  },
  { path: '**', component: Page404Component },
];
