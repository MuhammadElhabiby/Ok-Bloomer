import { TestBed } from '@angular/core/testing';

import { BoxService } from './box.service';

describe('SelectedBoxService', () => {
  let service: BoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
