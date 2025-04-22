import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoanhNghiepComponent } from './doanh-nghiep.component';

describe('DoanhNghiepComponent', () => {
  let component: DoanhNghiepComponent;
  let fixture: ComponentFixture<DoanhNghiepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoanhNghiepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoanhNghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
