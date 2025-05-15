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
  selector: 'app-news-events',
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
  templateUrl: './news-events.component.html',
  styleUrl: './news-events.component.scss'
})
export class NewsEventsComponent {
  newsForm!: FormGroup;
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
    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required], // News or Event
      eventDate: ['', Validators.required],
      location: [''],
      isActive: [true]
    });

    this.newsForm.get('type')?.valueChanges.subscribe(type => {
      if (type === 'Event') {
        this.newsForm.get('location')?.setValidators([Validators.required]);
      } else {
        this.newsForm.get('location')?.clearValidators();
      }
      this.newsForm.get('location')?.updateValueAndValidity();
    });
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.newsForm.valid) {
      const formData = new FormData();
      Object.keys(this.newsForm.value).forEach(key => {
        formData.append(key, this.newsForm.value[key]);
      });
      if (this.selectedFile) {
        formData.append('attachment', this.selectedFile);
      }

      console.log('News/Event Form Data:', this.newsForm.value);
      // Send formData to API here
    }
  }
}
