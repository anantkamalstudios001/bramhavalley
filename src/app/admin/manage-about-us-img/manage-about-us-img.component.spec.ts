import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAboutUsImgComponent } from './manage-about-us-img.component';

describe('ManageAboutUsImgComponent', () => {
  let component: ManageAboutUsImgComponent;
  let fixture: ComponentFixture<ManageAboutUsImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAboutUsImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAboutUsImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
