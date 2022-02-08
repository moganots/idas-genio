import { TestBed } from '@angular/core/testing';

import { ProjectReviewServiceService } from './project-review-service.service';

describe('ProjectReviewServiceService', () => {
  let service: ProjectReviewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectReviewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
