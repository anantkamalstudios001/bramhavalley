import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-seo-analytics',
  imports: [
    BreadcrumbComponent,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatDatepickerModule,
        MatButtonModule,
        CommonModule
  ],
  templateUrl: './seo-analytics.component.html',
  styleUrl: './seo-analytics.component.scss'
})
export class SeoAnalyticsComponent {
  seoAnalyticsForm!: FormGroup;
  breadscrums = [
    {
      title: 'Settings Analytics',
      items: ['Settings'],
      active: 'Settings Analytics',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.seoAnalyticsForm = this.fb.group({
      gaTrackingId: [''],
      gtmId: [''],
      gscCode: [''],
      bingCode: [''],
      fbPixelId: [''],
      enableTracking: [true],
      customHeadScript: [''],
      customBodyScript: ['']
    });
  }

  onSubmit(): void {
    if (this.seoAnalyticsForm.valid) {
      const formData = this.seoAnalyticsForm.value;
      console.log('SEO Analytics Settings:', formData);
      // Send formData to backend API to update SEO/analytics settings
    }
  }
}
