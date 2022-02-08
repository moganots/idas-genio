import { TestBed } from '@angular/core/testing';

import { ProjectCreateSubServiceService } from './project-create-sub-service.service';

describe('ProjectCreateSubServiceService', () => {
  let service: ProjectCreateSubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCreateSubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
