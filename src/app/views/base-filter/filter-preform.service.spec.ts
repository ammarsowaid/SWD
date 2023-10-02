import { TestBed } from '@angular/core/testing';

import { FilterPreformService } from './filter-preform.service';

describe('FilterPreformService', () => {
  let service: FilterPreformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPreformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
