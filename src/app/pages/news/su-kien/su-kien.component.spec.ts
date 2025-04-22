import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuKienComponent } from './su-kien.component';

describe('SuKienComponent', () => {
  let component: SuKienComponent;
  let fixture: ComponentFixture<SuKienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuKienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuKienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
