import { Injectable } from '@angular/core';
import { DataService, TaskAssignment } from 'app/shared/app-shared.module';

@Injectable({
  providedIn: 'root'
})
export class TaskAssignmentService extends DataService {

  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,) {
    super(httpClient, authenticationService);
  }
  mapValues(taskAssignment: TaskAssignment) {
    task.Project = this.projects.find(project => project._id === task.ProjectId);
    task.Assignee = this.users.find(user => user._id === task.AssigneeId);
    task.TaskType = this.lookupValues.find(value => value._id === task.TaskTypeId);
    task.Priority = this.lookupValues.find(value => value._id === task.PriorityId);
    task.Status = this.lookupValues.find(value => value._id === task.StatusId);
    task.createdBy = this.users.find(user => user._id === task.CreatedBy);
    task.modifiedBy = this.users.find(user => user._id === task.ModifiedBy);
    return task;
  }
}
