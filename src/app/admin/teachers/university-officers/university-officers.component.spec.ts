import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityOfficersComponent } from './university-officers.component';

describe('UniversityOfficersComponent', () => {
  let component: UniversityOfficersComponent;
  let fixture: ComponentFixture<UniversityOfficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversityOfficersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
