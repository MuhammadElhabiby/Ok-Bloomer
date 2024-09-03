import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarplantsComponent } from './glossarplants.component';

describe('GlossarplantsComponent', () => {
  let component: GlossarplantsComponent;
  let fixture: ComponentFixture<GlossarplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossarplantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlossarplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
