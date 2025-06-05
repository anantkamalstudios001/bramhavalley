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
import { AddAcademicsOverviewComponent } from './add-academics-overview/add-academics-overview.component';
import { ManageAcademicsOverviewComponent } from './manage-academics-overview/manage-academics-overview.component';
import { AddAcademicCalenderComponent } from './add-academic-calender/add-academic-calender.component';
import { ManageAcademicCalenderComponent } from './manage-academic-calender/manage-academic-calender.component';
import { AddListOfHolidaysComponent } from './add-list-of-holidays/add-list-of-holidays.component';
import { ManageListOfHolidaysComponent } from './manage-list-of-holidays/manage-list-of-holidays.component';
import { AddAcademicsRegulationComponent } from './add-academics-regulation/add-academics-regulation.component';
import { ManageAcademicsRegulationComponent } from './manage-academics-regulation/manage-academics-regulation.component';

export const ADMIN_STUDENT_ROUTE: Route[] = [
  {
    path: 'add-academics-overview',
    component: AddAcademicsOverviewComponent,
  },
  {
    path: 'manage-academics-overview',
    component: ManageAcademicsOverviewComponent,
  },
  {
    path: 'add-academic-calender',
    component: AddAcademicCalenderComponent,
  },
  {
    path: 'manage-academic-calender',
    component: ManageAcademicCalenderComponent,
  },
  {
    path: 'add-list-of-holidays',
    component: AddListOfHolidaysComponent,
  },
  {
    path: 'manage-list-of-holidays',
    component: ManageListOfHolidaysComponent,
  },
  {
    path: 'add-academics-regulation',
    component: AddAcademicsRegulationComponent,
  },
    {
    path: 'manage-academics-regulation',
    component: ManageAcademicsRegulationComponent,
  },
  { path: '**', component: Page404Component },
];
