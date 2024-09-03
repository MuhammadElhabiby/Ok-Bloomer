import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelapsComponent } from './timelaps.component';

describe('TimelapsComponent', () => {
  let component: TimelapsComponent;
  let fixture: ComponentFixture<TimelapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
