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
  selector: 'app-photo-gallery',
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
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.scss'
})
export class PhotoGalleryComponent {
  galleryForm!: FormGroup;
   breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
  images: File[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.galleryForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      eventDate: ['', Validators.required],
      isActive: [true]
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.images = Array.from(input.files);
    }
  }

  onSubmit(): void {
    if (this.galleryForm.valid && this.images.length > 0) {
      const formData = new FormData();
      formData.append('title', this.galleryForm.value.title);
      formData.append('description', this.galleryForm.value.description);
      formData.append('eventDate', this.galleryForm.value.eventDate);
      formData.append('isActive', this.galleryForm.value.isActive);

      this.images.forEach((file, index) => {
        formData.append('photos', file);
      });

      console.log('Form data ready for upload:', this.galleryForm.value);
      // Call API to upload formData
    }
  }
}
