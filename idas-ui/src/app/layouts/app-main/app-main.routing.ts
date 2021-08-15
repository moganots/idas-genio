import { Routes } from '@angular/router';
import {
  ClientComponent,
  ClientsComponent,
  ClientsConfiguration,
} from 'app/modules/clients/clients.module';
import {
  DashboardComponent,
  DashboardConfiguration,
} from 'app/modules/dashboard/dashboard.module';
import {
  EmployeeComponent,
  EmployeesComponent,
  EmployeesConfiguration,
} from 'app/modules/employees/employees.module';
import {
  ProjectComponent,
  ProjectsComponent,
  ProjectsConfiguration,
  TaskComponent,
  TasksComponent,
  TasksConfiguration,
} from 'app/modules/projects/projects.module';
import {
  SupplierComponent,
  SuppliersComponent,
  SuppliersConfiguration,
} from 'app/modules/suppliers/suppliers.module';
import {
  UserInboxComponent,
  UserInboxConfiguration,
  UserNotificationsComponent,
  UserNotificationsConfiguration,
  UserProfileComponent,
  UserProfileConfiguration,
  UserCalendarEventComponent,
  UserCalendarEventConfiguration,
  UsersComponent,
  UsersConfiguration,
} from 'app/modules/user/users.module';
import { AppLoginConfiguration } from './app-main-login/app-login-configuration';
import { AppMainLoginComponent } from './app-main-login/app-main-login.component';

export const AppMainRoutes: Routes = [
  {
    path: AppLoginConfiguration.pageRoute,
    pathMatch: 'full',
    component: AppMainLoginComponent,
  },
  {
    path: DashboardConfiguration.pageRoute,
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: UserProfileConfiguration.pageRoute,
    pathMatch: 'full',
    component: UserProfileComponent,
  },
  {
    path: UserNotificationsConfiguration.pageRoute,
    pathMatch: 'full',
    component: UserNotificationsComponent,
  },
  {
    path: UserInboxConfiguration.pageRoute,
    pathMatch: 'full',
    component: UserInboxComponent,
  },
  {
    path: UserCalendarEventConfiguration.pageRoute,
    pathMatch: 'full',
    component: UserCalendarEventComponent,
  },
  {
    path: ProjectsConfiguration.pageRoute,
    pathMatch: 'full',
    component: ProjectsComponent,
  },
  {
    path: ProjectsConfiguration.pageRoute.concat('/project/:id'),
    pathMatch: 'full',
    component: ProjectComponent,
  },
  {
    path: TasksConfiguration.pageRoute,
    pathMatch: 'full',
    component: TasksComponent,
  },
  {
    path: TasksConfiguration.pageRoute.concat('/task/:id'),
    pathMatch: 'full',
    component: TaskComponent,
  },
  {
    path: EmployeesConfiguration.pageRoute,
    pathMatch: 'full',
    component: EmployeesComponent,
  },
  {
    path: EmployeesConfiguration.pageRoute.concat('/employee/:id'),
    pathMatch: 'full',
    component: EmployeeComponent,
  },
  {
    path: ClientsConfiguration.pageRoute,
    pathMatch: 'full',
    component: ClientsComponent,
  },
  {
    path: ClientsConfiguration.pageRoute.concat('/client/:id'),
    pathMatch: 'full',
    component: ClientComponent,
  },
  {
    path: SuppliersConfiguration.pageRoute,
    pathMatch: 'full',
    component: SuppliersComponent,
  },
  {
    path: SuppliersConfiguration.pageRoute.concat('/supplier/:id'),
    pathMatch: 'full',
    component: SupplierComponent,
  },
  {
    path: UsersConfiguration.pageRoute,
    pathMatch: 'full',
    component: UsersComponent,
  },
  {
    path: UsersConfiguration.pageRoute.concat('/user/:id'),
    pathMatch: 'full',
    component: UserProfileComponent,
  },
];
