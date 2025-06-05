import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { TeachersService } from '../all-teachers/teachers.service';
import { MainService } from 'app/services/main.service';

@Component({
  selector: 'app-addpresident',
  imports: [
         BreadcrumbComponent,
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        MatOptionModule,
        MatCheckboxModule,
        MatTableModule,
        MatSortModule,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatPaginatorModule,
  ],
  templateUrl: './addpresident.component.html',
  styleUrl: './addpresident.component.scss'
})
export class AddpresidentComponent {
 breadscrums = [
    {
      title: 'Add Chairman Info',
      items: ['About Us'],
      active: 'Add Chairman Info',
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
