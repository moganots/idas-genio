import { TestBed } from '@angular/core/testing';

import { ProjectWorkLogService } from './project-work-log.service';

describe('ProjectWorkLogService', () => {
  let service: ProjectWorkLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectWorkLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});