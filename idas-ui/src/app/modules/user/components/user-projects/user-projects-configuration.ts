export class UserProjectsConfiguration {
  public static identifier = 'project';
  public static pageIcon = 'auto_awesome_motion';
  public static pageRoute = 'project';
  public static pageRouteTitle = 'My Projects';
  public static pageRouteCssClass = '';
  public static pageTitle = `Manage Projects`;
  public static pageName = `Manage Projects`;
  public static tableHeading = 'Manage Projects';
  public static graphHeading = '';
  public static buildingBlockLabel = '';
  public static fieldNames = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'Name', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'Description', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'StartDate', canShow: true, canSort: true, canGroup: false},
    {id: 5, name: 'EndDate', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'MaximumHoursAllocated', canShow: true, canSort: true, canGroup: false},
    {id: 7, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 8, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 9, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 10, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
  ];
}
