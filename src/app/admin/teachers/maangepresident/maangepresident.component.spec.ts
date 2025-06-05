import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaangepresidentComponent } from './maangepresident.component';

describe('MaangepresidentComponent', () => {
  let component: MaangepresidentComponent;
  let fixture: ComponentFixture<MaangepresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaangepresidentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaangepresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
