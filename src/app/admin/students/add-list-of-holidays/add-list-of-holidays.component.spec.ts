import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListOfHolidaysComponent } from './add-list-of-holidays.component';

describe('AddListOfHolidaysComponent', () => {
  let component: AddListOfHolidaysComponent;
  let fixture: ComponentFixture<AddListOfHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddListOfHolidaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListOfHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
