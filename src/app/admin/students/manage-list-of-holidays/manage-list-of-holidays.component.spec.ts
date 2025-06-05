import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageListOfHolidaysComponent } from './manage-list-of-holidays.component';

describe('ManageListOfHolidaysComponent', () => {
  let component: ManageListOfHolidaysComponent;
  let fixture: ComponentFixture<ManageListOfHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageListOfHolidaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageListOfHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
