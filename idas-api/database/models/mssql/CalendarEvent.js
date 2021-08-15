/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2021-08-15
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[CalendarEvent] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const CalendarEvent = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.CalendarEventTypeId, entity.Title, entity.StartDate, entity.EndDate, entity.IsAllDayEvent, entity.Location, entity.Description, entity.EventAttendeeId, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, CalendarEventTypeId, Title, StartDate, EndDate, IsAllDayEvent, Location, Description, EventAttendeeId, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			CalendarEventTypeId: CalendarEventTypeId,
			Title: Title,
			StartDate: StartDate,
			EndDate: EndDate,
			IsAllDayEvent: IsAllDayEvent,
			Location: Location,
			Description: Description,
			EventAttendeeId: EventAttendeeId,
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
module.exports = CalendarEvent;
