import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { TeachersService } from '../../teachers.service';
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  id: number;
  name: string;
  department: string;
  mobile: string;
}

@Component({
    selector: 'app-teachers-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.scss'],
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButtonModule,
        MatDialogClose,
    ]
})
export class TeachersDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<TeachersDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public teachersService: TeachersService
  ) {}

  confirmDelete(): void {
    this.teachersService.deleteTeacher(this.data.id).subscribe({
      next: (response) => {
        // console.log('Delete Response:', response);
        this.dialogRef.close(response); // Close with the response data
        // Handle successful deletion, e.g., refresh the table or show a notification
      },
      error: (error) => {
        console.error('Delete Error:', error);
        // Handle the error appropriately
      },
    });
  }
}
