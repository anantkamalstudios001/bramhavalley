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
  selector: 'app-iti',
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
  templateUrl: './iti.component.html',
  styleUrl: './iti.component.scss'
})
export class ITIComponent {
 itiForm!: FormGroup;
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
    this.itiForm = this.fb.group({
      tradeName: [''],
      description: [''],
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
    if (this.itiForm.valid) {
      const formData = new FormData();
      formData.append('tradeName', this.itiForm.get('tradeName')?.value);
      formData.append('description', this.itiForm.get('description')?.value);
      formData.append('eligibility', this.itiForm.get('eligibility')?.value);
      formData.append('duration', this.itiForm.get('duration')?.value);
      formData.append('career', this.itiForm.get('career')?.value);

      if (this.selectedBrochure) {
        formData.append('brochure', this.selectedBrochure);
      }

      // TODO: send formData to backend API
      console.log('ITI form submitted:', formData);
    }
  }
}
