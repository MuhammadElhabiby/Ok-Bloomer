import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucchiniComponent } from './succhini.component';

describe('SucchiniComponent', () => {
  let component: SucchiniComponent;
  let fixture: ComponentFixture<SucchiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucchiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucchiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
