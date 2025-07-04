import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuyenDungComponent } from './tuyen-dung.component';

describe('TuyenDungComponent', () => {
  let component: TuyenDungComponent;
  let fixture: ComponentFixture<TuyenDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuyenDungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuyenDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
