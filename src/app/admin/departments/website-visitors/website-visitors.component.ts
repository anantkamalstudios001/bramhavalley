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
  selector: 'app-website-visitors',
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
  templateUrl: './website-visitors.component.html',
  styleUrl: './website-visitors.component.scss'
})
export class WebsiteVisitorsComponent {
  visitorForm!: FormGroup;
   breadscrums = [
    {
      title: 'Website Visitors',
      items: ['Reports'],
      active: 'Website Visitors',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.visitorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      purpose: ['', Validators.required],
      visitDate: [new Date().toISOString().split('T')[0], Validators.required],
      comments: [''],
      followUp: [false]
    });
  }

  onSubmit(): void {
    if (this.visitorForm.valid) {
      console.log('Visitor Data:', this.visitorForm.value);
      // Call service to save visitor info
    }
  }
}
