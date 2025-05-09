import { Route } from '@angular/router';
import { AllstaffComponent } from './all-staff/all-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AboutStaffComponent } from './about-staff/about-staff.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';
import { WebsiteSettingComponent } from '../settings/website-setting/website-setting.component';
import { SeoAnalyticsComponent } from '../settings/seo-analytics/seo-analytics.component';
import { BackupRestoreComponent } from '../settings/backup-restore/backup-restore.component';
export const STAFF_ROUTE: Route[] = [
  {
    path: 'website-settings',
    component: WebsiteSettingComponent,
  },
  {
    path: 'seo-&-analytics',
    component: SeoAnalyticsComponent,
  },
  {
    path: 'backup-&-restore',
    component: BackupRestoreComponent,
  },
  { path: '**', component: Page404Component },
];
