import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGroupInstituteComponent } from './our-group-institute.component';

describe('OurGroupInstituteComponent', () => {
  let component: OurGroupInstituteComponent;
  let fixture: ComponentFixture<OurGroupInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurGroupInstituteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurGroupInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
