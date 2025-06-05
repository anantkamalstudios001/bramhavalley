import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCoreVluesComponent } from './manage-core-vlues.component';

describe('ManageCoreVluesComponent', () => {
  let component: ManageCoreVluesComponent;
  let fixture: ComponentFixture<ManageCoreVluesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCoreVluesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCoreVluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
