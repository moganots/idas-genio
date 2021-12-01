/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { UserRoutesService } from './user-routes.service';

describe('Service: UserRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRoutesService]
    });
  });

  it('should ...', inject([UserRoutesService], (service: UserRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
