import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MainService } from 'app/services/main.service';
import { TeachersService } from '../all-teachers/teachers.service';

@Component({
  selector: 'app-maangepresident',
  imports: [],
  templateUrl: './maangepresident.component.html',
  styleUrl: './maangepresident.component.scss'
})
export class MaangepresidentComponent {
   breadscrums = [
    {
      title: 'Add Chairman Data',
      items: ['About Us'],
      active: 'Add Chairman Data',
    },
  ];


   responseData: any;
  // imageUrl: string = 'http://localhost:3000/uploads/aboutchairman/';
  imageUrl: string = '/uploads/aboutchairman/';
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
