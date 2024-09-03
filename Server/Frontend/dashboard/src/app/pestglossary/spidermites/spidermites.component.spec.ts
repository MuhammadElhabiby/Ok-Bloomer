import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpidermitesComponent } from './spidermites.component';

describe('SpidermitesComponent', () => {
  let component: SpidermitesComponent;
  let fixture: ComponentFixture<SpidermitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpidermitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpidermitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
