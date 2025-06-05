import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicsRegulationComponent } from './manage-academics-regulation.component';

describe('ManageAcademicsRegulationComponent', () => {
  let component: ManageAcademicsRegulationComponent;
  let fixture: ComponentFixture<ManageAcademicsRegulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAcademicsRegulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAcademicsRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
