import { Injectable } from '@angular/core';
import { ClientsService } from 'app/modules/clients/services/clients.service';
import { EmployeesService } from 'app/modules/employees/services/employees.service';
import { ProjectAssignmentsService } from 'app/modules/projects/components/dialog-project-assignment/services/project-assignments.service';
import { TaskAssignmentsService } from 'app/modules/projects/components/tasks/components/dialog-task-assignment/services/task-assignments.service';
import { TaskService } from 'app/modules/projects/components/tasks/services/task-service/task.service';
import { ProjectService } from 'app/modules/projects/services/project-service/project.service';
import { SuppliersService } from 'app/modules/suppliers/services/suppliers.service';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  Client,
  DataColumn,
  Employee,
  GeneralUtils,
  Project,
  SharedConfiguration,
  Supplier,
  Task,
  User,
} from 'app/shared/app-shared.module';

@Injectable({
  providedIn: 'root',
})
export class ReferenceValueService {
  constructor(
    public clientsService: ClientsService,
    public employeesService: EmployeesService,
    public projectService: ProjectService,
    public projectAssignmentsService: ProjectAssignmentsService,
    public taskService: TaskService,
    public taskAssignmentsService: TaskAssignmentsService,
    public suppliersService: SuppliersService,
    public userService: UserService
  ) {}
  setFieldLookupValues(fieldName: string, field: DataColumn) {
    switch (fieldName) {
      case `Assignee`:
      case `PreviousAssignee`:
      case `User`:
        this.userService.getAll<User>().subscribe((users) => {
          this.addFieldLookupValues(
            field,
            users.map((user) => this.mapValuesUser(user))
          );
        });
        break;
      case `Client`:
        this.clientsService.getAll<Client>().subscribe((values) => {
          this.addFieldLookupValues(
            field,
            values.map((value) => this.mapValuesClient(value))
          );
        });
        break;
      case `Employee`:
      case `Manager`:
        this.employeesService.getAll<Employee>().subscribe((values) => {
          this.addFieldLookupValues(
            field,
            values.map((value) => this.mapValuesEmployee(value))
          );
        });
        break;
      case `ChildProject`:
      case `ParentProject`:
      case `Project`:
      case `SubProject`:
        this.projectService.getAll<Project>().subscribe((values) => {
          this.addFieldLookupValues(
            field,
            values.map((value) => this.mapValuesProject(value))
          );
        });
        break;
      case `Supplier`:
        this.suppliersService.getAll<Supplier>().subscribe((values) => {
          this.addFieldLookupValues(
            field,
            values.map((value) => this.mapValuesSupplier(value))
          );
        });
        break;
      case `ChildTask`:
      case `ParentTask`:
      case `SubTask`:
      case `Task`:
        this.taskService.getAll<Task>().subscribe((values) => {
          this.addFieldLookupValues(
            field,
            values.map((value) => this.mapValuesTask(value))
          );
        });
        break;
      case `StartDateTime`:
      case `EndDateTime`:
        this.addFieldLookupValues(
          field,
          SharedConfiguration.scheduleTimes.map((time, index) => ({
            id: index,
            displayValue: time,
          }))
        );
        break;
    }
  }
  mapValuesClient(value: Client): any {
    const name = `${GeneralUtils.EmptyStringIfNull(
      value?.Name
    )} ${GeneralUtils.EmptyStringIfNull(
      value?.Surname || value?.CompanyName
    )}`.trim();
    return {
      id: value?._id,
      displayValue: name,
      title: name,
      cssClassCategory: 'usertype',
      cssClass: 'client',
      // icon: 'reduce_capacity'
    };
  }
  mapValuesEmployee(value: Employee): any {
    const name = `${GeneralUtils.EmptyStringIfNull(
      value?.Name
    )} ${GeneralUtils.EmptyStringIfNull(value?.Surname)}`.trim();
    return {
      id: value?._id,
      displayValue: name,
      title: name,
      cssClassCategory: 'usertype',
      cssClass: 'employee',
      // icon: 'groups'
    };
  }
  mapValuesProject(value: Project): any {
    const name = `${GeneralUtils.EmptyStringIfNull(value?.Name)}`.trim();
    return {
      id: value?._id,
      displayValue: [name, value?._id].filter((val) => !(val === null || val === undefined || String(val).length === 0)).join(` / `),
      title: name,
      cssClassCategory: value?.ProjectType?.CssClassCategory,
      cssClass: value?.ProjectType?.CssClass,
      icon: value?.ProjectType?.Icon,
    };
  }
  mapValuesSupplier(value: Supplier): any {
    const name = `${GeneralUtils.EmptyStringIfNull(
      value?.Name
    )} ${GeneralUtils.EmptyStringIfNull(
      value?.Surname || value?.CompanyName
    )}`.trim();
    return {
      id: value?._id,
      displayValue: name,
      title: name,
      cssClassCategory: 'usertype',
      cssClass: 'supplier',
      // icon: 'connect_without_contact'
    };
  }
  mapValuesTask(value: Task): any {
    const name = `${GeneralUtils.EmptyStringIfNull(value?.Name)}`.trim();
    return {
      id: value?._id,
      displayValue: [name, value?._id].filter((val) => !(val === null || val === undefined || String(val).length === 0)).join(` / `),
      title: name,
      cssClassCategory: value?.TaskType?.CssClassCategory,
      cssClass: value?.TaskType?.CssClass,
      icon: value?.TaskType?.Icon,
    };
  }
  mapValuesUser(user: User): any {
    return {
      id: user?._id,
      displayValue: user?.DisplayName,
      title:
        user?.UserType?.Value ||
        user?.UserType?.Value2 ||
        user?.UserType?.Value3 ||
        ``,
      cssClassCategory: user?.UserType?.CssClassCategory,
      cssClass: user?.UserType?.CssClass,
      icon: user?.UserType?.Icon,
      image: user?.Avatar || './assets/img/avatars/avatar-0.png',
    };
  }
  addFieldLookupValues(field: DataColumn, values: any[] = []) {
    field.lookupValues = [];
    values.forEach((value) => {
      field.lookupValues.push(value);
    });
  }
}
