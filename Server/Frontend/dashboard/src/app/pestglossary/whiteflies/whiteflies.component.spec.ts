import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitefliesComponent } from './whiteflies.component';

describe('WhitefliesComponent', () => {
  let component: WhitefliesComponent;
  let fixture: ComponentFixture<WhitefliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitefliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhitefliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
