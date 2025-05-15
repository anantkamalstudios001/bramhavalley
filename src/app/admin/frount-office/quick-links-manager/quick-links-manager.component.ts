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
  selector: 'app-quick-links-manager',
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
  templateUrl: './quick-links-manager.component.html',
  styleUrl: './quick-links-manager.component.scss'
})
export class QuickLinksManagerComponent {
linkForm!: FormGroup;
breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.linkForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      target: ['_self'],
      order: [1],
      location: ['footer'],
      isActive: [true]
    });
  }

  onSubmit(): void {
    if (this.linkForm.valid) {
      const linkData = this.linkForm.value;
      console.log('Quick Link Data:', linkData);
      // Call API to save or update the quick link
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
