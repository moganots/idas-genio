import { DataColumn } from 'app/shared/app-shared.module';

export class ProjectAssignConfiguration {
  public static identifier = 'project-assignment';
  public static pageIcon = 'assignment';
  public static pageRoute = 'project-assignment';
  public static pageRouteTitle = 'Project Assignment(s)';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Project Assignment(s)`;
  public static pageName = `Manage Project Assignment(s)`;
  public static tableHeading = 'Manage Project Assignment(s)';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'ProjectAssignmentTypeId', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'AssigneeId', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'HoursWorked', canShow: false, canSort: true, canGroup: false},
    {id: 5, name: 'IsActive', canShow: false, canSort: true, canGroup: false},
    /*
    {id: 6, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 7, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 8, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 9, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
    */
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
