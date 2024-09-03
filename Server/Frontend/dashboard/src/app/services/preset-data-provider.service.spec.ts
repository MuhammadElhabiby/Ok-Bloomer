import { TestBed } from '@angular/core/testing';

import { PresetDataProviderService } from './preset-data-provider.service';

describe('PresetDataProviderService', () => {
  let service: PresetDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresetDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
