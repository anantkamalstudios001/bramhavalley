import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicsRegulationComponent } from './add-academics-regulation.component';

describe('AddAcademicsRegulationComponent', () => {
  let component: AddAcademicsRegulationComponent;
  let fixture: ComponentFixture<AddAcademicsRegulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAcademicsRegulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAcademicsRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
