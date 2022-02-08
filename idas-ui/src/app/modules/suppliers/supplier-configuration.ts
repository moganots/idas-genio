import { DataColumn } from 'app/shared/app-shared.module';

export class SupplierConfiguration {
  public static identifier = 'supplier';
  public static pageIcon = 'reduce_capacity';
  public static pageRoute = 'suppliers';
  public static pageRouteTitle = 'Suppliers';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Suppliers`;
  public static pageName = `Manage Suppliers`;
  public static tableHeading = 'Manage Suppliers';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    { id: 1, name: '_id', canShow: false, canSort: true, canGroup: false },
    {
      id: 2,
      name: 'SalutationId',
      canShow: true,
      canSort: true,
      canGroup: false,
    },
    { id: 3, name: 'Name', canShow: true, canSort: true, canGroup: false },
    { id: 4, name: 'Surname', canShow: true, canSort: true, canGroup: false },
    {
      id: 5,
      name: 'CompanyName',
      canShow: true,
      canSort: true,
      canGroup: false,
    },
    {
      id: 6,
      name: 'IndustryTypeId',
      canShow: true,
      canSort: true,
      canGroup: false,
    },
    { id: 7, name: 'IdNumber', canShow: false, canSort: true, canGroup: false },
    {
      id: 8,
      name: 'RegistrationNumber',
      canShow: true,
      canSort: true,
      canGroup: false,
    },
    { id: 9, name: 'VATNumber', canShow: true, canSort: true, canGroup: false },
    { id: 10, name: 'BankId', canShow: true, canSort: true, canGroup: false },
    {
      id: 11,
      name: 'AccountNumber',
      canShow: true,
      canSort: true,
      canGroup: false,
    },
    {
      id: 12,
      name: 'IsActive',
      canShow: false,
      canSort: true,
      canGroup: false,
    },
    /*
    {id: 13, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 14, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 15, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 16, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
    */
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
