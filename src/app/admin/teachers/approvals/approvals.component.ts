import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MainService } from 'app/services/main.service';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-approvals',
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
  ],
  templateUrl: './approvals.component.html',
  styleUrl: './approvals.component.scss'
})
export class ApprovalsComponent {

    breadscrums = [
    {
      title: 'Manage About US',
      items: ['About Us'],
      active: 'Manage About US',
    },
  ];
 

  selectedAboutUsImage: File | null = null;
  aboutUsSection_Form!: FormGroup;  // unique form name
  selectedAboutUsImageFile: File | null = null;  // unique image variable
  uploadedAboutUsData: any;  // to store uploaded values
  selectedWhyWeAreImage: File | null = null;
  campusGalleryImages: File[] = [];
  missionParagraphs: string[] = [];
  newVisionParagraph = '';
  newMissionParagraph = '';
  visionParagraphs:any;
  campusGalleryForm: FormGroup;
  selectedCampusImageFile: File | null = null;
  



  constructor(private fb: FormBuilder, private MainService : MainService) {


    this.campusGalleryForm = this.fb.group({
      campusImage: [null, Validators.required]
    });




  }




campusGalleryFormSubmitted = false;


handleCampusImageSelection(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedCampusImageFile = file;
    console.log('Selected Campus Image:', file);
    // you can also store it in formData later
  }
}


submitCampusGallery() {
  this.campusGalleryFormSubmitted = true;

  if (!this.selectedCampusImageFile) {
    alert('Please select an image before submitting.');
    return;
  }

  const formData = new FormData();
  formData.append('image', this.selectedCampusImageFile);

  console.log('Campus Gallery FormData ready:', formData);

  this.MainService.add_campusGalleryForm(formData).subscribe((res:any) => {
    console.log(res);
    
  })

  this.resetCampusGalleryForm();
}

resetCampusGalleryForm() {
  this.campusGalleryForm.reset();
  this.selectedCampusImageFile = null;
  this.campusGalleryFormSubmitted = false;
}


}
