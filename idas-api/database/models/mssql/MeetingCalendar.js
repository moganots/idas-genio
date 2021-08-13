/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2021-08-04
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[MeetingCalendar] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const MeetingCalendar = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.MeetingTypeId, entity.Title, entity.StartDate, entity.EndDate, entity.IsAllDayEvent, entity.Location, entity.Description, entity.MeetingAttendeeId, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, MeetingTypeId, Title, StartDate, EndDate, IsAllDayEvent, Location, Description, MeetingAttendeeId, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			MeetingTypeId: MeetingTypeId,
			Title: Title,
			StartDate: StartDate,
			EndDate: EndDate,
			IsAllDayEvent: IsAllDayEvent,
			Location: Location,
			Description: Description,
			MeetingAttendeeId: MeetingAttendeeId,
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
module.exports = MeetingCalendar;
