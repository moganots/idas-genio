export class ModulesSharedConfiguration {
  public static ignoreColumns = [`UserId`];
  public static cannotEditColumns = [
    `_id`,
    `EmployeeNumber`,
    `DateTerminated`,
    `BirthDate`,
    `Gender`,
    `GenderId`,
    `IsTerminated`,
    `MaximumHoursAllocated`,
    `UserId`,
    `DateLastLoggedIn`,
    `CreatedBy`,
    `DateCreated`,
    `ModifiedBy`,
    `DateModified`];
  public static optionalColumns = [`VATNumber`, `IsAdmin`, `IsLocked`, `IsActive`];
}
