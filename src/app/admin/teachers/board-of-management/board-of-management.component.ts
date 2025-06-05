import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  selector: 'app-board-of-management',
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
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule
  ],
  templateUrl: './board-of-management.component.html',
  styleUrl: './board-of-management.component.scss'
})
export class BoardOfManagementComponent {

    breadscrums = [{ title: 'Manage Placement Description', items: ['Placement Description'], active: 'Manage Placement Description' }];
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['select', 'name', 'actions'];
  selection = new SelectionModel<any>(true, []);
  isLoading = false;

  isEditMode = false;
  editData: any = {};
  @ViewChild('editModal') editModalRef!: ElementRef;
  editModalInstance!: bootstrap.Modal;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    this.editModalInstance = new bootstrap.Modal(this.editModalRef.nativeElement, {});
  }

  trackByFn(index: number, item: any) {
    return item.title;
  }

  loadData() {
    this.isLoading = true;
    this.mainService.get_Placements_Description().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.data;
        this.isLoading = false;
        console.log(res);
        
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  openEditModal(row: any) {
    this.isEditMode = true;
    this.editData = { ...row };
    this.editModalInstance.show();
  }

  saveEdit() {
    this.mainService.update_Placements_Description(this.editData._id, this.editData).subscribe({
      next: (res) => {
        console.log('Update successful', res);
        this.isEditMode = false;
        this.editModalInstance.hide();
        this.loadData();
      },
      error: (err) => {
        console.error('Update failed', err);
      }
    });
  }

  cancelEdit() {
    this.isEditMode = false;
    this.editData = {};
    this.editModalInstance.hide();
  }

  deleteItem(id: string) {
    if (!confirm('Are you sure to delete this item?')) return;
    this.mainService.delete_Placements_Description(id).subscribe({
      next: (res) => {
        console.log('Deleted successfully', res);
        this.loadData();
      },
      error: (err) => {
        console.error('Delete failed', err);
      }
    });
  }





}
