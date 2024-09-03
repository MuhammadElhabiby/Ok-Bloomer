import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHumidityComponent } from './chart-humidity.component';

describe('ChartHumidityComponent', () => {
  let component: ChartHumidityComponent;
  let fixture: ComponentFixture<ChartHumidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartHumidityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
