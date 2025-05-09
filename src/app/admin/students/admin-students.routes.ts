import { Route } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AboutStudentComponent } from './about-student/about-student.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { MbaComponent } from './mba/mba.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PolytechnicComponent } from './polytechnic/polytechnic.component';
import { ITIComponent } from './iti/iti.component';
import { PublicSchoolComponent } from './public-school/public-school.component';
import { BEdComponent } from './b-ed/b-ed.component';

export const ADMIN_STUDENT_ROUTE: Route[] = [
  {
    path: 'MBA',
    component: MbaComponent,
  },
  {
    path: 'engineering',
    component: EngineeringComponent,
  },
  {
    path: 'pharmacy',
    component: PharmacyComponent,
  },
  {
    path: 'polytechnic',
    component: PolytechnicComponent,
  },
  {
    path: 'ITI',
    component: ITIComponent,
  },
  {
    path: 'public-school',
    component: PublicSchoolComponent,
  },
  {
    path: 'b-ed',
    component: BEdComponent,
  },
  { path: '**', component: Page404Component },
];
