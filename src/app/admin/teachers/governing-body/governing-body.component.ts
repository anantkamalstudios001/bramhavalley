import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
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
  selector: 'app-governing-body',
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
  templateUrl: './governing-body.component.html',
  styleUrl: './governing-body.component.scss'
})
export class GoverningBodyComponent {

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




  

    submitPlacementForm() {
    if (this.placementForm.valid) {
      const placementData = {
        paragraph: this.placementForm.get('paragraph')?.value
      };

      console.log('Placement data submitted:', placementData.paragraph);
      this.MainService.add_placementForm(placementData).subscribe((res:any) => {
        console.log(res);
        
      })
    } else {
      console.log('Placement form is invalid');
    }
  }

}
