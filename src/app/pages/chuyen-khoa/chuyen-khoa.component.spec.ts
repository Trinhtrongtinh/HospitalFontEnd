import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenKhoaComponent } from './chuyen-khoa.component';

describe('ChuyenKhoaComponent', () => {
  let component: ChuyenKhoaComponent;
  let fixture: ComponentFixture<ChuyenKhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChuyenKhoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuyenKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
