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
  selector: 'app-mous',
  imports: [      BreadcrumbComponent,
        MatTabsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule],
  templateUrl: './mous.component.html',
  styleUrl: './mous.component.scss'
})
export class MOUsComponent {
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
  selectedCampusImageFile: File | null = null;
  highlightedCaseForm: FormGroup;



  constructor(private fb: FormBuilder, private MainService : MainService) {

        this.highlightedCaseForm = this.fb.group({
      heading: ['', Validators.required],
      paragraph: ['', Validators.required]
    });


  }

  



  submitHighlightedCaseForm() {
    if (this.highlightedCaseForm.valid) {
      const caseData = {
        heading: this.highlightedCaseForm.get('heading')?.value,
        paragraph: this.highlightedCaseForm.get('paragraph')?.value
      };

      console.log('Highlighted Case submitted:', caseData);
      this.MainService.add_HighlightedCaseForm(caseData).subscribe((res:any) => {
        console.log(res);
      });
    } else {
      console.log('Highlighted Case form is invalid');
    }
  }

}
