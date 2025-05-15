import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaUploadsComponent } from './media-uploads.component';

describe('MediaUploadsComponent', () => {
  let component: MediaUploadsComponent;
  let fixture: ComponentFixture<MediaUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaUploadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
