import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSchoolComponent } from './public-school.component';

describe('PublicSchoolComponent', () => {
  let component: PublicSchoolComponent;
  let fixture: ComponentFixture<PublicSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicSchoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
