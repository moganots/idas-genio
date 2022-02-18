import { DataColumn } from 'app/shared/app-shared.module';

export class ContactDetailConfiguration {
  public static identifier = 'contact-detail';
  public static pageIcon = 'switch_account';
  public static pageRoute = 'profile';
  public static pageRouteTitle = 'My Profile';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Profile`;
  public static pageName = `Manage Profile`;
  public static tableHeading = 'Manage Profile';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `EmployeeId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `ClientId` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `SupplierId` , canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `RecipientsName` , canShow: true, canSort: true, canGroup: false},
    {id: 6, name: `EmailAddress` , canShow: true, canSort: true, canGroup: false},
    {id: 7, name: `HomeTelephoneNumber` , canShow: true, canSort: true, canGroup: false},
    {id: 8, name: `OfficeTelephoneNumber` , canShow: true, canSort: true, canGroup: false},
    {id: 9, name: `MobileTelephoneNumber` , canShow: true, canSort: true, canGroup: false},
    {id: 10, name: `Website` , canShow: true, canSort: true, canGroup: false},
    {id: 11, name: `AddressLine1` , canShow: true, canSort: true, canGroup: false},
    {id: 12, name: `AddressLine2` , canShow: true, canSort: true, canGroup: false},
    {id: 13, name: `City` , canShow: true, canSort: true, canGroup: false},
    {id: 14, name: `ProvinceId` , canShow: true, canSort: true, canGroup: false},
    {id: 15, name: `PostalCode` , canShow: true, canSort: true, canGroup: false},
    {id: 16, name: `CountryId` , canShow: true, canSort: true, canGroup: false},
    {id: 17, name: `PreferredLanguageId` , canShow: true, canSort: true, canGroup: false},
    {id: 18, name: `UseEmailAddress` , canShow: true, canSort: true, canGroup: false},
    {id: 19, name: `UseHomeTelephoneNumber` , canShow: true, canSort: true, canGroup: false},
    {id: 20, name: `UseOfficeTelephoneNumber` , canShow: true, canSort: true, canGroup: false},
    {id: 21, name: `UseMobileTelephoneNumber` , canShow: true, canSort: true, canGroup: false},
    {id: 22, name: `UsePostalAddress` , canShow: true, canSort: true, canGroup: false},
    {id: 23, name: `IsActive` , canShow: false, canSort: true, canGroup: false},
    {id: 24, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 25, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 26, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 27, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
