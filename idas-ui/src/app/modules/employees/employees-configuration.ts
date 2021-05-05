export class EmployeesConfiguration {
  public static identifier = 'employee';
  public static pageIcon = 'groups';
  public static pageRoute = 'employee';
  public static pageRouteTitle = 'My Employees';
  public static pageRouteCssClass = '';
  public static pageTitle = `Manage Employees`;
  public static pageName = `Manage Employees`;
  public static tableHeading = 'Manage Employees';
  public static graphHeading = '';
  public static buildingBlockLabel = '';
  public static fieldNames = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'SalutationId', canShow: false, canSort: true, canGroup: false},
    {id: 3, name: 'Name', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'MiddleName', canShow: false, canSort: true, canGroup: false},
    {id: 5, name: 'Surname', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'EmployeeNumber', canShow: true, canSort: true, canGroup: false},
    {id: 7, name: 'IdNumber', canShow: false, canSort: true, canGroup: false},
    {id: 8, name: 'BirthDate', canShow: false, canSort: true, canGroup: false},
    {id: 9, name: 'GenderId', canShow: false, canSort: true, canGroup: false},
    {id: 10, name: 'EmploymentTypeId', canShow: true, canSort: true, canGroup: false},
    {id: 11, name: 'PositionId', canShow: true, canSort: true, canGroup: false},
    {id: 12, name: 'DepartmentId', canShow: false, canSort: true, canGroup: false},
    {id: 13, name: 'ManagerId', canShow: false, canSort: true, canGroup: false},
    {id: 14, name: 'DateHired', canShow: false, canSort: true, canGroup: false},
    {id: 15, name: 'IsTerminated', canShow: true, canSort: true, canGroup: false},
    {id: 16, name: 'DateTerminated', canShow: false, canSort: true, canGroup: false},
    {id: 17, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 18, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 19, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 20, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
  ];
}
