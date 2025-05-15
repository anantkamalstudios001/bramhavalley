import { Route } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { AllHolidayComponent } from './all-holidays/all-holidays.component';
import { TodaysAttendanceComponent } from './todays-attendance/todays-attendance.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PayslipComponent } from './payslip/payslip.component';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
export const CMS_MANAGER_ROUTE: Route[] = [
  {
    path: 'news-&-events',
    component: NewsEventsComponent,
  },
  {
    path: 'photo-gallery',
    component: PhotoGalleryComponent,
  },
  {
    path: 'notice-board',
    component: NoticeBoardComponent,
  }
];
