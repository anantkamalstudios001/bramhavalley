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
  selector: 'app-application-reports',
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
  templateUrl: './application-reports.component.html',
  styleUrl: './application-reports.component.scss'
})
export class ApplicationReportsComponent {
  appReportForm!: FormGroup;
  breadscrums = [
    {
      title: 'Application Reports',
      items: ['Reports'],
      active: 'Application Reports',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appReportForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      program: [''],
      status: [''],
      source: ['']
    });
  }

  onGenerateReport(): void {
    const filters = this.appReportForm.value;
    console.log('Application report filters:', filters);
    // Call API to fetch and generate report based on filters
  }
}
