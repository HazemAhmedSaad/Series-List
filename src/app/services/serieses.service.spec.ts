import { TestBed } from '@angular/core/testing';

import { SeriesesService } from './serieses.service';

describe('SeriesesService', () => {
  let service: SeriesesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
