import { Route } from '@angular/router';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { BookStatusComponent } from './book-status/book-status.component';
import { NewEnquiriesComponent } from './new-enquiries/new-enquiries.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { DownloadFormsComponent } from './download-forms/download-forms.component';

export const LIBRARY_ROUTE: Route[] = [
  {
    path: 'new-enquiries',
    component: NewEnquiriesComponent,
  },
  {
    path: 'application-status',
    component: ApplicationStatusComponent,
  },
  {
    path: 'download-forms',
    component: DownloadFormsComponent,
  },
  { path: '**', component: Page404Component },
];
