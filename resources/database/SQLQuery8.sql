USE [IdasGenioDb];
GO

;WITH [dateVars] AS (
	SELECT
		DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) - 1, 0) AS [FirstDayOfPreviousYear]
		,DATEADD(dd, -1, DATEADD(yy, DATEDIFF(yy, 0, GETDATE()), 0)) AS [LastDayOfPreviousYear]
		,DATEADD(mm, DATEDIFF(mm, 0, GETDATE()) - 1, 0) AS [FirstDayOfPreviousMonth]
		,DATEADD(DAY, -(DAY(GETDATE())), GETDATE()) AS [LastDayOfPreviousMonth]
		,DATEADD(qq, DATEDIFF(qq, 0, GETDATE()) - 1, 0) AS [FirstDayOfPreviousQuarter]
		,DATEADD(dd, -1, DATEADD(qq, DATEDIFF(qq, 0, GETDATE()), 0)) AS [LastDayOfPreviousQuarter]
		,DATEADD(wk, -1, DATEADD(DAY, 1-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [FirstDayOfPreviousWeek]
		,DATEADD(wk, 0, DATEADD(DAY, 0-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [LastDayOfPreviousWeek]
		,DATEADD(DAY, DATEDIFF(DAY,0,GETDATE()),0) AS [Today]
		,DATEADD(yy, DATEDIFF(yy, 0, GETDATE()), 0) AS [FirstDayOfCurrentYear]
		,DATEADD(dd, -1, DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) + 1, 0)) AS [LastDayOfCurrentYear]
		,DATEADD(mm, DATEDIFF(mm, 0, GETDATE()), 0) AS [FirstDayOfCurrentMonth]
		,DATEADD(dd, -1, DATEADD(mm, DATEDIFF(mm, 0, GETDATE()) + 1, 0)) AS [LastDayOfCurrentMonth]
		,DATEADD(qq, DATEDIFF(qq, 0, GETDATE()), 0) AS [FirstDayOfCurrentQuarter]
		,DATEADD(dd, -1, DATEADD(qq, DATEDIFF(qq, 0, GETDATE()) + 1, 0)) AS [LastDayOfCurrentQuarter]
		,DATEADD(wk, 0, DATEADD(DAY, 1-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [FirstDayOfCurrentWeek]
		,DATEADD(wk, 1, DATEADD(DAY, 0-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [LastDayOfCurrentWeek]
		,DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) + 1, 0) AS [FirstDayOfNextYear]
		,DATEADD (dd, -1, DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) +2, 0)) AS [LastDayOfNextYear]
		,DATEADD(mm, DATEDIFF(mm, 0, GETDATE()) + 1, 0) AS [FirstDayOfNextMonth]
		,DATEADD(dd, -1, DATEADD(mm, DATEDIFF(mm, 0, GETDATE()) + 2, 0)) AS [LastDayOfNextMonth]
		,DATEADD(qq, DATEDIFF(qq, 0, GETDATE()) + 1, 0) AS [FirstDayOfNextQuarter]
		,DATEADD(dd, -1, DATEADD(qq, DATEDIFF(qq, 0, GETDATE()) +2, 0)) AS [LastDayOfNextQuarter]
		,DATEADD(wk, 1, DATEADD(DAY, 1-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [FirstDayOfNextWeek]
		,DATEADD(wk, 2, DATEADD(DAY, 0-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [LastDayOfNextWeek]
)
, [daysIn] AS (
	SELECT
		DATEDIFF(DAY, [FirstDayOfPreviousYear], [LastDayOfPreviousYear]) AS [DaysInPreviousYear]
		,DATEDIFF(DAY, [FirstDayOfPreviousMonth], [LastDayOfPreviousMonth]) AS [DaysInPreviousMonth]
		,DATEDIFF(DAY, [FirstDayOfPreviousQuarter], [LastDayOfPreviousQuarter]) AS [DaysInPreviousQuarter]
		,DATEDIFF(DAY, [FirstDayOfPreviousWeek], [LastDayOfPreviousWeek]) AS [DaysInPreviousWeek]
		,DATEDIFF(DAY, [FirstDayOfCurrentYear], [LastDayOfCurrentYear]) AS [DaysInCurrentYear]
		,DATEDIFF(DAY, [FirstDayOfCurrentMonth], [LastDayOfCurrentMonth]) AS [DaysInCurrentMonth]
		,DATEDIFF(DAY, [FirstDayOfCurrentQuarter], [LastDayOfCurrentQuarter]) AS [DaysInCurrentQuarter]
		,DATEDIFF(DAY, [FirstDayOfCurrentWeek], [LastDayOfCurrentWeek]) AS [DaysInCurrentWeek]
		,DATEDIFF(DAY, [FirstDayOfNextYear], [LastDayOfNextYear]) AS [DaysInNextYear]
		,DATEDIFF(DAY, [FirstDayOfNextMonth], [LastDayOfNextMonth]) AS [DaysInNextMonth]
		,DATEDIFF(DAY, [FirstDayOfNextQuarter], [LastDayOfNextQuarter]) AS [DaysInNextQuarter]
		,DATEDIFF(DAY, [FirstDayOfNextWeek], [LastDayOfNextWeek]) AS [DaysInNextWeek]
	FROM [dateVars]
)
, [times] AS (
	SELECT DATEADD(DAY, 0, DATEDIFF(DAY, 0, GETDATE())) [date]
	UNION ALL
	SELECT
		DATEADD(MINUTE, 30, [date]) AS [date]
	FROM [times]
	WHERE
		([date] < DATEADD(DAY, 1, GETDATE()))
)
, [timesFormatted] AS (
	SELECT DISTINCT CONVERT(VARCHAR(12), [date], 108) AS [time] FROM [times]
)
SELECT
	*
FROM [timesFormatted]

DECLARE @DateStart DATETIME = DATEADD(YEAR, DATEDIFF(YEAR, 0, GETDATE()), 0);
;WITH [days] AS (
	SELECT 0 AS [Day]
	UNION ALL
	SELECT ([Day] + 1) AS [Day] FROM [Days] WHERE ([Day] <= 364)
)
, [dates] AS (
	SELECT
		ROW_NUMBER() OVER (PARTITION BY [days].[Day] ORDER BY (SELECT NULL)) AS [RowNum]
		,DATEADD(DAY, [Day], @DateStart) AS [StartDate]
		,DATEADD(DAY, [Day], @DateStart + 1) AS [EndDate]
	FROM [days]
)
, [times] AS (
	SELECT 0 AS [Hour], 30 AS [Minute]
	UNION ALL
	SELECT
		([Hour] + 1) AS [Hour]
		,[Minute]
	FROM [times]
	WHERE
		([Hour] <= 22)
)
, [dateTimes] AS (
	SELECT
		DATEADD(HOUR, [Hour], DATEADD(MINUTE, [Minute], [StartDate])) AS [StartDate]
		,DATEADD(HOUR, [Hour], DATEADD(MINUTE, [Minute], [EndDate])) AS [EndDate]
	FROM [dates], [times]
)
SELECT
	[CalendarEventTypeId]
	,CONCAT([CalendarEventType], ' Meeting') AS [Title]
	,CONCAT([CalendarEventType], ' Meeting') AS [Description]
	,'Teams Meeting' AS [Location]
	,1 AS [IsAllDayEvent]
	,[StartDate]
	,[EndDate]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [dateTimes]
CROSS JOIN (
	SELECT
		[lv].[_id] AS [CalendarEventTypeId]
		,[lv].[Value] AS [CalendarEventType]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'CalendarEventType')
) AS [mtg]
OPTION (MAXRECURSION 3660);