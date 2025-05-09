import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLinksManagerComponent } from './quick-links-manager.component';

describe('QuickLinksManagerComponent', () => {
  let component: QuickLinksManagerComponent;
  let fixture: ComponentFixture<QuickLinksManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickLinksManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickLinksManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
