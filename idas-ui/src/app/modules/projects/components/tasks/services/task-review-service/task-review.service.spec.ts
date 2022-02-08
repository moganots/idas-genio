import { TestBed } from '@angular/core/testing';
import { TaskReviewService } from './task-review.service';

describe('TaskReviewService', () => {
  let service: TaskReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
