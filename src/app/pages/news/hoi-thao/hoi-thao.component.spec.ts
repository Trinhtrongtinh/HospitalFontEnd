import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoiThaoComponent } from './hoi-thao.component';

describe('HoiThaoComponent', () => {
  let component: HoiThaoComponent;
  let fixture: ComponentFixture<HoiThaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoiThaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoiThaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
