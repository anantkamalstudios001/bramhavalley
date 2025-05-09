import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationReportsComponent } from './application-reports.component';

describe('ApplicationReportsComponent', () => {
  let component: ApplicationReportsComponent;
  let fixture: ComponentFixture<ApplicationReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
