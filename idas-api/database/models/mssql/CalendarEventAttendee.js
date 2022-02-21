/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-21
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[CalendarEventAttendee] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const CalendarEventAttendee = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.CalendarEventId, entity.AttendeeId, entity.IsAccepted, entity.IsTentative, entity.IsDeclined, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, CalendarEventId, AttendeeId, IsAccepted, IsTentative, IsDeclined, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			CalendarEventId: CalendarEventId,
			AttendeeId: AttendeeId,
			IsAccepted: IsAccepted,
			IsTentative: IsTentative,
			IsDeclined: IsDeclined,
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
module.exports = CalendarEventAttendee;
