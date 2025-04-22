import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoChuyenKhoaComponent } from './theo-chuyen-khoa.component';

describe('TheoChuyenKhoaComponent', () => {
  let component: TheoChuyenKhoaComponent;
  let fixture: ComponentFixture<TheoChuyenKhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoChuyenKhoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoChuyenKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
