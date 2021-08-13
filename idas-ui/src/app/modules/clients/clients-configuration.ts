export class ClientsConfiguration {
  public static identifier = 'client';
  public static pageIcon = 'stream';
  public static pageRoute = 'clients';
  public static pageRouteTitle = 'Clients';
  public static pageRouteCssClass = '';
  public static pageTitle = `Manage Clients`;
  public static pageName = `Manage Clients`;
  public static tableHeading = 'Manage Clients';
  public static graphHeading = '';
  public static buildingBlockLabel = '';
  public static dataColumns = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'SalutationId', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'Name', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'Surname', canShow: true, canSort: true, canGroup: false},
    {id: 5, name: 'CompanyName', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'IndustryTypeId', canShow: true, canSort: true, canGroup: false},
    {id: 7, name: 'IdNumber', canShow: false, canSort: true, canGroup: false},
    {id: 8, name: 'RegistrationNumber', canShow: true, canSort: true, canGroup: false},
    {id: 9, name: 'VATNumber', canShow: true, canSort: true, canGroup: false},
    {id: 10, name: 'IsActive', canShow: false, canSort: true, canGroup: false},
    /*
    {id: 11, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 12, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 13, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 14, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
    */
  ];
}
