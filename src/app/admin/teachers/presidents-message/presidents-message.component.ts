import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MainService } from 'app/services/main.service';

@Component({
  selector: 'app-presidents-message',
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
  templateUrl: './presidents-message.component.html',
  styleUrl: './presidents-message.component.scss'
})
export class PresidentsMessageComponent {
 breadscrums = [
      {
        title: 'Manage Who We Are',
        items: ['About US'],
        active: 'Manage Who We Are',
      },
    ];
  
displayedColumns: string[] = ['select', 'description', 'image', 'createdAt', 'actions'];
    dataSource = new MatTableDataSource<any>([]);
    selection = new SelectionModel<any>(true, []);
    isLoading = true;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    constructor(private mainService: MainService) {}


    // Manage Vision & Mission Section



    ngOnInit(): void {
  //      this.isLoading = true;
  // this.mainService.why_we_are().subscribe({
  //   next: (res: any) => {
  //     this.dataSource = new MatTableDataSource(res.data);
  //     this.isLoading = false;
  //   },
  //   error: (err) => {
  //     console.error(err);
  //     this.isLoading = false;
  //   }
  // });

    }
  
  loadContactQueries(): void {
    this.isLoading = true;
    this.mainService.getContactUsQueries().subscribe({
      next: (res) => {
        const data = res.queries || [];  // <-- extract the array safely
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading queries:', err);
        this.isLoading = false;
      }
    });
  }
  
  
    isAllSelected(): boolean {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    masterToggle(): void {
      this.isAllSelected()
        ? this.selection.clear()
        : this.dataSource.data.forEach((row:any) => this.selection.select(row));
    }
  
    viewDetails(row: any): void {
      console.log('Viewing details:', row);
    }
  
    editItem(row: any): void {
      console.log('Editing:', row);
    }
  
    deleteItem(row: any): void {
      console.log('Deleting:', row);
    }
  

  

}
