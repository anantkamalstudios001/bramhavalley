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
  selector: 'app-media-uploads',
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
  templateUrl: './media-uploads.component.html',
  styleUrl: './media-uploads.component.scss'
})
export class MediaUploadsComponent {
  mediaForm!: FormGroup;
   breadscrums = [
    {
      title: 'Media uploads',
      items: ['Brahmavalley Main'],
      active: 'Media uploads',
    },
  ];
  selectedFiles: File[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.mediaForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      mediaType: ['', Validators.required],
      isActive: [true]
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  onSubmit(): void {
    if (this.mediaForm.valid && this.selectedFiles.length > 0) {
      const formData = new FormData();
      formData.append('title', this.mediaForm.value.title);
      formData.append('description', this.mediaForm.value.description);
      formData.append('mediaType', this.mediaForm.value.mediaType);
      formData.append('isActive', this.mediaForm.value.isActive);

      this.selectedFiles.forEach((file, index) => {
        formData.append('files', file, file.name);
      });

      console.log('Form data ready to submit:', this.mediaForm.value);
      // Submit formData via API to upload files
    } else {
      alert('Please fill all required fields and select at least one file.');
    }
  }
}
