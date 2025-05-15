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
  selector: 'app-b-ed',
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
  templateUrl: './b-ed.component.html',
  styleUrl: './b-ed.component.scss'
})
export class BEdComponent {
 bedForm!: FormGroup;
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
    this.bedForm = this.fb.group({
      title: [''],
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
    if (this.bedForm.valid) {
      const formData = new FormData();
      formData.append('title', this.bedForm.get('title')?.value);
      formData.append('description', this.bedForm.get('description')?.value);
      formData.append('eligibility', this.bedForm.get('eligibility')?.value);
      formData.append('duration', this.bedForm.get('duration')?.value);
      formData.append('career', this.bedForm.get('career')?.value);

      if (this.selectedBrochure) {
        formData.append('brochure', this.selectedBrochure);
      }

      // TODO: Send formData to backend API
      console.log('B.Ed form submitted:', formData);
    }
  }
}
