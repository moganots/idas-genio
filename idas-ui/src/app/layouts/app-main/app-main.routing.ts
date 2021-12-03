import { Routes } from '@angular/router';
import {
  ClientComponent,
  ClientsComponent,
  ClientConfiguration,
} from 'app/modules/clients/app-modules-clients.module';
import {
  DashboardComponent,
  DashboardConfiguration,
} from 'app/modules/dashboard/app-modules-dashboard.module';
import {
  EmployeeComponent,
  EmployeesComponent,
  EmployeeConfiguration,
} from 'app/modules/employees/app-modules-employees.module';
import {
  ProjectComponent,
  ProjectsComponent,
  ProjectConfiguration,
  TaskComponent,
  TasksComponent,
  TaskConfiguration,
} from 'app/modules/projects/app-modules-projects.module';
import {
  SupplierComponent,
  SuppliersComponent,
  SupplierConfiguration,
} from 'app/modules/suppliers/app-modules-suppliers.module';
import {
  UserInboxComponent,
  UserInboxConfiguration,
  UserNotificationsComponent,
  UserNotificationsConfiguration,
  UserProfileComponent,
  UserProfileConfiguration,
  UserMeetingCalendarComponent,
  CalendarEventConfiguration,
  UsersComponent,
  UserConfiguration,
} from 'app/modules/user/app-modules-users.module';
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
    path: CalendarEventConfiguration.pageRoute,
    pathMatch: 'full',
    component: UserMeetingCalendarComponent,
  },
  {
    path: ProjectConfiguration.pageRoute,
    pathMatch: 'full',
    component: ProjectsComponent,
  },
  {
    path: ProjectConfiguration.pageRoute.concat('/project/:id'),
    pathMatch: 'full',
    component: ProjectComponent,
  },
  {
    path: TaskConfiguration.pageRoute,
    pathMatch: 'full',
    component: TasksComponent,
  },
  {
    path: TaskConfiguration.pageRoute.concat('/task/:id'),
    pathMatch: 'full',
    component: TaskComponent,
  },
  {
    path: EmployeeConfiguration.pageRoute,
    pathMatch: 'full',
    component: EmployeesComponent,
  },
  {
    path: EmployeeConfiguration.pageRoute.concat('/employee/:id'),
    pathMatch: 'full',
    component: EmployeeComponent,
  },
  {
    path: ClientConfiguration.pageRoute,
    pathMatch: 'full',
    component: ClientsComponent,
  },
  {
    path: ClientConfiguration.pageRoute.concat('/client/:id'),
    pathMatch: 'full',
    component: ClientComponent,
  },
  {
    path: SupplierConfiguration.pageRoute,
    pathMatch: 'full',
    component: SuppliersComponent,
  },
  {
    path: SupplierConfiguration.pageRoute.concat('/supplier/:id'),
    pathMatch: 'full',
    component: SupplierComponent,
  },
  {
    path: UserConfiguration.pageRoute,
    pathMatch: 'full',
    component: UsersComponent,
  },
  {
    path: UserConfiguration.pageRoute.concat('/user/:id'),
    pathMatch: 'full',
    component: UserProfileComponent,
  },
];
