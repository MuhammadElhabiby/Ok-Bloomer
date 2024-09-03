import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestglossaryComponent } from './pestglossary.component';

describe('PestglossaryComponent', () => {
  let component: PestglossaryComponent;
  let fixture: ComponentFixture<PestglossaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PestglossaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PestglossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
