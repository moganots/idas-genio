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
import { AuthenticationGuardService } from 'app/shared/app-shared.module';
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
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: UserProfileConfiguration.pageRoute,
    pathMatch: 'full',
    component: UserProfileComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: UserNotificationsConfiguration.pageRoute,
    pathMatch: 'full',
    component: UserNotificationsComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: UserInboxConfiguration.pageRoute,
    pathMatch: 'full',
    component: UserInboxComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: CalendarEventConfiguration.pageRoute,
    pathMatch: 'full',
    component: UserMeetingCalendarComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: ProjectConfiguration.pageRoute,
    pathMatch: 'full',
    component: ProjectsComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: ProjectConfiguration.pageRoute.concat('/project/:id'),
    pathMatch: 'full',
    component: ProjectComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: TaskConfiguration.pageRoute,
    pathMatch: 'full',
    component: TasksComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: TaskConfiguration.pageRoute.concat('/task/:id'),
    pathMatch: 'full',
    component: TaskComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: EmployeeConfiguration.pageRoute,
    pathMatch: 'full',
    component: EmployeesComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: EmployeeConfiguration.pageRoute.concat('/employee/:id'),
    pathMatch: 'full',
    component: EmployeeComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: ClientConfiguration.pageRoute,
    pathMatch: 'full',
    component: ClientsComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: ClientConfiguration.pageRoute.concat('/client/:id'),
    pathMatch: 'full',
    component: ClientComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: SupplierConfiguration.pageRoute,
    pathMatch: 'full',
    component: SuppliersComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: SupplierConfiguration.pageRoute.concat('/supplier/:id'),
    pathMatch: 'full',
    component: SupplierComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: UserConfiguration.pageRoute,
    pathMatch: 'full',
    component: UsersComponent,
    // canActivate: [AuthenticationGuardService],
  },
  {
    path: UserConfiguration.pageRoute.concat('/user/:id'),
    pathMatch: 'full',
    component: UserProfileComponent,
    // canActivate: [AuthenticationGuardService],
  },
  /*   {
      path: LogoutConfiguration.pageRoute,
      pathMatch: 'full',
      component: LogoutComponent,
      // canActivate: [AuthenticationGuardService],
    }, */
];
