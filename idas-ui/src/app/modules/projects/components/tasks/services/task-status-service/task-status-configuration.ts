import { DataColumn } from 'app/shared/app-shared.module';

export class TaskStatusConfiguration {
  public static identifier = 'task-status';
  public static pageIcon = 'tune';
  public static pageRoute = 'tasks/task/:taskId/statuses';
  public static pageRouteTitle = 'My Task Status(es)';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Task Status(es)`;
  public static pageName = `Manage Task Status(es)`;
  public static tableHeading = 'Manage Task Status(es)';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `TaskId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `StatusId` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `IsActive` , canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 6, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 7, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 8, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
