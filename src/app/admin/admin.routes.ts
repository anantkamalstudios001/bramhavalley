import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';

export const ADMIN_ROUTE: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTE),
  },
  {
    path: 'brahmavalley-main',
    loadChildren: () =>
      import('./frount-office/frount-office.routes').then(
        (m) => m.FROUNT_OFFICE_ROUTE
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./teachers/admin-teachers.routes').then(
        (m) => m.ADMIN_TEACHER_ROUTE
      ),
  },
  {
    path: 'academics',
    loadChildren: () =>
      import('./students/admin-students.routes').then(
        (m) => m.ADMIN_STUDENT_ROUTE
      ),
  },
  {
    path: 'user-management',
    loadChildren: () =>
      import('./courses/courses.routes').then((m) => m.COURSE_ROUTE),
  },
  {
    path: 'admission-enquiries',
    loadChildren: () =>
      import('./library/library.routes').then((m) => m.LIBRARY_ROUTE),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./departments/departments.routes').then(
        (m) => m.DEPARTMENT_ROUTE
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./staff/staff.routes').then((m) => m.STAFF_ROUTE),
  },
  {
    path: 'holidays',
    loadChildren: () =>
      import('./holidays/holidays.routes').then((m) => m.HOLIDAY_ROUTE),
  },
  {
    path: 'fees',
    loadChildren: () => import('./fees/fees.routes').then((m) => m.FEES_ROUTE),
  },
  {
    path: 'hostel',
    loadChildren: () =>
      import('./hostel/hostel.routes').then((m) => m.HOSTEL_ROUTE),
  },
  {
    path: 'class',
    loadChildren: () =>
      import('./class/class.routes').then((m) => m.CLASS_ROUTE),
  },
  {
    path: 'cms-manager',
    loadChildren: () =>
      import('./human-resources/cms-manager.routes').then((m) => m.CMS_MANAGER_ROUTE),
  },
  { path: '**', component: Page404Component },
];
