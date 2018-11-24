import { TestBed } from '@angular/core/testing';

import { ApiConfigServiceService } from './api-config-service';

describe('ApiConfigServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiConfigServiceService = TestBed.get(ApiConfigServiceService);
    expect(service).toBeTruthy();
  });
});
