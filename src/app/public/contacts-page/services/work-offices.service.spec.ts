import { TestBed } from '@angular/core/testing';

import { WorkOfficesService } from './work-offices.service';

describe('WorkOfficesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkOfficesService = TestBed.get(WorkOfficesService);
    expect(service).toBeTruthy();
  });
});
