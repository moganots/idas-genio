import { DataColumn } from 'app/shared/app-shared.module';

export class UserProfileConfiguration {
  public static identifier = 'user-profile';
  public static pageIcon = 'manage_accounts';
  public static pageRoute = 'profile';
  public static pageRouteTitle = 'My Profile';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Profile`;
  public static pageName = `Manage Profile`;
  public static tableHeading = 'Manage Profile';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static defaultAvatar = `assets/img/avatars/avatar-0.png`;
  public static dataColumns = [
    // Fields : Personal Details
    {id: 1, name: 'SalutationId', canShow: true, canSort: true, canGroup: false},
    {id: 2, name: 'Name', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'GenderId', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'MiddleName', canShow: true, canSort: true, canGroup: false},
    {id: 5, name: 'EmploymentTypeId', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'Surname', canShow: true, canSort: true, canGroup: false},
    {id: 7, name: 'PositionId', canShow: true, canSort: true, canGroup: false},
    {id: 8, name: 'CompanyName', canShow: true, canSort: true, canGroup: false},
    {id: 9, name: 'DepartmentId', canShow: true, canSort: true, canGroup: false},
    {id: 10, name: 'IdNumber', canShow: true, canSort: true, canGroup: false},
    {id: 11, name: 'IndustryTypeId', canShow: true, canSort: true, canGroup: false},
    {id: 12, name: 'BirthDate', canShow: true, canSort: true, canGroup: false},
    {id: 13, name: 'ManagerId', canShow: true, canSort: true, canGroup: false},
    {id: 14, name: 'EmployeeNumber', canShow: true, canSort: true, canGroup: false},
    {id: 15, name: 'BankId', canShow: true, canSort: true, canGroup: false},
    {id: 16, name: 'RegistrationNumber', canShow: true, canSort: true, canGroup: false},
    {id: 17, name: 'DateHired', canShow: true, canSort: true, canGroup: false},
    {id: 18, name: 'VATNumber', canShow: true, canSort: true, canGroup: false},
    {id: 19, name: 'IsTerminated', canShow: true, canSort: true, canGroup: false},
    {id: 20, name: 'AccountNumber', canShow: true, canSort: true, canGroup: false},
    {id: 21, name: 'DateTerminated', canShow: true, canSort: true, canGroup: false},

    // Fields : Contact Details
    {id: 22, name: 'RecipientsName', canShow: true, canSort: true, canGroup: false},
    {id: 23, name: 'EmailAddress', canShow: true, canSort: true, canGroup: false},
    {id: 24, name: 'HomeTelephoneNumber', canShow: true, canSort: true, canGroup: false},
    {id: 25, name: 'OfficeTelephoneNumber', canShow: true, canSort: true, canGroup: false},
    {id: 26, name: 'MobileTelephoneNumber', canShow: true, canSort: true, canGroup: false},
    {id: 27, name: 'PreferredLanguageId', canShow: true, canSort: true, canGroup: false},
    {id: 28, name: 'Website', canShow: true, canSort: true, canGroup: false},
    {id: 29, name: 'Break', canShow: true, canSort: true, canGroup: false},
    {id: 30, name: 'AddressLine1', canShow: true, canSort: true, canGroup: false},
    {id: 31, name: 'AddressLine2', canShow: true, canSort: true, canGroup: false},
    {id: 32, name: 'City', canShow: true, canSort: true, canGroup: false},
    {id: 33, name: 'ProvinceId', canShow: true, canSort: true, canGroup: false},
    {id: 34, name: 'PostalCode', canShow: true, canSort: true, canGroup: false},
    {id: 35, name: 'CountryId', canShow: true, canSort: true, canGroup: false},
    {id: 36, name: 'UseEmailAddress', canShow: true, canSort: true, canGroup: false},
    {id: 37, name: 'UseHomeTelephoneNumber', canShow: true, canSort: true, canGroup: false},
    {id: 38, name: 'UseMobileTelephoneNumber', canShow: true, canSort: true, canGroup: false},
    {id: 39, name: 'UseOfficeTelephoneNumber', canShow: true, canSort: true, canGroup: false},
    {id: 40, name: 'UsePostalAddress', canShow: true, canSort: true, canGroup: false},

    // Fields : User Account
    {id: 41, name: 'Avatar', canShow: true, canSort: true, canGroup: false},
    {id: 42, name: 'Break', canShow: true, canSort: true, canGroup: false},
    {id: 43, name: 'UserTypeId', canShow: true, canSort: true, canGroup: false},
    {id: 44, name: 'Break', canShow: true, canSort: true, canGroup: false},
    {id: 46, name: 'Password', canShow: true, canSort: true, canGroup: false},
    {id: 47, name: 'ConfirmPassword', canShow: true, canSort: true, canGroup: false},
    {id: 48, name: 'IsAdmin', canShow: false, canSort: true, canGroup: false},
    {id: 49, name: 'IsLocked', canShow: true, canSort: true, canGroup: false},
    {id: 50, name: 'DateLastLoggedIn', canShow: true, canSort: true, canGroup: false}
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
