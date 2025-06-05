import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicsOverviewComponent } from './manage-academics-overview.component';

describe('ManageAcademicsOverviewComponent', () => {
  let component: ManageAcademicsOverviewComponent;
  let fixture: ComponentFixture<ManageAcademicsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAcademicsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAcademicsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
