import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs';
import { TeachersFormComponent } from './dialogs/form-dialog/form-dialog.component';
import { TeachersDeleteComponent } from './dialogs/delete/delete.component';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { TeachersService } from './teachers.service';
import { Teachers } from './teachers.model';
import { rowsAnimation, TableExportUtil } from '@shared';
import { formatDate, DatePipe, CommonModule, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { Direction } from '@angular/cdk/bidi';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MainService } from 'app/services/main.service';

@Component({
    selector: 'app-all-teachers',
    templateUrl: './all-teachers.component.html',
    styleUrls: ['./all-teachers.component.scss'],
    animations: [rowsAnimation],
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
    ]
})
export class AllTeachersComponent implements OnInit {
  breadscrums = [
    {
      title: 'All Teacher',
      items: ['Teacher'],
      active: 'All Teacher',
    },
  ];

    responseData: any;
  // imageUrl: string = 'http://localhost:3000/uploads/aboutpresident/';
  imageUrl: string = '/uploads/aboutpresident/';
  showModal: boolean = false;
  editData: any = {};
  selectedFile: File | null = null;


onFileSelected(event: any): void {
  if (event.target.files && event.target.files[0]) {
    this.selectedFile = event.target.files[0];
  }
}



  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public teachersService: TeachersService,
    private snackBar: MatSnackBar,
    private MainService : MainService
  ) {}



  ngOnInit(): void {
    this.getData();
  }

  editModal( ){

  }
  // Fetch data from backend
getData(): void {
  this.MainService.get_president_data().subscribe((res: any[]) => {
    console.log('API response:', res);
    this.responseData = res;  // assign array directly

    this.responseData.forEach((item: any) => {
      item.biographyParsed = item.biographyParagraphs?.length
        ? JSON.parse(item.biographyParagraphs[0])
        : [];
      item.visionParsed = item.visionParagraphs?.length
        ? JSON.parse(item.visionParagraphs[0])
        : [];
    });
  });
}



  // Open modal and populate editData
openModal(modalRef: any, item: any) {
  this.editData = {
    ...item,
    biographyText: item.biographyParagraphs?.join(', ') || '',
    visionText: item.visionParagraphs?.join(', ') || ''
  };
  this.showModal = true;
}


  // Close modal
  closeModal(): void {
    this.showModal = false;
    this.editData = {};
  }


// In your Angular component

updateItem(id:any): void {
  const formData = new FormData();
  formData.append('id', this.editData._id);
  formData.append('presidentName', this.editData.presidentName);  // FIX: 'presidentName' instead of 'name'
  formData.append('heading', this.editData.heading);

  const biographyArray = this.editData.biographyText
    .split('\n')
    .map((p: string) => p.trim())
    .filter((p: string) => p);

  const visionArray = this.editData.visionText
    .split('\n')
    .map((p: string) => p.trim())
    .filter((p: string) => p);

  formData.append('biographyParagraphs', JSON.stringify(biographyArray));
  formData.append('visionParagraphs', JSON.stringify(visionArray));

  if (this.selectedFile) {
    formData.append('image', this.selectedFile);
  }

  this.MainService.edit_president_data(formData, id).subscribe(
    () => {
      this.getData();
      this.closeModal();
    },
    (error) => {
      console.error('Error updating data:', error);
    }
  );
}







  // Delete item
  deleteItem(id: string): void {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.MainService.delete_president_data(id)
        .subscribe({
          next: () => this.getData(),
          error: (err) => console.error('Error deleting item:', err)
        });
    }
  }


}
