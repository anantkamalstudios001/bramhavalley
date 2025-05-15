import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyStaffUsersComponent } from './faculty-staff-users.component';

describe('FacultyStaffUsersComponent', () => {
  let component: FacultyStaffUsersComponent;
  let fixture: ComponentFixture<FacultyStaffUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyStaffUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyStaffUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
