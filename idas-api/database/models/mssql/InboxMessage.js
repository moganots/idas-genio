/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-11
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[InboxMessage] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const InboxMessage = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.From, entity.To, entity.Cc, entity.Bcc, entity.Subject, entity.Message, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, From, To, Cc, Bcc, Subject, Message, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			From: From,
			To: To,
			Cc: Cc,
			Bcc: Bcc,
			Subject: Subject,
			Message: Message,
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
module.exports = InboxMessage;
