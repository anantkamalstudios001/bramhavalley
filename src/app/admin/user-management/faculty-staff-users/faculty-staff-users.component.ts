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
  selector: 'app-faculty-staff-users',
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
  templateUrl: './faculty-staff-users.component.html',
  styleUrl: './faculty-staff-users.component.scss'
})
export class FacultyStaffUsersComponent {
   staffForm!: FormGroup;

    breadscrums = [
    {
      title: 'Faculty Staff-Users',
      items: ['User Management'],
      active: 'Faculty Staff-Users',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.staffForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      joiningDate: ['', Validators.required],
      isActive: [true]
    });
  }

  onSubmit(): void {
    if (this.staffForm.valid) {
      console.log(this.staffForm.value);
      // Handle submit logic (e.g., send to API)
    }
  }
}
