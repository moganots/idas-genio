/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2021-08-19
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[EntityChangeHistory] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const EntityChangeHistory = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.Operation, entity.EntityName, entity.id, entity.CurrentValue, entity.PreviousValue, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, Operation, EntityName, id, CurrentValue, PreviousValue, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			Operation: Operation,
			EntityName: EntityName,
			id: id,
			CurrentValue: CurrentValue,
			PreviousValue: PreviousValue,
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
module.exports = EntityChangeHistory;
