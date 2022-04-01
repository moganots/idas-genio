import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { TextFieldModule } from '@angular/cdk/text-field';
import { RouterModule } from '@angular/router';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';

import { AppModulesSharedModule } from '../_shared/app-modules-shared.module';
import { AppSharedModule } from 'app/shared/app-shared.module';

import { ProjectComponent } from './components/project-component/project.component';
import { ViewProjectTaskActivityComponent } from './components/shared/view-project-task-activity/view-project-task-activity.component';
import { ViewProjectTaskDetailsComponent } from './components/shared/view-project-task-details/view-project-task-details.component';
import { DialogManageProjectTaskToolbarAssignComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-assign/dialog-manage-project-task-toolbar-assign.component';
import { DialogManageProjectTaskToolbarCommentComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-comment/dialog-manage-project-task-toolbar-comment.component';
import { DialogManageProjectTaskToolbarLogWorkComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-log-work/dialog-manage-project-task-toolbar-log-work.component';
import { DialogManageProjectTaskToolbarReviewComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-review/dialog-manage-project-task-toolbar-review.component';
import { ManageProjectTaskToolbarComponent } from './components/shared/manage-project-task-toolbar/manage-project-task-toolbar.component';
import { TaskComponent } from './components/tasks/components/task-component/task.component';
import { TaskAssignService } from './components/tasks/services/task-assign-service/task-assign-service';
import { TaskCloneCopyService } from './components/tasks/services/task-clone-copy-service/task-clone-copy.service';
import { TaskCommentService } from './components/tasks/services/task-comment-service/task-comment.service';
import { TaskCreateSubService } from './components/tasks/services/task-create-sub-service/task-create-sub.service';
import { TaskReviewService } from './components/tasks/services/task-review-service/task-review.service';
import { TaskService } from './components/tasks/services/task-service/task.service';
import { TaskStatusService } from './components/tasks/services/task-status-service/task-status.service';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProjectsComponent } from './projects.component';
import { ProjectAssignService } from './services/project-assign-service/project-assign.service';
import { ProjectCloneCopyService } from './services/project-clone-copy-service/project-clone-copy.service';
import { ProjectCommentService } from './services/project-comment-service/project-comment.service';
import { ProjectCreateSubService } from './services/project-create-sub-service/project-create-sub.service';
import { ProjectReviewService } from './services/project-review-service/project-review.service';
import { ProjectService } from './services/project-service/project.service';
import { ProjectStatusService } from './services/project-status-service/project-status.service';
import { ProjectWorklogService } from './services/project-worklog-service/project-worklog.service';
import { DialogManageProjectTaskToolbarAttachFilesComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-attach/dialog-manage-project-task-toolbar-attach.component';
import { DialogManageProjectTaskToolbarCloneCopyComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-copy/dialog-manage-project-task-toolbar-copy.component';
import { DialogManageProjectTaskToolbarCreateSubComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-sub/dialog-manage-project-task-toolbar-sub.component';
import { TaskWorklogService } from './components/tasks/services/task-work-log-service/task-worklog-service';
import { ViewAssociatedProjectTaskComponent } from './components/shared/view-associated-project-task/view-associated-project-task/view-associated-project-task.component';

export { ProjectComponent } from './components/project-component/project.component';
export { ViewProjectTaskActivityComponent } from './components/shared/view-project-task-activity/view-project-task-activity.component';
export { ViewProjectTaskDetailsComponent } from './components/shared/view-project-task-details/view-project-task-details.component';
export { DialogManageProjectTaskToolbarAssignComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-assign/dialog-manage-project-task-toolbar-assign.component';
export { DialogManageProjectTaskToolbarCommentComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-comment/dialog-manage-project-task-toolbar-comment.component';
export { DialogManageProjectTaskToolbarLogWorkComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-log-work/dialog-manage-project-task-toolbar-log-work.component';
export { DialogManageProjectTaskToolbarReviewComponent } from './components/shared/manage-project-task-toolbar/components/dialog-manage-project-task-toolbar-review/dialog-manage-project-task-toolbar-review.component';
export { ManageProjectTaskToolbarComponent } from './components/shared/manage-project-task-toolbar/manage-project-task-toolbar.component';
export { TaskComponent } from './components/tasks/components/task-component/task.component';
export { TaskAssignService } from './components/tasks/services/task-assign-service/task-assign-service';
export { TaskCloneCopyService } from './components/tasks/services/task-clone-copy-service/task-clone-copy.service';
export { TaskCommentService } from './components/tasks/services/task-comment-service/task-comment.service';
export { TaskCreateSubService } from './components/tasks/services/task-create-sub-service/task-create-sub.service';
export { TaskReviewService } from './components/tasks/services/task-review-service/task-review.service';
export { TaskService } from './components/tasks/services/task-service/task.service';
export { TaskStatusService } from './components/tasks/services/task-status-service/task-status.service';
export { TasksComponent } from './components/tasks/tasks.component';
export { ProjectsComponent } from './projects.component';
export { ProjectAssignService } from './services/project-assign-service/project-assign.service';
export { ProjectCloneCopyService } from './services/project-clone-copy-service/project-clone-copy.service';
export { ProjectCommentService } from './services/project-comment-service/project-comment.service';
export { ProjectCreateSubService } from './services/project-create-sub-service/project-create-sub.service';
export { ProjectReviewService } from './services/project-review-service/project-review.service';
export { ProjectService } from './services/project-service/project.service';
export { ProjectStatusService } from './services/project-status-service/project-status.service';
export { ProjectWorklogService } from './services/project-worklog-service/project-worklog.service';
export { TaskAssignConfiguration } from './components/tasks/services/task-assign-service/task-assign-configuration';
export { TaskCloneCopyConfiguration } from './components/tasks/services/task-clone-copy-service/task-clone-copy-configuration';
export { TaskCommentConfiguration } from './components/tasks/services/task-comment-service/task-comment-configuration';
export { TaskCreateSubConfiguration } from './components/tasks/services/task-create-sub-service/task-create-sub-configuration';
export { TaskReviewConfiguration } from './components/tasks/services/task-review-service/task-review-configuration';
export { TaskConfiguration } from './components/tasks/services/task-service/task-configuration';
export { ProjectCommentConfiguration } from './services/project-comment-service/project-comment-configuration';
export { ProjectReviewConfiguration } from './services/project-review-service/project-review-configuration';
export { ProjectConfiguration } from './services/project-service/project-configuration';
export { ProjectWorklogConfiguration } from './services/project-worklog-service/project-worklog-configuration';
export { ProjectCloneCopyConfiguration } from './services/project-clone-copy-service/project-clone-copy-configuration';
export { ProjectCreateSubConfiguration } from './services/project-create-sub-service/project-create-sub-configuration';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    TasksComponent,
    TaskComponent,
    ManageProjectTaskToolbarComponent,
    ViewProjectTaskActivityComponent,
    ViewProjectTaskDetailsComponent,
    DialogManageProjectTaskToolbarLogWorkComponent,
    DialogManageProjectTaskToolbarReviewComponent,
    DialogManageProjectTaskToolbarCommentComponent,
    DialogManageProjectTaskToolbarAssignComponent,
    DialogManageProjectTaskToolbarAttachFilesComponent,
    DialogManageProjectTaskToolbarCloneCopyComponent,
    DialogManageProjectTaskToolbarCreateSubComponent,
    ViewAssociatedProjectTaskComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule,
    TextFieldModule,
    MatTabsModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    AppModulesSharedModule,
    AppSharedModule,
  ],
  entryComponents: [
    DialogManageProjectTaskToolbarLogWorkComponent,
    DialogManageProjectTaskToolbarReviewComponent,
    DialogManageProjectTaskToolbarCommentComponent,
    DialogManageProjectTaskToolbarAssignComponent,
  ],
  providers: [
    ProjectAssignService,
    ProjectCloneCopyService,
    ProjectCommentService,
    ProjectCreateSubService,
    ProjectReviewService,
    ProjectService,
    ProjectStatusService,
    ProjectWorklogService,
    TaskAssignService,
    TaskCloneCopyService,
    TaskCommentService,
    TaskCreateSubService,
    TaskReviewService,
    TaskService,
    TaskStatusService,
    TaskWorklogService,
  ],
})
export class AppModulesProjectsModule {}
