import { AllCourseComponent } from './all-course/all-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { AdminUsersComponent } from '../user-management/admin-users/admin-users.component';
import { FacultyStaffUsersComponent } from '../user-management/faculty-staff-users/faculty-staff-users.component';
import { StudentRegistrationsComponent } from '../user-management/student-registrations/student-registrations.component';

export const COURSE_ROUTE: Route[] = [
  {
    path: 'admin-users',
    component: AdminUsersComponent,
  },
  {
    path: 'faculty-staff-users',
    component: FacultyStaffUsersComponent,
  },
  {
    path: 'student-registrations',
    component: StudentRegistrationsComponent,
  },
  { path: '**', component: Page404Component },
];
