/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReferenceEntityService } from './reference-entity.service';

describe('Service: Reference', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceEntityService]
    });
  });

  it('should ...', inject([ReferenceEntityService], (service: ReferenceEntityService) => {
    expect(service).toBeTruthy();
  }));
});
