import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicsOverviewComponent } from './add-academics-overview.component';

describe('AddAcademicsOverviewComponent', () => {
  let component: AddAcademicsOverviewComponent;
  let fixture: ComponentFixture<AddAcademicsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAcademicsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAcademicsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
