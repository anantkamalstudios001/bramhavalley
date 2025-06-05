import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MainService } from 'app/services/main.service';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-our-group-institute',
  imports: [
                    BreadcrumbComponent,
                    MatTooltipModule,
                    MatButtonModule,
                    MatIconModule,
                    MatTableModule,
                    MatSortModule,
                    MatCheckboxModule,
                    MatMenuModule,
                    MatRippleModule,
                    MatProgressSpinnerModule,
                    MatPaginatorModule,
                    CommonModule
  ],
  templateUrl: './our-group-institute.component.html',
  styleUrl: './our-group-institute.component.scss'
})
export class OurGroupInstituteComponent {
   breadscrums = [
      {
        title: 'Manage Who We Are',
        items: ['About US'],
        active: 'Manage Who We Are',
      },
    ];
 dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['select', 'image', 'createdAt', 'actions'];
  selection = new SelectionModel<any>(true, []);
  isLoading = false;

  // Edit modal
  isEditMode = false;
  editData: any = {};
  newImageFile: File | null = null;

  @ViewChild('editModal') editModalRef!: ElementRef;
  editModalInstance!: bootstrap.Modal;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    // Initialize Bootstrap modal instance
    this.editModalInstance = new bootstrap.Modal(
      this.editModalRef.nativeElement,
      {}
    );
  }

  trackByFn(index: number, item: any) {
    return item.title;
  }

  loadData() {
    this.isLoading = true;
    this.mainService.get_campus_gallery().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      },
    });
  }

  getImageUrl(path: string): string {
    // return `http://localhost:3000/${path.replace(/\\/g, '/')}`;
    return `/${path.replace(/\\/g, '/')}`;
  }

  // Selection methods for checkbox column
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  // Open edit modal and set data
  openEditModal(row: any) {
    this.isEditMode = true;
    this.editData = { ...row };
    this.newImageFile = null;
    this.editModalInstance.show();
  }

  // File input change
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.newImageFile = event.target.files[0];
    }
  }

  // Save edit
  saveEdit() {
    const formData = new FormData();

    if (this.newImageFile) {
      formData.append('image', this.newImageFile);
    }

    // Assuming you only update the image; add other fields if needed
    this.mainService.updateCampusGallery(this.editData._id, formData).subscribe({
      next: (res: any) => {
        console.log('Update successful', res);
        this.isEditMode = false;
        this.editModalInstance.hide();
        this.loadData();
      },
      error: (err: any) => {
        console.error('Update failed', err);
      },
    });
  }

  // Cancel edit and hide modal
  cancelEdit() {
    this.isEditMode = false;
    this.editData = {};
    this.newImageFile = null;
    this.editModalInstance.hide();
  }

  deleteItem(id: string) {
    if (!confirm('Are you sure to delete this item?')) {
      return;
    }
    this.mainService.deleteCampusGallery(id).subscribe({
      next: (res) => {
        console.log('Deleted successfully', res);
        this.loadData();
      },
      error: (err) => {
        console.error('Delete failed', err);
      },
    });
  }



}
