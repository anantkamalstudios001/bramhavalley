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
  selector: 'app-new-enquiries',
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
  templateUrl: './new-enquiries.component.html',
  styleUrl: './new-enquiries.component.scss'
})
export class NewEnquiriesComponent {
   enquiryForm!: FormGroup;
    breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      enquiryType: ['', Validators.required],
      course: ['', Validators.required],
      message: [''],
      enquiryDate: [new Date().toISOString().substring(0, 10), Validators.required],
      followUpRequired: [false]
    });
  }

  onSubmit(): void {
    if (this.enquiryForm.valid) {
      console.log(this.enquiryForm.value);
      // Send form data to backend here
    }
  }
}
