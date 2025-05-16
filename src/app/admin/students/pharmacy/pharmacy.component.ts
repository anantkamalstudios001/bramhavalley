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
  selector: 'app-pharmacy',
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
  templateUrl: './pharmacy.component.html',
  styleUrl: './pharmacy.component.scss'
})
export class PharmacyComponent {
 pharmacyForm!: FormGroup;
 breadscrums = [
    {
      title: 'Pharmacy',
      items: ['Institutes'],
      active: 'Pharmacy',
    },
  ];
  selectedBrochure: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pharmacyForm = this.fb.group({
      title: [''],
      description: [''],
      programType: [''],
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
    if (this.pharmacyForm.valid) {
      const formData = new FormData();
      formData.append('title', this.pharmacyForm.get('title')?.value);
      formData.append('description', this.pharmacyForm.get('description')?.value);
      formData.append('programType', this.pharmacyForm.get('programType')?.value);
      formData.append('eligibility', this.pharmacyForm.get('eligibility')?.value);
      formData.append('duration', this.pharmacyForm.get('duration')?.value);
      formData.append('career', this.pharmacyForm.get('career')?.value);

      if (this.selectedBrochure) {
        formData.append('brochure', this.selectedBrochure);
      }

      // TODO: Send formData to your backend service
      console.log('Pharmacy form submitted:', formData);
    }
  }
}
