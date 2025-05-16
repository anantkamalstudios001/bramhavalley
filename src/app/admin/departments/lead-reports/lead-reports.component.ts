import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-lead-reports',
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
  templateUrl: './lead-reports.component.html',
  styleUrl: './lead-reports.component.scss'
})
export class LeadReportsComponent {
   reportForm!: FormGroup;
    breadscrums = [
    {
      title: 'Lead Reports',
      items: ['Reports'],
      active: 'Lead Reports',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      leadSource: [''],
      leadStatus: [''],
      assignedStaff: ['']
    });
  }

  onGenerateReport(): void {
    const filters = this.reportForm.value;
    console.log('Generating report with filters:', filters);
    // Call API or service to generate report based on filters
  }

}
