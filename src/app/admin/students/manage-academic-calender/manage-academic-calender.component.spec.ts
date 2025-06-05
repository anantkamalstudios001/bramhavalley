import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicCalenderComponent } from './manage-academic-calender.component';

describe('ManageAcademicCalenderComponent', () => {
  let component: ManageAcademicCalenderComponent;
  let fixture: ComponentFixture<ManageAcademicCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAcademicCalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAcademicCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
