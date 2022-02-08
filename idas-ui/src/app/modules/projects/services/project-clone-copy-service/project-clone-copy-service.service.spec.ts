import { TestBed } from '@angular/core/testing';

import { ProjectCloneCopyServiceService } from './project-clone-copy-service.service';

describe('ProjectCloneCopyServiceService', () => {
  let service: ProjectCloneCopyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCloneCopyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
