import { TestBed } from '@angular/core/testing';
import 'jasmine';
import { TaskWorkLogService } from './task-worklog-service';

describe('TaskWorkLogService', () => {
  let service: TaskWorkLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskWorkLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
