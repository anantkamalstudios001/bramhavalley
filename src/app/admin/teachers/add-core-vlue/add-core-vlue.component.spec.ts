import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoreVlueComponent } from './add-core-vlue.component';

describe('AddCoreVlueComponent', () => {
  let component: AddCoreVlueComponent;
  let fixture: ComponentFixture<AddCoreVlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCoreVlueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoreVlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
