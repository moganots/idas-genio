/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2021-08-17
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[EntityUserGroupCapacity] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const EntityUserGroupCapacity = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.EntityId, entity.UserGroupId, entity.CanCreate, entity.CanView, entity.CanEdit, entity.CanDelete, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, EntityId, UserGroupId, CanCreate, CanView, CanEdit, CanDelete, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			EntityId: EntityId,
			UserGroupId: UserGroupId,
			CanCreate: CanCreate,
			CanView: CanView,
			CanEdit: CanEdit,
			CanDelete: CanDelete,
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
module.exports = EntityUserGroupCapacity;
