import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MainService } from 'app/services/main.service';

@Component({
  selector: 'app-course-management',
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
          FormsModule],
  templateUrl: './course-management.component.html',
  styleUrl: './course-management.component.scss'
})
export class CourseManagementComponent {


  selectedAboutUsImage: File | null = null;
  aboutUsSection_Form!: FormGroup;  // unique form name
  selectedAboutUsImageFile: File | null = null;  // unique image variable
  uploadedAboutUsData: any;  // to store uploaded values
  whyWeAreForm: FormGroup;
  selectedWhyWeAreImage: File | null = null;
  campusGalleryImages: File[] = [];
  missionParagraphs: string[] = [];
  newVisionParagraph = '';
  newMissionParagraph = '';
  visionParagraphs:any;
  selectedCampusImageFile: File | null = null;

    breadscrums = [
    {
      title: 'Manage Vision-Mission Page',
      items: ['About Us'],
      active: 'Manage Vision-Mission Page',
    },
  ];

    constructor(private fb: FormBuilder, private MainService : MainService) {

      this.whyWeAreForm = this.fb.group({
        description: ['', Validators.required],
      });
    }



    submitWhyWeAreForm() {
    if (this.whyWeAreForm.valid && this.selectedWhyWeAreImage) {
      const formData = new FormData();
      formData.append('whyWeAreImage', this.selectedWhyWeAreImage);
      formData.append('description', this.whyWeAreForm.value.description);

      // Debugging output
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      // TODO: Send formData to backend
      this.MainService.addWhyWeAreContent(formData).subscribe((res:any) => {
        console.log(res);
      })
    } else {
      console.log('Form is invalid or image not selected.');
    }
  }


  
    onWhyWeAreImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedWhyWeAreImage = file;
      console.log('Selected Why We Are image:', file);
    }
  }




  

}
