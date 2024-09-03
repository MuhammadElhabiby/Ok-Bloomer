import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSelectorComponent } from './box-selector.component';

describe('BoxSelectorComponent', () => {
  let component: BoxSelectorComponent;
  let fixture: ComponentFixture<BoxSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
