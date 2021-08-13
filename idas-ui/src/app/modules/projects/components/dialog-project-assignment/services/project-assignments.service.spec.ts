import { TestBed } from '@angular/core/testing';

import { ProjectAssignmentsService } from './project-assignments.service';

describe('ProjectAssignmentsService', () => {
  let service: ProjectAssignmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectAssignmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
