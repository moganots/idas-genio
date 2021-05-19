import { ClientsConfiguration } from 'app/modules/clients/clients-configuration';
import { DashboardConfiguration } from 'app/modules/dashboard/dashboard-configuration';
import { EmployeesConfiguration } from 'app/modules/employees/employees-configuration';
import { SuppliersConfiguration } from 'app/modules/suppliers/suppliers-configuration';
import { UsersConfiguration } from 'app/modules/user/users-configuration';
import {
  UserProfileConfiguration,
  UserNotificationsConfiguration,
  UserInboxConfiguration,
  UserScheduleConfiguration,
  UserProjectsConfiguration,
  UserTasksConfiguration} from 'app/modules/user/users.module';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const AppComponentsRoutes: RouteInfo[] = [
  // tslint:disable-next-line:max-line-length
  { path: DashboardConfiguration.pageRoute, title: DashboardConfiguration.pageRouteTitle, icon: DashboardConfiguration.pageIcon, class: DashboardConfiguration.pageRouteCssClass  },
  // tslint:disable-next-line:max-line-length
  { path: UserProfileConfiguration.pageRoute, title: UserProfileConfiguration.pageRouteTitle, icon: UserProfileConfiguration.pageIcon, class: UserProfileConfiguration.pageRouteCssClass  },
  // tslint:disable-next-line:max-line-length
  // { path: UserNotificationsConfiguration.pageRoute, title: UserNotificationsConfiguration.pageRouteTitle, icon: UserNotificationsConfiguration.pageIcon, class: UserNotificationsConfiguration.pageRouteCssClass  },
  // tslint:disable-next-line:max-line-length
  { path: UserInboxConfiguration.pageRoute, title: UserInboxConfiguration.pageRouteTitle, icon: UserInboxConfiguration.pageIcon, class: UserInboxConfiguration.pageRouteCssClass  },
  // tslint:disable-next-line:max-line-length
  { path: UserScheduleConfiguration.pageRoute, title: UserScheduleConfiguration.pageRouteTitle, icon: UserScheduleConfiguration.pageIcon, class: UserScheduleConfiguration.pageRouteCssClass  },
  // tslint:disable-next-line:max-line-length
  { path: UserProjectsConfiguration.pageRoute, title: UserProjectsConfiguration.pageRouteTitle, icon: UserProjectsConfiguration.pageIcon, class: UserProjectsConfiguration.pageRouteCssClass  },
  // tslint:disable-next-line:max-line-length
  { path: UserTasksConfiguration.pageRoute, title: UserTasksConfiguration.pageRouteTitle, icon: UserTasksConfiguration.pageIcon, class: UserTasksConfiguration.pageRouteCssClass  },
  // tslint:disable-next-line:max-line-length
  { path: EmployeesConfiguration.pageRoute, title: EmployeesConfiguration.pageRouteTitle, icon: EmployeesConfiguration.pageIcon, class: EmployeesConfiguration.pageRouteCssClass  },
  // tslint:disable-next-line:max-line-length
  { path: ClientsConfiguration.pageRoute, title: ClientsConfiguration.pageRouteTitle, icon: ClientsConfiguration.pageIcon, class: ClientsConfiguration.pageRouteCssClass  },
  // tslint:disable-next-line:max-line-length
  { path: SuppliersConfiguration.pageRoute, title: SuppliersConfiguration.pageRouteTitle, icon: SuppliersConfiguration.pageIcon, class: SuppliersConfiguration.pageRouteCssClass  },
  // tslint:disable-next-line:max-line-length
  { path: UsersConfiguration.pageRoute, title: UsersConfiguration.pageRouteTitle, icon: UsersConfiguration.pageIcon, class: UsersConfiguration.pageRouteCssClass  },
];
