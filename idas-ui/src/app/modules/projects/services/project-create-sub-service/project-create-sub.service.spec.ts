import { TestBed } from '@angular/core/testing';

import { ProjectCreateSubService } from './project-create-sub-service.service';

describe('ProjectCreateSubService', () => {
  let service: ProjectCreateSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCreateSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
