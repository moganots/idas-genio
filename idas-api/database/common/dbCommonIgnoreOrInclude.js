/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - Database common ignore or include utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Function(s)
|------------------------------------------------------------------------------------------------------------------
 */
const onIgnoreDefaultParameterNames = () => {
  return [`uid`];
};
const onInsertIgnoreColumnNames = () => {
  return [
    `_id`,
    `BirthDate`,
    `GenderId`,
    `EmployeeNumber`,
    `IsTerminated`,
    `DateTerminated`,
    `MaximumHoursAllocated`,
    `HoursWorked`,
    `IsActive`,
    `DateLastLoggedIn`,
    `DateCreated`,
    `ModifiedBy`,
    `DateModified`,
  ];
};
const onUpdateIgnoreColumnNames = () => {
  return [
    `MaximumHoursAllocated`,
    `HoursWorked`,
    `CreatedBy`,
    `DateCreated`,
    `DateModified`,
  ];
};
const onDeleteIncludeColumnNames = () => {
  return [`_id`, `IsActive`, `ModifiedBy`, `DateModified`];
};

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = {
  onIgnoreDefaultParameterNames: onIgnoreDefaultParameterNames,
  onInsertIgnoreColumnNames: onInsertIgnoreColumnNames,
  onUpdateIgnoreColumnNames: onUpdateIgnoreColumnNames,
  onDeleteIncludeColumnNames: onDeleteIncludeColumnNames,
};
