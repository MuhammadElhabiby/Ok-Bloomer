import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTempComponent } from './chart-temp.component';

describe('ChartTempComponent', () => {
  let component: ChartTempComponent;
  let fixture: ComponentFixture<ChartTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
