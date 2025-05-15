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
  selector: 'app-polytechnic',
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
  templateUrl: './polytechnic.component.html',
  styleUrl: './polytechnic.component.scss'
})
export class PolytechnicComponent {
polytechnicForm!: FormGroup;
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
    this.polytechnicForm = this.fb.group({
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
    if (this.polytechnicForm.valid) {
      const formData = new FormData();
      formData.append('title', this.polytechnicForm.get('title')?.value);
      formData.append('description', this.polytechnicForm.get('description')?.value);
      formData.append('branches', this.polytechnicForm.get('branches')?.value);
      formData.append('eligibility', this.polytechnicForm.get('eligibility')?.value);
      formData.append('duration', this.polytechnicForm.get('duration')?.value);
      formData.append('career', this.polytechnicForm.get('career')?.value);

      if (this.selectedBrochure) {
        formData.append('brochure', this.selectedBrochure);
      }

      // TODO: send formData to backend API
      console.log('Polytechnic form submitted:', formData);
    }
  }
}
