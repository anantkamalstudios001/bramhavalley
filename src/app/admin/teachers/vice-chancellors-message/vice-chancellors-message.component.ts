import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MainService } from 'app/services/main.service';

@Component({
  selector: 'app-vice-chancellors-message',
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
                FormsModule
  ],
  templateUrl: './vice-chancellors-message.component.html',
  styleUrl: './vice-chancellors-message.component.scss'
})
export class ViceChancellorsMessageComponent {

  editData: any = {
    _id: '',
    vision: { title: '', paragraph: '' },
    missionText: ''
  };
   

    breadscrums = [
    {
      title: 'Manage Vice Chancellor Message',
      items: ['About US'],
      active: 'Vice Chancellor Message',
    },
  ];

displayedColumns: string[] = ['select', 'title', 'vision', 'mission', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);
  isLoading = true;


  @ViewChild('editModal') editModal!: TemplateRef<any>;
  showModal = false;


  constructor(private mainService: MainService) {}



  // loadViceChancellorMessages(): void {
  //   this.isLoading = true;
  // this.mainService.get_vision_mission().subscribe({
  //   next: (res) => {
  //     if (res.status && Array.isArray(res.data)) {
  //       const filteredData = res.data.map((item: any) => ({
  //         title: item.title,
  //         vision: item.vision?.paragraph,
  //         mission: item.mission?.join(', '),
  //         createdAt: item.createdAt,
          
  //       }));
  //       console.log(res);

  //       this.dataSource = new MatTableDataSource(filteredData);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     }
  //     this.isLoading = false;
  //   },
  //   error: (err) => {
  //     console.error('Error loading messages:', err);
  //     this.isLoading = false;
  //   }
  // });
  // }

    responseData: any;


  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.mainService.get_vision_mission()
      .subscribe(res => {
        this.responseData = res;
      }, err => {
        console.error('Error fetching data:', err);
      });
  }

editItem(item: any) {
    this.editData = {
      _id: item._id,
      vision: { ...item.vision },
      missionText: item.mission?.join(', ')
    };
  }
  openModal(template: TemplateRef<any>, item: any) {
    this.editData = {
      _id: item._id,
      vision: { ...item.vision },
      missionText: item.mission?.join(', ')
    };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  updateItem(id:any) {
    console.log(id);
    
    const payload = {
      vision: { ...this.editData.vision },
      mission: this.editData.missionText.split(',').map((m:any) => m.trim())
    };
    this.mainService.edit_vision_mission(payload,id).subscribe((res:any) => {
      console.log(res);
    })
    console.log('Updating with:', payload);
    this.closeModal();
    this.ngOnInit();
  }


  deleteItem(_id: string) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.mainService.delete_vision_mission(_id)
        .subscribe(res => {
          alert('Deleted successfully');
          this.fetchData();
        }, err => {
          console.error('Delete failed:', err);
        });
    }
  }

}



