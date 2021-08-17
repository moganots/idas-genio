/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2021-08-17
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[UserTransaction] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const UserTransaction = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.TransactionTypeId, entity.EntityId, entity.TransactionPayload, entity.TransactionResult, entity.IsTransactionSuccessful, entity.TransactionMessage, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, TransactionTypeId, EntityId, TransactionPayload, TransactionResult, IsTransactionSuccessful, TransactionMessage, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			TransactionTypeId: TransactionTypeId,
			EntityId: EntityId,
			TransactionPayload: TransactionPayload,
			TransactionResult: TransactionResult,
			IsTransactionSuccessful: IsTransactionSuccessful,
			TransactionMessage: TransactionMessage,
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
module.exports = UserTransaction;
