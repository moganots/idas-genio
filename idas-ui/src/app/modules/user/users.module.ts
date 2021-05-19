import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs'

import { UserInboxComponent } from './components/user-inbox/user-inbox.component';
import { UserNotificationsComponent } from './components/user-notifications/user-notifications.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { UserScheduleComponent } from './components/user-schedule/user-schedule.component';
import { UserTasksComponent } from './components/user-tasks/user-tasks.component';
import { ModulesSharedModule } from '../_shared/modules-shared.module';
import { UsersComponent } from './users.component';
import { InboxService } from './components/user-inbox/services/inbox.service';
import { NotificationsService } from './components/user-notifications/services/notifications.service';
import { ProjectsService } from './components/user-projects/services/projects.service';
import { ScheduleService } from './components/user-schedule/services/schedule.service';
import { TasksService } from './components/user-tasks/services/tasks.service';
import { UsersService } from './services/users.service';

export { UserInboxComponent } from './components/user-inbox/user-inbox.component';
export { UserNotificationsComponent } from './components/user-notifications/user-notifications.component';
export { UserProfileComponent } from './components/user-profile/user-profile.component';
export { UserProjectsComponent } from './components/user-projects/user-projects.component';
export { UserScheduleComponent } from './components/user-schedule/user-schedule.component';
export { UserTasksComponent } from './components/user-tasks/user-tasks.component';
export { UsersComponent } from './users.component';

export { UserInboxConfiguration } from './components/user-inbox/user-inbox-configuration';
export { UserNotificationsConfiguration } from './components/user-notifications/user-notifications-configuration';
export { UserProfileConfiguration } from './components/user-profile/user-profile-configuration';
export { UserProjectsConfiguration } from './components/user-projects/user-projects-configuration';
export { UserScheduleConfiguration } from './components/user-schedule/user-schedule-configuration';
export { UserTasksConfiguration } from './components/user-tasks/user-tasks-configuration';
export { UsersConfiguration } from './users-configuration';

export { InboxService } from './components/user-inbox/services/inbox.service';
export { NotificationsService } from './components/user-notifications/services/notifications.service';
export { ProjectsService } from './components/user-projects/services/projects.service';
export { ScheduleService } from './components/user-schedule/services/schedule.service';
export { TasksService } from './components/user-tasks/services/tasks.service';
export { UsersService } from './services/users.service';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    ModulesSharedModule
  ],
  declarations: [
    UserInboxComponent,
    UserNotificationsComponent,
    UserProfileComponent,
    UserProjectsComponent,
    UserScheduleComponent,
    UserTasksComponent,
    UsersComponent
  ],
  exports: [],
  providers: [
    UsersService,
    NotificationsService,
    InboxService,
    ScheduleService,
    ProjectsService,
    TasksService
  ]
})
export class UsersModule { }
