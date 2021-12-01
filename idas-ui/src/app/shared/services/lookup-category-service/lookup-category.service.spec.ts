/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { LookupCategoryService } from './lookup-category.service';

describe('Service: LookupCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LookupCategoryService]
    });
  });

  it('should ...', inject([LookupCategoryService], (service: LookupCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
