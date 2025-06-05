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
import { PresidentsMessageComponent } from './presidents-message/presidents-message.component';
import { ChairmansMessageComponent } from './chairmans-message/chairmans-message.component';
import { ViceChancellorsMessageComponent } from './vice-chancellors-message/vice-chancellors-message.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { OurGroupInstituteComponent } from './our-group-institute/our-group-institute.component';
import { GoverningBodyComponent } from './governing-body/governing-body.component';
import { BoardOfManagementComponent } from './board-of-management/board-of-management.component';
import { UniversityOfficersComponent } from './university-officers/university-officers.component';
import { CommitteesComponent } from './committees/committees.component';
import { MOUsComponent } from './mous/mous.component';
import { MembershipComponent } from './membership/membership.component';
import { ManageAboutUsImgComponent } from '../manage-about-us-img/manage-about-us-img.component';
import { AddCoreVlueComponent } from './add-core-vlue/add-core-vlue.component';
import { ManageCoreVluesComponent } from './manage-core-vlues/manage-core-vlues.component';
import { AddpresidentComponent } from './addpresident/addpresident.component';
import { MaangepresidentComponent } from './maangepresident/maangepresident.component';

export const ADMIN_TEACHER_ROUTE: Route[] = [
    {
    path: 'add-about-us-image',
    component: AboutTeacherComponent,
  },
  {
    path: 'manage-about-us-image',
    component: ManageAboutUsImgComponent,
  },
  {
    path: 'add-who-we-are',
    component: CourseManagementComponent,
  },
  {
    path: 'manage-who-we-are',
    component: PresidentsMessageComponent,
  },
  {
    path: 'add-vision-mission',
    component: ChairmansMessageComponent,
  },
  {
    path: 'manage-vision-mission',
    component: ViceChancellorsMessageComponent,
  },
  {
    path: 'add-campus-gallery',
    component: ApprovalsComponent,
  },
  {
    path: 'manage-campus-gallery',
    component: OurGroupInstituteComponent,
  },
  {
    path: 'add-Placements-Description',
    component: GoverningBodyComponent,
  },
  {
    path: 'manage-Placements-Description',
    component: BoardOfManagementComponent,
  },
  {
    path: 'add-Highlight-Case',
    component: MOUsComponent,
  },
  {
    path: 'manage-Highlight-Case',
    component: MembershipComponent,
  },
    {
    path: 'add-core-values',
    component: AddCoreVlueComponent,
  },
  {
    path: 'manage-core-values',
    component: ManageCoreVluesComponent,
  },
      {
    path: 'add-president-data',
    component: AddTeacherComponent,
  },
  {
    path: 'manage-president-data',
    component: AllTeachersComponent,
  },
  {
    path: 'add-chairman-data',
    component: AddpresidentComponent,
  },
  {
    path: 'manage-chairman-data',
    component: MaangepresidentComponent,
  },
  
  { path: '**', component: Page404Component },
];
