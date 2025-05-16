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
  selector: 'app-engineering',
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
  templateUrl: './engineering.component.html',
  styleUrl: './engineering.component.scss'
})
export class EngineeringComponent {
  engineeringForm!: FormGroup;
  breadscrums = [
    {
      title: 'Engineering',
      items: ['Institutes'],
      active: 'Engineering',
    },
  ];
  selectedBrochure: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.engineeringForm = this.fb.group({
      title: [''],
      description: [''],
      branches: [''],
      eligibility: [''],
      duration: [''],
      career: ['']
    });
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedBrochure = file;
    }
  }

  onSubmit(): void {
    if (this.engineeringForm.valid) {
      const formData = new FormData();
      formData.append('title', this.engineeringForm.get('title')?.value);
      formData.append('description', this.engineeringForm.get('description')?.value);
      formData.append('branches', this.engineeringForm.get('branches')?.value);
      formData.append('eligibility', this.engineeringForm.get('eligibility')?.value);
      formData.append('duration', this.engineeringForm.get('duration')?.value);
      formData.append('career', this.engineeringForm.get('career')?.value);

      if (this.selectedBrochure) {
        formData.append('brochure', this.selectedBrochure);
      }

      // TODO: Send `formData` to backend API
      console.log('Engineering program submitted:', formData);
    }
  }
}
