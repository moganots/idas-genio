/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-03-04
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[ProjectReview] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const ProjectReview = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.ProjectId, entity.Review, entity.Approved, entity.Rejected, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, ProjectId, Review, Approved, Rejected, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			ProjectId: ProjectId,
			Review: Review,
			Approved: Approved,
			Rejected: Rejected,
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
module.exports = ProjectReview;
