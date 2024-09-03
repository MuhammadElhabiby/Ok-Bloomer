import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTdsComponent } from './chart-tds.component';

describe('ChartPhComponent', () => {
  let component: ChartTdsComponent;
  let fixture: ComponentFixture<ChartTdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartTdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
