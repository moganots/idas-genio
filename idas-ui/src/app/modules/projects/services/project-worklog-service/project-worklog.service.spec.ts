import { TestBed } from '@angular/core/testing';
import 'jasmine';
import { ProjectWorklogService } from './project-worklog.service';

describe('ProjectWorklogService', () => {
  let service: ProjectWorklogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectWorklogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
