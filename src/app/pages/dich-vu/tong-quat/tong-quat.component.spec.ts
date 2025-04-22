import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TongQuatComponent } from './tong-quat.component';

describe('TongQuatComponent', () => {
  let component: TongQuatComponent;
  let fixture: ComponentFixture<TongQuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TongQuatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TongQuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
