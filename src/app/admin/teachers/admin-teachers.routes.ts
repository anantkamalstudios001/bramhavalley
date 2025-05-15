import { Route } from '@angular/router';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { TeacherTimetableComponent } from './teacher-timetable/teacher-timetable.component';
import { AssignClassTeacherComponent } from './assign-class-teacher/assign-class-teacher.component';
import { EditPagesComponent } from '../frount-office/edit-pages/edit-pages.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { FacultyUploadsComponent } from './faculty-uploads/faculty-uploads.component';

export const ADMIN_TEACHER_ROUTE: Route[] = [
  {
    path: 'edit-pages',
    component: EditPagesComponent,
  },
  {
    path: 'course-management',
    component: CourseManagementComponent,
  },
  {
    path: 'faculty-uploads',
    component: FacultyUploadsComponent,
  },
  { path: '**', component: Page404Component },
];
