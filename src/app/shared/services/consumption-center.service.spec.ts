import { TestBed } from '@angular/core/testing';

import { ConsumptionCenterService } from './consumption-center.service';

describe('ConsumptionCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumptionCenterService = TestBed.get(ConsumptionCenterService);
    expect(service).toBeTruthy();
  });
});
