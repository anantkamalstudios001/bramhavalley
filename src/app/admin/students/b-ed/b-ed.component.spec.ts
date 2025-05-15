import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BEdComponent } from './b-ed.component';

describe('BEdComponent', () => {
  let component: BEdComponent;
  let fixture: ComponentFixture<BEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BEdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
