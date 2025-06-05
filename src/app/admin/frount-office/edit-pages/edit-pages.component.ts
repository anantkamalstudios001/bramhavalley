import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MainService } from 'app/services/main.service';

@Component({
  selector: 'app-edit-pages',
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
  templateUrl: './edit-pages.component.html',
  styleUrl: './edit-pages.component.scss'
})
export class EditPagesComponent {
  @Input() pageData: any; // Pass existing page data here



   breadscrums = [
    {
      title: 'Edit Pages',
      items: ['Brahmavalley Main'],
      active: 'Edit Pages',
    },
  ];


    sliderForm: FormGroup;
    about_Us_Form!:FormGroup;
    programForm: FormGroup;
    counterForm: FormGroup;
    add_best_placements_Form!: FormGroup;
      sectionForm: FormGroup;
  submittedData: any = null;
  testimonialUploadForm: FormGroup;
  uploadedTestimonial: any = null;
  selectedImageFile: File | null = null;
  uploadedImagePreview: string = '';
    facultyForm: FormGroup;
  selectedFacultyImage: File | null = null;
  uploadedFaculty: any;
  articleForm: FormGroup;
  selectedArticleImage: File | null = null;
  selectedAuthorImage: File | null = null;
    subSections: { subheading: string, paragraph: string }[] = [];
  imagePreviews: string[] = [];
  about_us_imagePreview: string = '';

  aboutForm: FormGroup;
  selectedImage: File | null = null;




    





    
    


  imageFile: File | null = null;
  about_us_imageFile : File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  best_placements_imageFile: File | null = null;
  best_placements_imagePreview: string | ArrayBuffer | null = null;

  // tabsForm: FormGroup;



  constructor(private fb: FormBuilder, private MainService : MainService, private craft: FormBuilder) {
    this.sliderForm = this.fb.group({
      heading: ['', Validators.required],
      paragraph: ['', Validators.required]
    });
     this.programForm = this.fb.group({
      programName: ['', Validators.required],
      paragraph: ['', Validators.required]
    });
        this.counterForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      sign: ['', Validators.required],
      label: ['', Validators.required]
    });

        this.add_best_placements_Form = this.fb.group({
      image: [null, Validators.required]
    });

        this.sectionForm = this.fb.group({
      icon: ['', Validators.required],
      heading: ['', Validators.required],
      paragraph: ['', Validators.required],
    });
        this.testimonialUploadForm = this.fb.group({
      personName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      starRating: [5, Validators.required],
      testimonialContent: ['', Validators.required],
    });

        this.facultyForm = this.fb.group({
      facultyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      twitterLink: [''],
      facebookLink: [''],
      instagramLink: [''],
      linkedinLink: [''],
    });

     this.articleForm = this.fb.group({
      title: ['', Validators.required],
      postCategory: ['', Validators.required],
      authorName: ['', Validators.required],
      postDate: ['', Validators.required]
    });


 this.aboutForm = this.fb.group({
      imageFile: [null, Validators.required],
      paragraphs: this.fb.array([this.createParagraphGroup()])
    });

















  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  onSubmit() {
    if (this.sliderForm.valid && this.imageFile) {
      const formData = new FormData();
      formData.append('image', this.imageFile);
      formData.append('heading', this.sliderForm.get('heading')?.value);
      formData.append('paragraph', this.sliderForm.get('paragraph')?.value);

      console.log('FormData ready to send:', formData);
      this.MainService.addSliderImage(formData).subscribe((res:any) => {
        console.log(res);
        if(res.status === true) {
          this.sliderForm.reset();
        }
      })
    } else {
      console.log('Form is invalid or image not uploaded!');
    }
  }


  Submit_programForm()
  {
      if (this.programForm.valid) {
      console.log('Form Data:', this.programForm.value);
      this.MainService.submit_programForm(this.programForm.value).subscribe((res:any) => {
        console.log(res);
        if(res.status === true) {
          this.programForm.reset();
        }
      })
    } else {
      console.log('Form is invalid!');
    }
  }
    onSubmit_counterForm() {
    if (this.counterForm.valid) {
      console.log('Form Data:', this.counterForm.value);
       this.MainService.submit_placement_data(this.counterForm.value).subscribe((res:any) => {
        console.log(res);
        if(res.status === true) {
          this.counterForm.reset();
        }
      })
    } else {
      console.log('Form is invalid!');
    }
  }


