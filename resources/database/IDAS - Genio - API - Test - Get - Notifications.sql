USE [IdasGenioDb]
GO

; WITH
	[schedule] AS (
		SELECT
			'CalendarEvent' AS [Type]
			,[cea].[CalendarEventId]
			,[ce].[CalendarEventTypeId]
			,[cea].[AttendeeId]
			,[ce].[Title]
			,[ce].[IsActive]
		FROM [dbo].[CalendarEvent] AS [ce]
		LEFT JOIN [dbo].[CalendarEventAttendee] AS [cea] ON ([ce].[_id] = [cea].[CalendarEventId])
		LEFT JOIN [dbo].[LookupValue] AS [lv] ON ([ce].[CalendarEventTypeId] = [lv].[_id])
	)
SELECT
	*
FROM [schedule]