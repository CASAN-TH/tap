import { TestBed, inject } from '@angular/core/testing';

import { TapserviceService } from './tapservice.service';

describe('TapserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TapserviceService]
    });
  });

  it('should be created', inject([TapserviceService], (service: TapserviceService) => {
    expect(service).toBeTruthy();
  }));
});
