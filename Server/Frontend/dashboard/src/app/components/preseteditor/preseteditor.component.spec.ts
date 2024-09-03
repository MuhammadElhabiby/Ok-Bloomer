import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreseteditorComponent } from './preseteditor.component';

describe('PreseteditorComponent', () => {
  let component: PreseteditorComponent;
  let fixture: ComponentFixture<PreseteditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreseteditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreseteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
