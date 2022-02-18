/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-18
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[LookupValue] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const LookupValue = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.LookupCategoryId, entity.Value, entity.Value2, entity.Value3, entity.Image, entity.Icon, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, LookupCategoryId, Value, Value2, Value3, Image, Icon, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			LookupCategoryId: LookupCategoryId,
			Value: Value,
			Value2: Value2,
			Value3: Value3,
			Image: Image,
			Icon: Icon,
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
module.exports = LookupValue;
