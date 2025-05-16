import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-seo-settings',
  imports: 
  [
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
  templateUrl: './seo-settings.component.html',
  styleUrl: './seo-settings.component.scss'
})
export class SeoSettingsComponent {
  seoForm!: FormGroup;
  breadscrums = [
    {
      title: 'SEO Setting',
      items: ['Brahmavalley Main'],
      active: 'SEO Setting',
    },
  ];
  ogImageFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.seoForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      keywords: [''],
      canonicalUrl: [''],
      ogTitle: [''],
      ogDescription: [''],
      robots: ['index, follow'],
      trackingCode: ['']
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.ogImageFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.seoForm.valid) {
      const formData = new FormData();
      formData.append('title', this.seoForm.value.title);
      formData.append('description', this.seoForm.value.description);
      formData.append('keywords', this.seoForm.value.keywords);
      formData.append('canonicalUrl', this.seoForm.value.canonicalUrl);
      formData.append('ogTitle', this.seoForm.value.ogTitle);
      formData.append('ogDescription', this.seoForm.value.ogDescription);
      formData.append('robots', this.seoForm.value.robots);
      formData.append('trackingCode', this.seoForm.value.trackingCode);

      if (this.ogImageFile) {
        formData.append('ogImage', this.ogImageFile);
      }

      console.log('SEO Settings FormData ready to submit');
      // Send to API for saving
    }
  }
}