onFileChange_best_placements(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.best_placements_imageFile = file;

    // Update form control so form becomes valid
    this.add_best_placements_Form.patchValue({ image: file });

    const reader = new FileReader();
    reader.onload = () => {
      this.best_placements_imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
}


Submit_best_placements_Form() {
  if (this.add_best_placements_Form.valid && this.best_placements_imageFile) {
    const formData = new FormData();
    formData.append('image', this.best_placements_imageFile);
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
      this.MainService.submit_best_placemt_img(formData).subscribe((res:any) => {
        console.log(res);
        if(res.status === true) {
          this.add_best_placements_Form.reset();
        }
      })
  } else {
    console.log('Form is invalid or image not uploaded!');
  }
}



    submitSection() {
    if (this.sectionForm.valid) {
      this.submittedData = this.sectionForm.value;
      console.log('Section Data:', this.submittedData);
          this.MainService.add_home_service(this.sectionForm.value).subscribe((res:any) => {
        console.log(res);
        if(res.status === true) {
          this.sectionForm.reset();
        }
      })
    }
  }

    onImageSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageFile = file;

      const reader = new FileReader();
      reader.onload = e => this.uploadedImagePreview = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

submitTestimonialUpload() {
  if (this.testimonialUploadForm.valid && this.selectedImageFile) {
    const formData = new FormData();
    formData.append('image', this.selectedImageFile);
    formData.append('personName', this.testimonialUploadForm.value.personName);
    formData.append('jobTitle', this.testimonialUploadForm.value.jobTitle);
    formData.append('starRating', this.testimonialUploadForm.value.starRating);
    formData.append('testimonialContent', this.testimonialUploadForm.value.testimonialContent);

    this.uploadedTestimonial = this.testimonialUploadForm.value;

    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
     this.MainService.submit_TestimonialUpload(formData).subscribe((res:any) => {
        console.log(res);
        if(res.status === true) {
          this.testimonialUploadForm.reset();
        }
      })
  }
}

onFacultyImageSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFacultyImage = file;
    console.log('Selected image:', file);
  }
}


submitFacultyUpload() {
  if (this.facultyForm.valid && this.selectedFacultyImage) {
    const formData = new FormData();

    formData.append('image', this.selectedFacultyImage);
    formData.append('facultyName', this.facultyForm.value.facultyName);
    formData.append('jobTitle', this.facultyForm.value.jobTitle);
    formData.append('twitterLink', this.facultyForm.value.twitterLink);
    formData.append('facebookLink', this.facultyForm.value.facebookLink);
    formData.append('instagramLink', this.facultyForm.value.instagramLink);
    formData.append('linkedinLink', this.facultyForm.value.linkedinLink);

    console.log('Uploading Faculty Data:');
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    this.MainService.ADD_submitFacultyUpload(formData).subscribe((res: any) => {
      console.log('Server response:', res);
      if (res.status === true) {
        console.log('Upload successful! Resetting form...');
        this.facultyForm.reset();
        this.selectedFacultyImage = null;
      } else {
        console.warn('Upload failed:', res);
      }
    }, (error) => {
      console.error('Upload error:', error);
    });
  } else {
    console.warn('Form is invalid or image not selected.');
    console.log('Form state:', this.facultyForm.value);
  }
}





  cancelForm() {
    this.facultyForm.reset();
    this.selectedFacultyImage = null;
  }


    onArticleImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedArticleImage = file;
    }
  }

  onAuthorImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedAuthorImage = file;
    }
  }

  addSubSection(subheading: string, paragraph: string) {
    if (subheading && paragraph) {
      this.subSections.push({ subheading, paragraph });
    }
  }

  submitArticle() {
    if (this.articleForm.valid && this.selectedArticleImage && this.selectedAuthorImage) {
      const formData = new FormData();
      formData.append('articleImage', this.selectedArticleImage);
      formData.append('title', this.articleForm.value.title);
      formData.append('postCategory', this.articleForm.value.postCategory);
      formData.append('authorName', this.articleForm.value.authorName);
      formData.append('postDate', this.articleForm.value.postDate);
      formData.append('authorImage', this.selectedAuthorImage);
      formData.append('subSections', JSON.stringify(this.subSections));

      // Print values
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

       this.MainService.Add_Article(formData).subscribe((res:any) => {
        console.log(res);
        if(res.status === true) {
          this.articleForm.reset();
        }
      })
    }
    else
    {
      console.log('form not valid');
    }
  }



  createParagraphGroup(): FormGroup {
    return this.fb.group({
      paragraph: ['', Validators.required]
    });
  }

  get paragraphs(): FormArray {
    return this.aboutForm.get('paragraphs') as FormArray;
  }

  addParagraph() {
    this.paragraphs.push(this.createParagraphGroup());
  }

  removeParagraph(index: number) {
    this.paragraphs.removeAt(index);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.aboutForm.patchValue({ imageFile: file });
    }
  }

  submitForm() {
    if (this.aboutForm.valid) {
      const paragraphs = this.aboutForm.value.paragraphs.map((p: any) => p.paragraph);
      console.log('Selected Image:', this.selectedImage);
      console.log('Paragraphs:', paragraphs);

      const formData = new FormData();
      formData.append('image', this.selectedImage as File);
      formData.append('paragraphs', JSON.stringify(paragraphs));

      console.log('FormData ready to send:', formData);

      this.MainService.addAboutUsSection(formData).subscribe((res:any) => {
        console.log(res);
        if(res.status === true) {
             this.aboutForm.reset();
              this.paragraphs.clear();
              this.addParagraph();
              this.selectedImage = null;
        }
        
      })
    } else {
      console.log('Form is invalid');
    }
  }










}
