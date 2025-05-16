import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-backup-restore',
  imports: [
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
  templateUrl: './backup-restore.component.html',
  styleUrl: './backup-restore.component.scss'
})
export class BackupRestoreComponent {
  backups: any[] = []; // Replace with real data
  selectedFile: File | null = null;
  breadscrums = [
    {
      title: 'backup & Restore',
      items: ['Settings'],
      active: 'backup & Restore',
    },
  ];
  ngOnInit(): void {
    this.loadBackups();
  }

  createBackup(): void {
    // Call backend to trigger a backup
    console.log('Creating new backup...');
  }

  loadBackups(): void {
    // Fetch backup list from API
    this.backups = [
      { name: 'backup_2024_01_01.zip', date: '2024-01-01', size: 12 },
      { name: 'backup_2024_04_01.zip', date: '2024-04-01', size: 15 }
    ];
  }

  restoreBackup(backup: any): void {
    // Call API to restore this backup
    console.log('Restoring backup:', backup.name);
  }

  deleteBackup(backup: any): void {
    // Call API to delete the backup
    console.log('Deleting backup:', backup.name);
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  uploadRestore(): void {
    if (!this.selectedFile) {
      alert('Please select a backup file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('backupFile', this.selectedFile);

    // Call API to upload and restore backup
    console.log('Uploading and restoring:', this.selectedFile.name);
  }
}
