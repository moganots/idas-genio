import { environment } from 'environments/environment';
export class SharedConfiguration {
  public static baseApi = environment.baseApi;
  public static companyName = environment.companyName;
  public static applicationName = environment.applicationName;
  public static encryptionKey = environment.encryptionKey;
  public static encryptionSaltCount = environment.encryptionSaltCount;
  public static userLocalStorageName = 'idas-genio-user';
  public static fileExtensions = [
    `.3g2`,
    `.3gp`,
    `.7z`,
    `.7zip`,
    `.aac`,
    `.abw`,
    `.ae`,
    `.ai`,
    `.apk`,
    `.arc`,
    `.au`,
    `.avi`,
    `.azw`,
    `.bin`,
    `.bmp`,
    `.br`,
    `.bz`,
    `.bz2`,
    `.cda`,
    `.csh`,
    `.css`,
    `.csv`,
    `.dbf`,
    `.doc`,
    `.docx`,
    `.dw`,
    `.dwg`,
    `.email`,
    `.eml`,
    `.eot`,
    `.eps`,
    `.epub`,
    `.exe`,
    `.file`,
    `.fl`,
    `.fla`,
    `.fw`,
    `.gif`,
    `.gz`,
    `.htm`,
    `.html`,
    `.ico`,
    `.ics`,
    `.il`,
    `.iso`,
    `.jar`,
    `.java`,
    `.jpeg`,
    `.jpg`,
    `.js`,
    `.json`,
    `.jsonld`,
    `.ld`,
    `.mid`,
    `.midi`,
    `.mjs`,
    `.mp3`,
    `.mp4`,
    `.mpeg`,
    `.mpkg`,
    `.msg`,
    `.msi`,
    `.odp`,
    `.ods`,
    `.odt`,
    `.oga`,
    `.ogv`,
    `.ogx`,
    `.opus`,
    `.otf`,
    `.pdf`,
    `.php`,
    `.pl`,
    `.png`,
    `.ppt`,
    `.pptx`,
    `.pr`,
    `.ps`,
    `.psd`,
    `.pub`,
    `.rar`,
    `.rtf`,
    `.search`,
    `.sh`,
    `.svg`,
    `.swf`,
    `.tar`,
    `.tif`,
    `.tiff`,
    `.ts`,
    `.ttf`,
    `.txt`,
    `.vsd`,
    `.wav`,
    `.weba`,
    `.webm`,
    `.webp`,
    `.woff`,
    `.woff2`,
    `.word`,
    `.xhtml`,
    `.xls`,
    `.xlsx`,
    `.xml`,
    `.xul`,
    `.zar`,
    `.zip`,
  ];
  public static uriFileAttachment = `#/secure/attachments`;
  public static ignoreColumns = [`UserId`];
  public static cannotEditColumns = [
    `_id`,
    `BirthDate`,
    `EmployeeNumber`,
    `DateTerminated`,
    `GenderId`,
    `IsTerminated`,
    `MaximumHoursAllocated`,
    `UserId`,
    `EmployeeClientSupplierId`,
    `DateLastLoggedIn`,
    `CreatedBy`,
    `DateCreated`,
    `ModifiedBy`,
    `DateModified`,
    // `StatusId`,
    `SessionToken`,
    `ParentTaskId`,
  ];
  public static optionalColumns = [
    `VATNumber`,
    `IsAdmin`,
    `IsLocked`,
    `IsActive`,
  ];
  public static checkboxColumns = [
    `CanCreate`,
    `CanDelete`,
    `CanEdit`,
    `CanView`,
    `IsActive`,
    `IsAdmin`,
    `IsAllDayEvent`,
    `IsLocked`,
    `IsTerminated`,
    `IsTransactionSuccessful`,
    `UseEmailAddress`,
    `UseHomeTelephoneNumber`,
    `UseMobileTelephoneNumber`,
    `UseOfficeTelephoneNumber`,
    `UsePostalAddress`,
  ];
  public static dateColumns = [
    `BirthDate`,
    `DateCreated`,
    `DateHired`,
    `DateLastLoggedIn`,
    `DateModified`,
    `DateTerminated`,
    `EndDate`,
    `StartDate`,
  ];
  public static timeColumns = [
    `StartTime`,
    `StartDateTime`,
    `EndTime`,
    `EndDateTime`,
  ];
  public static numberColumns = [
    `AccountNumber`,
    `Amount`,
    `EmployeeClientSupplierId`,
    `HomeTelephoneNumber`,
    `HoursWorked`,
    `IdNumber`,
    `MaximumHoursAllocated`,
    `MobileTelephoneNumber`,
    `OfficeTelephoneNumber`,
    `PostalCode`,
    `VATNumber`,
  ];
  public static maskedColumns = [`Password`, `ConfirmPassword`];
  public static textAreaColumns = [`Description`, `Summary`, `Message`];
  public static useBreakNewlineSectionColumns = [`Break`, `Newline`, `Section`];
  public static referenceValueColumns = [
    `AssigneeId`,
    `ClientId`,
    `EmployeeId`,
    `EntityId`,
    `LookupCategoryId`,
    `ManagerId`,
    `MenuItemId`,
    `ProjectId`,
    `SupplierId`,
    `TaskId`,
    `UserGroupId`,
    `UserId`,
    `EventAttendeeId`,
    `ParentProjectId`,
    `ParentTaskId`,
    `CreatedBy`,
    `ModifiedBy`,
    `SentBy`,
    `LoggedBy`,
  ];
  public static lookupValueColumns = [
    `BankId`,
    `BudgetCodeId`,
    `CalendarEventTypeId`,
    `CapacityId`,
    `ConfigurationTypeId`,
    `CountryId`,
    `DepartmentId`,
    `EmploymentTypeId`,
    `GenderId`,
    `GroupId`,
    `IndustryTypeId`,
    `PositionId`,
    `PreferredLanguageId`,
    `PriorityId`,
    `ProjectAssignmentTypeId`,
    `ProjectTypeId`,
    `ProvinceId`,
    `SalutationId`,
    `StatusId`,
    `TaskTypeId`,
    `TransactionTypeId`,
    `UserLockReasonId`,
    `UserTypeId`,
    `WageTypeId`,
  ];
  public static useIconColumns = [
    `GenderId`,
    `GroupId`,
    `PriorityId`,
    `ProjectTypeId`,
    `StatusId`,
    `TaskTypeId`,
    `UserTypeId`,
  ];
  public static useImageColumns = [`BankId`, `Avatar`];
  public static selectControlTypeNames = [`lookupValue`, `referenceValue`];
  public static scheduleTimes = [
    `00:00`,
    `00:30`,
    `01:00`,
    `01:30`,
    `02:00`,
    `02:30`,
    `03:00`,
    `03:30`,
    `04:00`,
    `04:30`,
    `05:00`,
    `05:30`,
    `06:00`,
    `06:30`,
    `07:00`,
    `07:30`,
    `08:00`,
    `08:30`,
    `09:00`,
    `09:30`,
    `10:00`,
    `10:30`,
    `11:00`,
    `11:30`,
    `12:00`,
    `12:30`,
    `13:00`,
    `13:30`,
    `14:00`,
    `14:30`,
    `15:00`,
    `15:30`,
    `16:00`,
    `16:30`,
    `17:00`,
    `17:30`,
    `18:00`,
    `18:30`,
    `19:00`,
    `19:30`,
    `20:00`,
    `20:30`,
    `21:00`,
    `21:30`,
    `22:00`,
    `22:30`,
    `23:00`,
    `23:30`,
  ];
  public static timePeriods = [`Year`, `Month`, `Day`, `Week`, `Hour`, `Minute`, `Second`];
}
