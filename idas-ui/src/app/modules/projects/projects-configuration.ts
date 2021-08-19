export class ProjectsConfiguration {
  public static identifier = 'project';
  public static pageIcon = 'auto_awesome_motion';
  public static pageRoute = 'projects';
  public static pageRouteTitle = 'My Projects';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Projects`;
  public static pageName = `Manage Projects`;
  public static tableHeading = 'Manage Projects';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'Code', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'Name', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'Description', canShow: false, canSort: true, canGroup: false},
    {id: 5, name: 'ProjectTypeId', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'PriorityId', canShow: true, canSort: true, canGroup: false},
    {id: 7, name: 'StartDate', canShow: true, canSort: true, canGroup: false},
    {id: 8, name: 'EndDate', canShow: true, canSort: true, canGroup: false},
    {id: 9, name: 'MaximumHoursAllocated', canShow: true, canSort: true, canGroup: false},
    {id: 10, name: 'StatusId', canShow: true, canSort: true, canGroup: false},
    {id: 11, name: 'IsActive', canShow: false, canSort: true, canGroup: false},
    /*
    {id: 12, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 13, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 14, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 15, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
    */
  ];
}
