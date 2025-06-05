import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { CommonModule } from '@angular/common';
import { MainService } from 'app/services/main.service';

@Component({
    selector: 'app-about-teacher',
    templateUrl: './about-teacher.component.html',
    styleUrls: ['./about-teacher.component.scss'],
    imports: [
        BreadcrumbComponent,
        MatTabsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AboutTeacherComponent {
  breadscrums = [
    {
      title: 'Manage About US',
      items: ['About Us'],
      active: 'Manage About US',
    },
  ];
 

  aboutUsImageForm: FormGroup;
  selectedAboutUsImage: File | null = null;
  aboutUsSection_Form!: FormGroup;  // unique form name
  selectedAboutUsImageFile: File | null = null;  // unique image variable
  uploadedAboutUsData: any;  // to store uploaded values
  whyWeAreForm: FormGroup;
  selectedWhyWeAreImage: File | null = null;
  campusGalleryImages: File[] = [];
    visionMissionForm: FormGroup;
  missionParagraphs: string[] = [];
  newVisionParagraph = '';
  newMissionParagraph = '';
  visionParagraphs:any;
  campusGalleryForm: FormGroup;
  selectedCampusImageFile: File | null = null;
    placementForm: FormGroup;
  highlightedCaseForm: FormGroup;



  constructor(private fb: FormBuilder, private MainService : MainService) {
    this.aboutUsImageForm = this.fb.group({
      image: [null, Validators.required]
    });
    this.whyWeAreForm = this.fb.group({
      description: ['', Validators.required],
    });

    this.visionMissionForm = this.fb.group({});

    this.campusGalleryForm = this.fb.group({
      campusImage: [null, Validators.required]
    });

        this.placementForm = this.fb.group({
      paragraph: ['', Validators.required]
    });
        this.highlightedCaseForm = this.fb.group({
      heading: ['', Validators.required],
      paragraph: ['', Validators.required]
    });


  }

  onAboutUsImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedAboutUsImage = file;
      console.log('Selected About Us image:', file);
    }
  }

  submitAboutUsImage() {
    if (this.selectedAboutUsImage) {
      const formData = new FormData();
      formData.append('aboutUsImage', this.selectedAboutUsImage);

      // Print values for debugging
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      // TODO: Send formData to backend
    } else {
      console.log('No image selected.');
    }
  }



    onAboutUsImageFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedAboutUsImageFile = file;
      console.log('Selected About Us image:', file);
    }
  }

  submitAboutUsImageForm() {
    if (this.aboutUsImageForm.valid && this.selectedAboutUsImageFile) {
      const formData = new FormData();
      formData.append('aboutUsImageFile', this.selectedAboutUsImageFile);
      formData.append('aboutUsContent', this.aboutUsImageForm.value.aboutUsContent);

      this.uploadedAboutUsData = this.aboutUsImageForm.value;

      // Debugging print
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      // TODO: Send formData to backend
    } else {
      console.log('Form invalid or image not selected.');
    }
  }


   





}
