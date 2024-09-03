import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapricaComponent } from './paprica.component';

describe('PapricaComponent', () => {
  let component: PapricaComponent;
  let fixture: ComponentFixture<PapricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapricaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
