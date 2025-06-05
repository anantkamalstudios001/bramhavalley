import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MainService } from 'app/services/main.service';

@Component({
  selector: 'app-chairmans-message',
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
  templateUrl: './chairmans-message.component.html',
  styleUrl: './chairmans-message.component.scss'
})
export class ChairmansMessageComponent {
  
  breadscrums = [
    {
      title: 'Manage About US',
      items: ['About Us'],
      active: 'Manage About US',
    },
  ];
  vmForm!: FormGroup;



    constructor(private fb: FormBuilder, private MainService : MainService) {
    this.vmForm = this.fb.group({
      visionTitle: ['', Validators.required],
      visionParagraph: ['', Validators.required],
      newMission: [''],
      mission: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  get missionArray(): FormArray {
    return this.vmForm.get('mission') as FormArray;
  }

  addMission() {
    const missionText = this.vmForm.get('newMission')?.value.trim();
    if (missionText) {
      this.missionArray.push(this.fb.control(missionText));
      this.vmForm.get('newMission')?.reset();
    }
  }

  removeMission(index: number) {
    this.missionArray.removeAt(index);
  }

  submitForm() {
    if (this.vmForm.valid) {
      const payload = {
        vision: {
          title: this.vmForm.value.visionTitle,
          paragraph: this.vmForm.value.visionParagraph
        },
        mission: this.missionArray.value,
      };
      console.log('Submitted Data:', payload);
      this.MainService.add_vision_mission(payload).subscribe((res:any) => {
        console.log(res);
        this.vmForm.reset()
        this.missionArray.clear()
        
      })
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

}
