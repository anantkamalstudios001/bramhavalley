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
  selector: 'app-mba',
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
  templateUrl: './mba.component.html',
  styleUrl: './mba.component.scss'
})
export class MbaComponent {
  mbaForm!: FormGroup;
  breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
  selectedBrochure: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.mbaForm = this.fb.group({
      title: [''],
      description: [''],
      eligibility: [''],
      duration: [''],
      syllabus: [''],
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
    if (this.mbaForm.valid) {
      const formData = new FormData();
      formData.append('title', this.mbaForm.get('title')?.value);
      formData.append('description', this.mbaForm.get('description')?.value);
      formData.append('eligibility', this.mbaForm.get('eligibility')?.value);
      formData.append('duration', this.mbaForm.get('duration')?.value);
      formData.append('syllabus', this.mbaForm.get('syllabus')?.value);
      formData.append('career', this.mbaForm.get('career')?.value);

      if (this.selectedBrochure) {
        formData.append('brochure', this.selectedBrochure);
      }

      // Send `formData` to backend API
      console.log('MBA form submitted:', formData);
    }
  }
}
