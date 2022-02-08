import { DataColumn } from 'app/shared/app-shared.module';

export class ProjectCloneCopyConfiguration {
  public static identifier = 'project';
  public static pageIcon = 'launch';
  public static pageRoute = 'projects';
  public static pageRouteTitle = 'My Projects';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Projects`;
  public static pageName = `Manage Projects`;
  public static tableHeading = 'Manage Projects';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `Name` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `Code` , canShow: false, canSort: true, canGroup: false},
    {id: 4, name: `Description` , canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `ProjectTypeId` , canShow: true, canSort: true, canGroup: false},
    {id: 6, name: `PriorityId` , canShow: true, canSort: true, canGroup: false},
    {id: 7, name: `StartDate` , canShow: true, canSort: true, canGroup: false},
    {id: 8, name: `EndDate` , canShow: true, canSort: true, canGroup: false},
    {id: 9, name: `MaximumHoursAllocated` , canShow: true, canSort: true, canGroup: false},
    {id: 10, name: `ParentProjectId` , canShow: true, canSort: true, canGroup: false},
    {id: 11, name: `StatusId` , canShow: true, canSort: true, canGroup: false},
    {id: 12, name: `IsActive` , canShow: true, canSort: true, canGroup: false},
    {id: 13, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 14, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 15, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 16, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
