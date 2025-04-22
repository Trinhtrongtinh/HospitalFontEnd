import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YHocComponent } from './y-hoc.component';

describe('YHocComponent', () => {
  let component: YHocComponent;
  let fixture: ComponentFixture<YHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YHocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
