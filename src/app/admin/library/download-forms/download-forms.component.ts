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
  selector: 'app-download-forms',
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
  templateUrl: './download-forms.component.html',
  styleUrl: './download-forms.component.scss'
})
export class DownloadFormsComponent {
   downloadForm!: FormGroup;
   breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.downloadForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      category: ['', Validators.required],
      uploadDate: [new Date().toISOString().split('T')[0], Validators.required],
      isActive: [true]
    });
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.downloadForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('title', this.downloadForm.value.title);
      formData.append('description', this.downloadForm.value.description);
      formData.append('category', this.downloadForm.value.category);
      formData.append('uploadDate', this.downloadForm.value.uploadDate);
      formData.append('isActive', this.downloadForm.value.isActive);
      formData.append('file', this.selectedFile);

      console.log('Form data ready to send:', formData);
      // Send to backend API
    }
  }
}
