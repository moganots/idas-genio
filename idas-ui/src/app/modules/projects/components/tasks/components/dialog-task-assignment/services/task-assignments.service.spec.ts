import { TestBed } from '@angular/core/testing';

import { TaskAssignmentsService } from './task-assignments.service';

describe('TaskAssignmentsService', () => {
  let service: TaskAssignmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskAssignmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
