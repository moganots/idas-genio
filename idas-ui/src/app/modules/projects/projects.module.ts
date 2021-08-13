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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {TextFieldModule} from '@angular/cdk/text-field';

import { ProjectComponent } from './components/project-component/project.component';
import { TasksService } from './components/tasks/services/tasks.service';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './services/projects.service';
import { SharedModulesModule } from '../_shared/shared-modules.module';
import { DialogProjectAssignmentComponent } from './components/dialog-project-assignment/dialog-project-assignment.component';
import { ProjectAssignmentsService } from './components/dialog-project-assignment/services/project-assignments.service';
import { DialogTaskAssignmentComponent } from './components/tasks/components/dialog-task-assignment/dialog-task-assignment.component';
import { TaskAssignmentsService } from './components/tasks/components/dialog-task-assignment/services/task-assignments.service';
import { TaskComponent } from './components/tasks/components/task-component/task.component';
import { DialogCreateNewTaskComponent } from './components/tasks/components/dialog-create-new-task/dialog-create-new-task.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';

export { ProjectsConfiguration } from './projects-configuration';
export { TasksConfiguration } from './components/tasks/tasks-configuration';

export { ProjectsComponent } from './projects.component';
export { ProjectComponent } from './components/project-component/project.component';
export { TasksComponent } from './components/tasks/tasks.component';
export { TaskComponent } from './components/tasks/components/task-component/task.component';
export { DialogProjectAssignmentComponent } from './components/dialog-project-assignment/dialog-project-assignment.component';
export { DialogTaskAssignmentComponent } from './components/tasks/components/dialog-task-assignment/dialog-task-assignment.component';
export { DialogCreateNewTaskComponent } from './components/tasks/components/dialog-create-new-task/dialog-create-new-task.component';

export { ProjectsService } from './services/projects.service';
export { ProjectAssignmentsService } from './components/dialog-project-assignment/services/project-assignments.service';
export { TasksService } from './components/tasks/services/tasks.service';
export { TaskAssignmentsService } from './components/tasks/components/dialog-task-assignment/services/task-assignments.service';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    TasksComponent,
    DialogProjectAssignmentComponent,
    DialogTaskAssignmentComponent,
    TaskComponent,
    DialogCreateNewTaskComponent
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
    SharedModulesModule,
    SharedModule
  ],
  entryComponents: [
    DialogProjectAssignmentComponent,
    DialogTaskAssignmentComponent
  ],
  providers: [
    ProjectsService, TasksService, ProjectAssignmentsService, TaskAssignmentsService
  ]
})
export class ProjectsModule { }
