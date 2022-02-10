/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-09
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[TaskWorkLog] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const TaskWorkLog = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.TaskId, entity.DateStarted, entity.DateCompleted, entity.Description, entity.HoursWorked, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, TaskId, DateStarted, DateCompleted, Description, HoursWorked, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			TaskId: TaskId,
			DateStarted: DateStarted,
			DateCompleted: DateCompleted,
			Description: Description,
			HoursWorked: HoursWorked,
			IsActive: IsActive,
			CreatedBy: CreatedBy,
			DateCreated: DateCreated,
			ModifiedBy: ModifiedBy,
			DateModified: DateModified,
		}
	}
	return {
		fromEntity: fromEntity,
		fromComponents: fromComponents
	}
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| module.exports
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
module.exports = TaskWorkLog;
