/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2021-07-27
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[Schedule] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const Schedule = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.ScheduleTypeId, entity.Title, entity.StartDate, entity.StartTime, entity.EndDate, entity.EndTime, entity.IsAllDayEvent, entity.Location, entity.Description, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, ScheduleTypeId, Title, StartDate, StartTime, EndDate, EndTime, IsAllDayEvent, Location, Description, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			ScheduleTypeId: ScheduleTypeId,
			Title: Title,
			StartDate: StartDate,
			StartTime: StartTime,
			EndDate: EndDate,
			EndTime: EndTime,
			IsAllDayEvent: IsAllDayEvent,
			Location: Location,
			Description: Description,
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
module.exports = Schedule;
