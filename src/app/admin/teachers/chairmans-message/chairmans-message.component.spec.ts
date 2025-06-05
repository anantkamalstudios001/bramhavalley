import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmansMessageComponent } from './chairmans-message.component';

describe('ChairmansMessageComponent', () => {
  let component: ChairmansMessageComponent;
  let fixture: ComponentFixture<ChairmansMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChairmansMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairmansMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
