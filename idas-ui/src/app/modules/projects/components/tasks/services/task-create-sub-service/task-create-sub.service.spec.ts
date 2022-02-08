import { TestBed } from '@angular/core/testing';
import { TaskCreateSubServiceService } from './task-create-sub.service';

describe('TaskCreateSubServiceService', () => {
  let service: TaskCreateSubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCreateSubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
