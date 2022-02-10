import { DataColumn } from 'app/shared/app-shared.module';

export class ProjectWorkLogConfiguration {
  public static identifier = 'project-work-log';
  public static pageIcon = 'pending_actions';
  public static pageRoute = 'projects/project/:projectId/work-logs';
  public static pageRouteTitle = 'My Project Work Log(s)';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Project Work Log(s)`;
  public static pageName = `Manage Project Work Log(s)`;
  public static tableHeading = 'Manage Project Work Log(s)';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `ProjectId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `TimeSpent` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `DateStarted` , canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `DateCompleted` , canShow: true, canSort: true, canGroup: false},
    {id: 6, name: `Description` , canShow: true, canSort: true, canGroup: false},
    {id: 7, name: `HoursWorked` , canShow: true, canSort: true, canGroup: false},
    {id: 8, name: `IsActive` , canShow: false, canSort: true, canGroup: false},
    {id: 9, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 10, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 11, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 12, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
