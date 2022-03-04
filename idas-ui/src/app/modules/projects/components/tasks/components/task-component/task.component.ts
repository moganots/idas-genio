import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import {
  AlertifyService,
  AuthenticationService,
  DateUtils,
  LookupValue,
  LookupValueService,
  Task,
  TaskComment,
  User,
} from 'app/shared/app-shared.module';
import { first } from 'rxjs/operators';
import { TaskAssignService } from '../../services/task-assign-service/task-assign-service';
import { TaskCloneCopyService } from '../../services/task-clone-copy-service/task-clone-copy.service';
import { TaskCommentService } from '../../services/task-comment-service/task-comment.service';
import { TaskCreateSubService } from '../../services/task-create-sub-service/task-create-sub.service';
import { TaskReviewService } from '../../services/task-review-service/task-review.service';
import { TaskConfiguration } from '../../services/task-service/task-configuration';
import { TaskService } from '../../services/task-service/task.service';
import { TaskWorklogService } from '../../services/task-work-log-service/task-worklog-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    TaskService,
    TaskCommentService,
    TaskWorklogService,
    TaskAssignService,
    TaskCreateSubService,
    TaskCloneCopyService,
    TaskReviewService,
  ],
})
export class TaskComponent extends PageComponent implements OnInit {
  taskId?: number;
  task: Task;
  statuses: LookupValue[] = [];
  priorities: LookupValue[] = [];
  users: User[] = [];
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public taskService: TaskService,
    public taskCommentService: TaskCommentService,
    public taskWorklogService: TaskWorklogService,
    public taskAssignService: TaskAssignService,
    public taskCreateSubService: TaskCreateSubService,
    public taskCloneCopyService: TaskCloneCopyService,
    public taskReviewService: TaskReviewService,
    private activatedRoute: ActivatedRoute
  ) {
    super(
      router,
      matDialog,
      formBuilder,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.entityName = TaskConfiguration.identifier;
    this.dataSourceColumns = TaskConfiguration.dataColumns;
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.activatedRoute.params.subscribe((params) => {
      this.taskId = params.id;
    });
  }
  ngOnInit() {
    this.onLoadRefreshData();
  }
  formatTimeSpent(timeSpent: string) {
    return timeSpent?.split(` `).map((ts) => this.getFormattedTimeSpent(ts)).join(` `);
  }
  getFormattedTimeSpent(timeSpent: string): any {
    const tsElements = timeSpent?.split(/(\d+)/).filter((ts) => !(String(ts).trim().length === 0));
    switch(this.toLocaleLowerCaseTrim(tsElements[1])){
      case `y`: return `${tsElements[0]} year(s)`;
      case `m`: return `${tsElements[0]} month(s)`;
      case `d`: return `${tsElements[0]} day(s)`;
      case `h`: return `${tsElements[0]} hour(s)`;
      case `min`: return `${tsElements[0]} minute(s)`;
      case `sec`: return `${tsElements[0]} second(s)`;
    }
  }
  timeElapsedComment(comment: TaskComment) {
    return DateUtils.timeAgo(DateUtils.add(new Date(comment?.DateCreated), `hour`, -2));
  }
  onLoadRefreshData() {
    this.referenceValueService.taskService
      .getAll<Task>()
      // .toPromise()
      .subscribe((tasks) => {
        // 1. Get this.task
        this.task = tasks.find((t) => t?._id === this.taskId);
      });
    this.referenceValueService.userService
      .getAll<User>()
      // .toPromise()
      .subscribe((users) => {
        this.users = users;
      });
    this.lookupValueService
      .getAll<LookupValue>()
      // .toPromise()
      .subscribe((lookupValues) => {
        // Get (Set) Status / Priority dropdown value(s)
        this.statuses = lookupValues.filter(
          (value) => value.LookupCategory.Name === 'Status'
        );
        this.priorities = lookupValues.filter(
          (value) => value.LookupCategory.Name === 'Priority'
        );
      });
  }
  onClickAssignTo(user: User) {
    this.taskAssignService.CreateUpdateDelete(`Create`, {TaskId: this.task?._id, AssigneeId: user?._id, Comment: `Task [${this.task?._id}] has been assigned to you.`})
    .pipe(first())
    .subscribe({
      next: (updated) => {
        this.alertifyService.success(
          `Task successfully assigned to ${user?.DisplayName || user?.EmailAddress}`
        );
      },
      complete: () => { this.onLoadRefreshData(); },
      error: (error) => {
        this.alertifyService.error(error.message || error);
      },
    });
  }
}
