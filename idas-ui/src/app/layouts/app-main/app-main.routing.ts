import { Routes } from '@angular/router';
import { ClientsComponent, ClientsConfiguration } from 'app/modules/clients/clients.module';
import { DashboardComponent, DashboardConfiguration } from 'app/modules/dashboard/dashboard.module';
import { EmployeesComponent, EmployeesConfiguration } from 'app/modules/employees/employees.module';
import { SuppliersComponent, SuppliersConfiguration } from 'app/modules/suppliers/suppliers.module';
import {
  UserProfileComponent,
  UserNotificationsComponent,
  UserInboxComponent,
  UserScheduleComponent,
  UserProjectsComponent,
  UsersComponent,
  UserTasksComponent,
  UserInboxConfiguration,
  UserNotificationsConfiguration,
  UserProfileConfiguration,
  UserProjectsConfiguration,
  UserScheduleConfiguration,
  UsersConfiguration,
  UserTasksConfiguration} from 'app/modules/user/users.module';
export const AppMainRoutes : Routes  = [
  // tslint:disable-next-line:max-line-length
  { path: DashboardConfiguration.pageRoute,        component: DashboardComponent },
  // tslint:disable-next-line:max-line-length
  { path: UserProfileConfiguration.pageRoute,        component: UserProfileComponent },
  // tslint:disable-next-line:max-line-length
  { path: UserNotificationsConfiguration.pageRoute,        component: UserNotificationsComponent },
  // tslint:disable-next-line:max-line-length
  { path: UserInboxConfiguration.pageRoute,        component: UserInboxComponent },
  // tslint:disable-next-line:max-line-length
  { path: UserScheduleConfiguration.pageRoute,        component: UserScheduleComponent },
  // tslint:disable-next-line:max-line-length
  { path: UserProjectsConfiguration.pageRoute,        component: UserProjectsComponent },
  // tslint:disable-next-line:max-line-length
  { path: UserTasksConfiguration.pageRoute,        component: UserTasksComponent },
  // tslint:disable-next-line:max-line-length
  { path: EmployeesConfiguration.pageRoute,        component: EmployeesComponent },
  // tslint:disable-next-line:max-line-length
  { path: ClientsConfiguration.pageRoute,        component: ClientsComponent },
  // tslint:disable-next-line:max-line-length
  { path: SuppliersConfiguration.pageRoute,        component: SuppliersComponent },
  // tslint:disable-next-line:max-line-length
  { path: UsersConfiguration.pageRoute,        component: UsersComponent },
];
