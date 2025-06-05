import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceChancellorsMessageComponent } from './vice-chancellors-message.component';

describe('ViceChancellorsMessageComponent', () => {
  let component: ViceChancellorsMessageComponent;
  let fixture: ComponentFixture<ViceChancellorsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViceChancellorsMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViceChancellorsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
