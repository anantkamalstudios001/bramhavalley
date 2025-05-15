import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { AdmissionInquiryComponent } from './admission-inquiry/admission-inquiry.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { EditPagesComponent } from './edit-pages/edit-pages.component';
import { MediaUploadsComponent } from './media-uploads/media-uploads.component';
import { SeoSettingsComponent } from './seo-settings/seo-settings.component';
import { QuickLinksManagerComponent } from './quick-links-manager/quick-links-manager.component';

export const FROUNT_OFFICE_ROUTE: Route[] = [
  {
    path: 'edit-pages',
    component: EditPagesComponent,
  },
  {
    path: 'media-uploads',
    component: MediaUploadsComponent,
  },
  {
    path: 'seo-settings',
    component:SeoSettingsComponent ,
  },
  {
    path: 'quick-links-manager',
    component:QuickLinksManagerComponent ,
  },
  { path: '**', component: Page404Component },
];
