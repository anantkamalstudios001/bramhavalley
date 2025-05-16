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
  selector: 'app-website-setting',
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
  templateUrl: './website-setting.component.html',
  styleUrl: './website-setting.component.scss'
})
export class WebsiteSettingComponent {
   settingsForm!: FormGroup;
   breadscrums = [
    {
      title: 'Website Settings',
      items: ['Settings'],
      active: 'Website Settings',
    },
  ];
  logoFile: File | null = null;
  faviconFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      siteName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      language: ['en'],
      timezone: [''],
      facebook: [''],
      twitter: [''],
      maintenanceMode: [false]
    });
  }

  onLogoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.logoFile = input.files[0];
    }
  }

  onFaviconChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.faviconFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.settingsForm.valid) {
      const formData = new FormData();
      Object.entries(this.settingsForm.value).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      if (this.logoFile) {
        formData.append('logo', this.logoFile);
      }

      if (this.faviconFile) {
        formData.append('favicon', this.faviconFile);
      }

      console.log('Website Settings ready to send:', this.settingsForm.value);
      // Send formData to API to update settings
    }
  }
}
