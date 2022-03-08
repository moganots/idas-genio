import { Injectable } from '@angular/core';
import { ClientsService } from 'app/modules/clients/services/clients.service';
import { EmployeesService } from 'app/modules/employees/services/employees.service';
import { TaskAssignService } from 'app/modules/projects/components/tasks/services/task-assign-service/task-assign-service';
import { TaskService } from 'app/modules/projects/components/tasks/services/task-service/task.service';
import { ProjectAssignService } from 'app/modules/projects/services/project-assign-service/project-assign.service';
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
  providedIn: `root`,
})
export class ReferenceValueService {
  users: User[] = [];
  constructor(
    public clientsService: ClientsService,
    public employeesService: EmployeesService,
    public projectService: ProjectService,
    public projectAssignService: ProjectAssignService,
    public taskService: TaskService,
    public taskAssignService: TaskAssignService,
    public suppliersService: SuppliersService,
    public userService: UserService
  ) {
    this.userService
      .getAll<User>()
      // .toPromise()
      .subscribe((users) => {
        users.forEach((user) => {
          this.users.push(user);
        });
      });
  }
  setFieldLookupValues(fieldName: string, field: DataColumn) {
    switch (fieldName) {
      case `AssigneeId`:
      case `AttendeeId`:
      case `CreatedBy`:
      case `ModifiedBy`:
      case `UserId`:
      case `Assignee`:
      case `Attendee`:
      case `CreatedBy`:
      case `ModifiedBy`:
      case `User`:
        this.userService.getAll<User>().subscribe((users) => {
          field.lookupValues = users.map((user) => this.mapValuesUser(user));
        });
        break;
      case `Client`:
        this.clientsService.getAll<Client>().subscribe((clients) => {
          field.lookupValues = clients.map((client) =>
            this.mapValuesClient(client)
          );
        });
        break;
      case `EmployeeId`:
      case `ManagerId`:
      case `Employee`:
      case `Manager`:
        this.employeesService.getAll<Employee>().subscribe((employees) => {
          field.lookupValues = employees.map((employee) =>
            this.mapValuesEmployee(employee)
          );
        });
        break;
      case `ChildProjectId`:
      case `ParentProjectId`:
      case `ProjectId`:
      case `SubProjectId`:
      case `ChildProject`:
      case `ParentProject`:
      case `Project`:
      case `SubProject`:
        this.projectService.getAll<Project>().subscribe((projects) => {
          field.lookupValues = projects.map((project) =>
            this.mapValuesProject(project)
          );
        });
        break;
      case `Supplier`:
        this.suppliersService.getAll<Supplier>().subscribe((suppliers) => {
          field.lookupValues = suppliers.map((supplier) =>
            this.mapValuesSupplier(supplier)
          );
        });
        break;
      case `ChildTaskId`:
      case `ParentTaskId`:
      case `SubTaskId`:
      case `TaskId`:
      case `ChildTask`:
      case `ParentTask`:
      case `SubTask`:
      case `Task`:
        this.taskService.getAll<Task>().subscribe((tasks) => {
          field.lookupValues = tasks.map((task) => this.mapValuesTask(task));
        });
        break;
      case `StartDateTime`:
      case `EndDateTime`:
        field.lookupValues = SharedConfiguration.scheduleTimes.map(
          (time, index) => ({
            id: index,
            displayValue: time,
          })
        );
        break;
    }
  }
  mapValuesClient(client: Client): any {
    const name = GeneralUtils.getClientDisplayName(client);
    const user = this.users?.find((usr) => usr?.ClientId === client?._id);
    return {
      id: client?._id,
      displayValue: name,
      title: name,
      tooltip:
        user?.UserType?.Value ||
        user?.UserType?.Value2 ||
        user?.UserType?.Value3,
      cssClassCategory: user?.UserType?.CssClassCategory || `usertype`,
      cssClass: user?.UserType?.CssClass || `client`,
      icon: user?.UserType?.Icon || `reduce_capacity`,
      image: user?.Avatar || `./assets/img/avatars/avatar-0.png`,
    };
  }
  mapValuesEmployee(employee: Employee): any {
    const name = GeneralUtils.getEmployeeDisplayName(employee);
    const user = this.users?.find((usr) => usr?.EmployeeId === employee?._id);
    return {
      id: employee?._id,
      displayValue: name,
      title: name,
      tooltip:
        user?.UserType?.Value ||
        user?.UserType?.Value2 ||
        user?.UserType?.Value3,
      cssClassCategory: user?.UserType?.CssClassCategory || `usertype`,
      cssClass: user?.UserType?.CssClass || `employee`,
      icon: user?.UserType?.Icon || `groups`,
      image: user?.Avatar || `./assets/img/avatars/avatar-0.png`,
    };
  }
  mapValuesProject(project: Project): any {
    const name = `${GeneralUtils.EmptyStringIfNull(project?.Name)}`.trim();
    return {
      id: project?._id,
      displayValue: GeneralUtils.StringJoin([name, project?._id], ` / `),
      title: name,
      tooltip: project?.ProjectType?.Value,
      cssClassCategory: project?.ProjectType?.CssClassCategory,
      cssClass: project?.ProjectType?.CssClass,
      icon: project?.ProjectType?.Icon,
    };
  }
  mapValuesSupplier(supplier: Supplier): any {
    const name = GeneralUtils.getSupplierDisplayName(supplier);
    const user = this.users?.find((usr) => usr?.SupplierId === supplier?._id);
    return {
      id: supplier?._id,
      displayValue: name,
      title: name,
      tooltip:
        user?.UserType?.Value ||
        user?.UserType?.Value2 ||
        user?.UserType?.Value3,
      cssClassCategory: user?.UserType?.CssClassCategory || `usertype`,
      cssClass: user?.UserType?.CssClass || `supplier`,
      icon: user?.UserType?.Icon || `connect_without_contact`,
      image: user?.Avatar || `./assets/img/avatars/avatar-0.png`,
    };
  }
  mapValuesTask(task: Task): any {
    const name = `${GeneralUtils.EmptyStringIfNull(task?.Name)}`.trim();
    return {
      id: task?._id,
      displayValue: GeneralUtils.StringJoin([name, task?._id], ` / `),
      title: name,
      tooltip: task?.TaskType?.Value,
      cssClassCategory: task?.TaskType?.CssClassCategory,
      cssClass: task?.TaskType?.CssClass,
      icon: task?.TaskType?.Icon,
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
      tooltip:
        user?.UserType?.Value ||
        user?.UserType?.Value2 ||
        user?.UserType?.Value3,
      cssClassCategory: user?.UserType?.CssClassCategory,
      cssClass: user?.UserType?.CssClass,
      icon: user?.UserType?.Icon,
      image: user?.Avatar || `./assets/img/avatars/avatar-0.png`,
    };
  }
}
