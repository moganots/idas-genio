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

import { AppModulesSharedModule } from '../_shared/app-modules-shared.module';
import { AppSharedModule } from 'app/shared/app-shared.module';

import { ProjectComponent } from './components/project-component/project.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProjectsComponent } from './projects.component';
import { DialogProjectAssignmentComponent } from './components/dialog-project-assignment/dialog-project-assignment.component';
import { DialogTaskAssignmentComponent } from './components/tasks/components/dialog-task-assignment/dialog-task-assignment.component';
import { TaskComponent } from './components/tasks/components/task-component/task.component';
import { DialogCreateNewTaskComponent } from './components/tasks/components/dialog-create-new-task/dialog-create-new-task.component';
import {
  ManageProjectTaskActivityComponent
} from './components/shared/manage-project-task-activity/manage-project-task-activity.component';
import { ManageProjectTaskDetailsComponent } from './components/shared/manage-project-task-details/manage-project-task-details.component';
import { ManageProjectTaskToolbarComponent } from './components/shared/manage-project-task-toolbar/manage-project-task-toolbar.component';
import { TaskAssignmentService } from './components/tasks/services/task-assignment-service/task-assignment.service';
import { TaskCommentService } from './components/tasks/services/task-comment-service/task-comment.service';
import { TaskService } from './components/tasks/services/task-service/task.service';
import { TaskStatusService } from './components/tasks/services/task-status-service/task-status.service';
import { TaskWorkLogService } from './components/tasks/services/task-work-log-service/task-work-log.service';
import { ProjectAssignmentService } from './services/project-assignment-service/project-assignment.service';
import { ProjectCommentService } from './services/project-comment-service/project-comment.service';
import { ProjectService } from './services/project-service/project.service';
import { ProjectStatusService } from './services/project-status-service/project-status.service';
import { ProjectWorkLogService } from './services/project-work-log-service/project-work-log.service';

export { ProjectConfiguration } from './project-configuration';
export { TaskConfiguration } from './components/tasks/task-configuration';

export { ProjectsComponent } from './projects.component';
export { ProjectComponent } from './components/project-component/project.component';
export { TasksComponent } from './components/tasks/tasks.component';
export { TaskComponent } from './components/tasks/components/task-component/task.component';
export { DialogProjectAssignmentComponent } from './components/dialog-project-assignment/dialog-project-assignment.component';
export { DialogTaskAssignmentComponent } from './components/tasks/components/dialog-task-assignment/dialog-task-assignment.component';
export { DialogCreateNewTaskComponent } from './components/tasks/components/dialog-create-new-task/dialog-create-new-task.component';

export { ProjectAssignmentsService } from './components/dialog-project-assignment/services/project-assignments.service';
export { TaskAssignmentsService } from './components/tasks/components/dialog-task-assignment/services/task-assignments.service';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    DialogProjectAssignmentComponent,
    TasksComponent,
    TaskComponent,
    DialogTaskAssignmentComponent,
    DialogCreateNewTaskComponent,
    ManageProjectTaskToolbarComponent,
    ManageProjectTaskActivityComponent,
    ManageProjectTaskDetailsComponent,
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
    AppModulesSharedModule,
    AppSharedModule,
  ],
  entryComponents: [
    DialogProjectAssignmentComponent,
    DialogTaskAssignmentComponent,
    DialogCreateNewTaskComponent
  ],
  providers: [
    ProjectService,
    ProjectAssignmentService,
    ProjectCommentService,
    ProjectStatusService,
    ProjectWorkLogService,
    TaskService,
    TaskAssignmentService,
    TaskCommentService,
    TaskStatusService,
    TaskWorkLogService,
  ],
})
export class AppModulesProjectsModule {}
