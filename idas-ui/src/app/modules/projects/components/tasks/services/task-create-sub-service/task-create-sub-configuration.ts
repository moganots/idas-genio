import { DataColumn } from 'app/shared/app-shared.module';

export class TaskCreateSubConfiguration
{
  public static identifier = 'task';
  public static pageIcon = 'dns';
  public static pageRoute = 'tasks';
  public static pageRouteTitle = 'Task / Create Sub';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Task / Create Sub`;
  public static pageName = `Task / Create Sub`;
  public static tableHeading = 'Task / Create Sub';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `ProjectId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `Name` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `Description` , canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `TaskTypeId` , canShow: true, canSort: true, canGroup: false},
    {id: 6, name: `PriorityId` , canShow: true, canSort: true, canGroup: false},
    {id: 7, name: `ParentTaskId` , canShow: true, canSort: true, canGroup: false},
    {id: 8, name: `AssigneeId` , canShow: true, canSort: true, canGroup: false},
    {id: 9, name: `StatusId` , canShow: true, canSort: true, canGroup: false},
    {id: 10, name: `IsActive` , canShow: true, canSort: true, canGroup: false},
    {id: 11, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 12, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 13, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 14, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
