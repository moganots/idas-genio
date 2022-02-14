import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import {
  AuthenticationService,
  DataService,
  FileAttachment,
  FileAttachmentService,
  LookupValue,
  LookupValueService,
  Project,
  User,
} from 'app/shared/app-shared.module';
import { ProjectConfiguration } from './project-configuration';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  files: FileAttachment[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService,
    public fileAttachmentService: FileAttachmentService
  ) {
    super(httpClient, authenticationService);
    this.entityName = ProjectConfiguration.identifier;
    this.dataColumns = ProjectConfiguration.dataColumns;
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => { this.lookupValues = lookupValues});
    this.userService.getAll<User>().subscribe(users => { this.users = users; });
    this.fileAttachmentService.getAll<FileAttachment>().toPromise().then(files => { this.files = files; });
  }
  mapValues(project: Project) {
    project.ProjectType = this.lookupValues.find(value => value._id === project.ProjectTypeId);
    project.Priority = this.lookupValues.find(value => value._id === project.PriorityId);
    project.Status = this.lookupValues.find(value => value._id === project.StatusId);
    project.Files = this.files.filter((p) => p?.ProjectId === project?._id);
    project.createdBy = this.users.find(user => user._id === project.CreatedBy);
    project.modifiedBy = this.users.find(user => user._id === project.ModifiedBy);
    return project;
  }
}
