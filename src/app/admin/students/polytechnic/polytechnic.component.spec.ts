import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolytechnicComponent } from './polytechnic.component';

describe('PolytechnicComponent', () => {
  let component: PolytechnicComponent;
  let fixture: ComponentFixture<PolytechnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolytechnicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolytechnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
