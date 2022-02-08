import { TestBed } from '@angular/core/testing';
import { TaskCreateSubService } from './task-create-sub.service';

describe('TaskCreateSubService', () => {
  let service: TaskCreateSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCreateSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
