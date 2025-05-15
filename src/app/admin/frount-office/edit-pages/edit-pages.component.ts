import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-edit-pages',
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
  templateUrl: './edit-pages.component.html',
  styleUrl: './edit-pages.component.scss'
})
export class EditPagesComponent {
  @Input() pageData: any; // Pass existing page data here

  editPageForm!: FormGroup;
   breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editPageForm = this.fb.group({
      title: [{ value: '', disabled: true }, Validators.required],
      slug: [{ value: '', disabled: true }],
      content: ['', Validators.required],
      metaTitle: [''],
      metaDescription: [''],
      isActive: [true]
    });

    if (this.pageData) {
      this.editPageForm.patchValue({
        title: this.pageData.title,
        slug: this.pageData.slug,
        content: this.pageData.content,
        metaTitle: this.pageData.metaTitle,
        metaDescription: this.pageData.metaDescription,
        isActive: this.pageData.isActive
      });
    }
  }

  onSubmit(): void {
    if (this.editPageForm.valid) {
      const updatedPage = {
        ...this.pageData,
        ...this.editPageForm.getRawValue() // getRawValue to include disabled fields
      };
      console.log('Updated Page Data:', updatedPage);
      // Call API to update the page content
    }
  }
}
