import { TestBed } from '@angular/core/testing';

import { ProjectCloneCopyService } from './project-clone-copy-service.service';

describe('ProjectCloneCopyService', () => {
  let service: ProjectCloneCopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCloneCopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
