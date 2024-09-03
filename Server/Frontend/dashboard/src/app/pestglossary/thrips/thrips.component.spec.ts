import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThripsComponent } from './thrips.component';

describe('ThripsComponent', () => {
  let component: ThripsComponent;
  let fixture: ComponentFixture<ThripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
