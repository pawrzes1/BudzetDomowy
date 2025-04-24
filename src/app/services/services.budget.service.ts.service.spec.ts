import { TestBed } from '@angular/core/testing';

import { ServicesBudgetServiceTsService } from './budget.service';

describe('ServicesBudgetServiceTsService', () => {
  let service: ServicesBudgetServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesBudgetServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
