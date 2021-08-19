/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2021-08-19
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[Project] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const Project = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.Name, entity.Code, entity.Description, entity.ProjectTypeId, entity.PriorityId, entity.StartDate, entity.EndDate, entity.MaximumHoursAllocated, entity.ParentProjectId, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, Name, Code, Description, ProjectTypeId, PriorityId, StartDate, EndDate, MaximumHoursAllocated, ParentProjectId, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			Name: Name,
			Code: Code,
			Description: Description,
			ProjectTypeId: ProjectTypeId,
			PriorityId: PriorityId,
			StartDate: StartDate,
			EndDate: EndDate,
			MaximumHoursAllocated: MaximumHoursAllocated,
			ParentProjectId: ParentProjectId,
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
module.exports = Project;
