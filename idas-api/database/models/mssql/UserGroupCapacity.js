/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-03-04
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[UserGroupCapacity] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const UserGroupCapacity = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.UserGroupId, entity.CapacityId, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, UserGroupId, CapacityId, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			UserGroupId: UserGroupId,
			CapacityId: CapacityId,
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
module.exports = UserGroupCapacity;
