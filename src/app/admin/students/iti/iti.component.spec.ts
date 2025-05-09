import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITIComponent } from './iti.component';

describe('ITIComponent', () => {
  let component: ITIComponent;
  let fixture: ComponentFixture<ITIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
