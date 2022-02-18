import { TestBed } from '@angular/core/testing';
import 'jasmine';
import { TaskWorklogService } from './task-worklog-service';

describe('TaskWorklogService', () => {
  let service: TaskWorklogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskWorklogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
