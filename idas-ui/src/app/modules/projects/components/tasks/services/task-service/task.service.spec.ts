/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('Service: Tasks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should ...', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
