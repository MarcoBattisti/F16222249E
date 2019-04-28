import { TestBed } from '@angular/core/testing';

import { IntroductionInformationsService } from './introduction-informations.service';

describe('IntroductionInformationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntroductionInformationsService = TestBed.get(IntroductionInformationsService);
    expect(service).toBeTruthy();
  });
});
