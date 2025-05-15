import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyUploadsComponent } from './faculty-uploads.component';

describe('FacultyUploadsComponent', () => {
  let component: FacultyUploadsComponent;
  let fixture: ComponentFixture<FacultyUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyUploadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
