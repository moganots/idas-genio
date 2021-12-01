/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { LookupValueService } from './lookup-value.service';

describe('Service: LookupValue', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LookupValueService]
    });
  });

  it('should ...', inject([LookupValueService], (service: LookupValueService) => {
    expect(service).toBeTruthy();
  }));
});
