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
  selector: 'app-manage-about-us-img',
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
  templateUrl: './manage-about-us-img.component.html',
  styleUrl: './manage-about-us-img.component.scss'
})
export class ManageAboutUsImgComponent {
  //   breadscrums = [
  //   {
  //     title: 'Manage About US',
  //     items: ['About Us'],
  //     active: 'Manage About US',
  //   },
  // ];




  // constructor( private MainService : MainService) { }

  // ngOnInit() {
  //   this.MainService.fetch_about_us_image().subscribe((res:any) => {
  //     console.log(res);
  //   })
  // }




  
    breadscrums = [
      {
        title: 'Manage About US Image',
        items: ['About US'],
        active: 'Manage About US Image',
      },
    ];
  
  
  
  
    displayedColumns: string[] = ['select', 'name', 'email', 'subject', 'message', 'actions'];
    dataSource = new MatTableDataSource<any>([]);
    selection = new SelectionModel<any>(true, []);
    isLoading = true;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    constructor(private mainService: MainService) {}
  
    ngOnInit(): void {
      this.loadContactQueries();
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
  
    editQuery(row: any): void {
      console.log('Editing:', row);
    }
  
    deleteQuery(row: any): void {
      console.log('Deleting:', row);
    }
  
  
  
  

}
