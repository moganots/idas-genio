/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-21
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[ProjectWorklog] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const ProjectWorklog = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.ProjectId, entity.TimeSpent, entity.DateStarted, entity.DateCompleted, entity.Comment, entity.HoursWorked, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, ProjectId, TimeSpent, DateStarted, DateCompleted, Comment, HoursWorked, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			ProjectId: ProjectId,
			TimeSpent: TimeSpent,
			DateStarted: DateStarted,
			DateCompleted: DateCompleted,
			Comment: Comment,
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
module.exports = ProjectWorklog;
