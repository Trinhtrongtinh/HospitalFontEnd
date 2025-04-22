import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoBacSiComponent } from './theo-bac-si.component';

describe('TheoBacSiComponent', () => {
  let component: TheoBacSiComponent;
  let fixture: ComponentFixture<TheoBacSiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoBacSiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoBacSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
