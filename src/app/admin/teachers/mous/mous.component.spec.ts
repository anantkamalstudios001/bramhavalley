import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOUsComponent } from './mous.component';

describe('MOUsComponent', () => {
  let component: MOUsComponent;
  let fixture: ComponentFixture<MOUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MOUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MOUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
