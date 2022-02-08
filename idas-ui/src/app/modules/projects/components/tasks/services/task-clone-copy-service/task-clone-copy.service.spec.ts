import { TestBed } from '@angular/core/testing';
import { TaskCloneCopyServiceService } from './task-clone-copy.service';


describe('TaskCloneCopyServiceService', () => {
  let service: TaskCloneCopyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCloneCopyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
