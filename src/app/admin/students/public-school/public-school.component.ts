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
  selector: 'app-public-school',
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
  templateUrl: './public-school.component.html',
  styleUrl: './public-school.component.scss'
})
export class PublicSchoolComponent {
 schoolForm!: FormGroup;
 breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ]; 
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.schoolForm = this.fb.group({
      schoolName: [''],
      description: [''],
      classesOffered: [''],
      facilities: [''],
      admissionProcess: ['']
    });
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    if (this.schoolForm.valid) {
      const formData = new FormData();
      formData.append('schoolName', this.schoolForm.get('schoolName')?.value);
      formData.append('description', this.schoolForm.get('description')?.value);
      formData.append('classesOffered', this.schoolForm.get('classesOffered')?.value);
      formData.append('facilities', this.schoolForm.get('facilities')?.value);
      formData.append('admissionProcess', this.schoolForm.get('admissionProcess')?.value);

      if (this.selectedFile) {
        formData.append('prospectus', this.selectedFile);
      }

      // TODO: Send formData to backend API
      console.log('Public School form submitted', formData);
    }
  }
}
