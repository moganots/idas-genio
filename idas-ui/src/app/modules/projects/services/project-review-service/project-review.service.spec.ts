import { TestBed } from '@angular/core/testing';

import { ProjectReviewService } from './project-review-service.service';

describe('ProjectReviewService', () => {
  let service: ProjectReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
