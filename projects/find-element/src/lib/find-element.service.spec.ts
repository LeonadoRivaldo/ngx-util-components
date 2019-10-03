import { TestBed } from '@angular/core/testing';

import { FindElementService } from './find-element.service';

describe('FindElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindElementService = TestBed.get(FindElementService);
    expect(service).toBeTruthy();
  });
});
