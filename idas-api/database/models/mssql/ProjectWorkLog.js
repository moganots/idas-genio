/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-10
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[ProjectWorkLog] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const ProjectWorkLog = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.ProjectId, entity.DateStarted, entity.DateCompleted, entity.Description, entity.HoursWorked, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, ProjectId, DateStarted, DateCompleted, Description, HoursWorked, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			ProjectId: ProjectId,
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
module.exports = ProjectWorkLog;
