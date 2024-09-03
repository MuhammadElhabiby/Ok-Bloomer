import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreseteeditorAlarmComponent } from './preseteeditor-alarm.component';

describe('PreseteeditorAlarmComponent', () => {
  let component: PreseteeditorAlarmComponent;
  let fixture: ComponentFixture<PreseteeditorAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreseteeditorAlarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreseteeditorAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
