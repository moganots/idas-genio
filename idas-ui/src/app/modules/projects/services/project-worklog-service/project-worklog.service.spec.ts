import { TestBed } from '@angular/core/testing';
import 'jasmine';
import { ProjectWorkLogService } from './project-worklog.service';

describe('ProjectWorkLogService', () => {
  let service: ProjectWorkLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectWorkLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
