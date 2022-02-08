import { TestBed } from '@angular/core/testing';
import 'jasmine';
import { ProjectAssignService } from './project-assign.service';

describe('ProjectAssignService', () => {
  let service: ProjectAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
