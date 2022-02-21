/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-21
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[Task] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const Task = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.ProjectId, entity.Name, entity.Description, entity.TaskTypeId, entity.PriorityId, entity.ParentTaskId, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, ProjectId, Name, Description, TaskTypeId, PriorityId, ParentTaskId, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			ProjectId: ProjectId,
			Name: Name,
			Description: Description,
			TaskTypeId: TaskTypeId,
			PriorityId: PriorityId,
			ParentTaskId: ParentTaskId,
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
module.exports = Task;
