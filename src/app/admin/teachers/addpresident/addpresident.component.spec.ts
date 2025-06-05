import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpresidentComponent } from './addpresident.component';

describe('AddpresidentComponent', () => {
  let component: AddpresidentComponent;
  let fixture: ComponentFixture<AddpresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddpresidentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
