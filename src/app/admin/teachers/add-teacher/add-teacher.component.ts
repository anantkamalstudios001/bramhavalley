import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MainService } from 'app/services/main.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-add-teacher',
    templateUrl: './add-teacher.component.html',
    styleUrls: ['./add-teacher.component.scss'],
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
    ]
})
export class AddTeacherComponent {
    breadscrums = [
    {
      title: 'Add President Info',
      items: ['About Us'],
      active: 'Add President Info',
    },
  ];

    presidentForm: FormGroup;
  imageFile: File | null = null;

  constructor(private fb: FormBuilder, private mainService: MainService) {
    this.presidentForm = this.fb.group({
      heading: ['', Validators.required],
      presidentName: ['', Validators.required],
      biographyParagraphs: this.fb.array([this.fb.control('', Validators.required)]),
      visionParagraphs: this.fb.array([this.fb.control('', Validators.required)]),
    });
  }

  // Getters for FormArrays
  get biographyParagraphs(): FormArray {
    return this.presidentForm.get('biographyParagraphs') as FormArray;
  }

  get visionParagraphs(): FormArray {
    return this.presidentForm.get('visionParagraphs') as FormArray;
  }

  // Add/Remove Biography
  addBiography(): void {
    this.biographyParagraphs.push(this.fb.control('', Validators.required));
  }

  removeBiography(index: number): void {
    this.biographyParagraphs.removeAt(index);
  }

  // Add/Remove Vision
  addVision(): void {
    this.visionParagraphs.push(this.fb.control('', Validators.required));
  }

  removeVision(index: number): void {
    this.visionParagraphs.removeAt(index);
  }

  // Handle image input
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
    }
  }

submitForm(): void {
  if (this.presidentForm.valid) {
    const formData = new FormData();

    formData.append('heading', this.presidentForm.value.heading);
    formData.append('presidentName', this.presidentForm.value.presidentName);

    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }

    // ✅ Correct: Send entire arrays as JSON string
    formData.append('biographyParagraphs', JSON.stringify(this.biographyParagraphs.value));
    formData.append('visionParagraphs', JSON.stringify(this.visionParagraphs.value));

    console.log('==== FormData Contents ====');
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    this.mainService.add_president_data(formData).subscribe((res) => {
      console.log('Form submitted', res);

      this.presidentForm.reset();
      this.biographyParagraphs.clear();
      this.visionParagraphs.clear();
      this.biographyParagraphs.push(this.fb.control('', Validators.required));
      this.visionParagraphs.push(this.fb.control('', Validators.required));
      this.imageFile = null;
    });
  }
}





}
