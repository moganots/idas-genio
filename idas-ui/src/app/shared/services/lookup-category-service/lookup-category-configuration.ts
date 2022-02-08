import { DataColumn } from 'app/shared/domain-models/data-column';

export class LookupCategoryConfiguration {
  public static identifier = 'lookup-category';
  public static pageIcon = 'manage_accounts';
  public static pageRoute = 'lookup-category';
  public static pageRouteTitle = 'Lookup Categories';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Lookup Categories`;
  public static pageName = `Manage Lookup Categories`;
  public static tableHeading = 'Manage Lookup Categories';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'Code', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'Name', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'Description', canShow: false, canSort: true, canGroup: false},
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
