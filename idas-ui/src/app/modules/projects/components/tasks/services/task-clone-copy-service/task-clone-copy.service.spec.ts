import { TestBed } from '@angular/core/testing';
import { TaskCloneCopyService } from './task-clone-copy.service';


describe('TaskCloneCopyService', () => {
  let service: TaskCloneCopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCloneCopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
