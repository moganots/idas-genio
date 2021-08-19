USE [IdasGenioDb];
GO

;WITH [dateVars] AS (
	SELECT
		DATEADD(yy, DATEDIFF(yy, 0, GETDATE()), 0) AS [FirstDayOfCurrentYear]
		,DATEADD(dd, -1, DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) + 1, 0)) AS [LastDayOfCurrentYear]
)
, [daysIn] AS (
	SELECT
		DATEDIFF(DAY, [FirstDayOfCurrentYear], [LastDayOfCurrentYear]) AS [Days]
	FROM [dateVars]
)
, [dates] AS (
	SELECT
		1 AS [DayAdd]
		,(RAND(CHECKSUM(NEWID())) * [Days] + [FirstDayOfCurrentYear]) AS [StartDate]
		,(RAND(CHECKSUM(NEWID())) * [Days] + [FirstDayOfCurrentYear]) AS [EndDate]
	FROM [dateVars], [daysIn]
	UNION ALL
	SELECT
		([DayAdd] + 1) AS [DayAdd]
		,(RAND(CHECKSUM(NEWID())) * [DayAdd] + [StartDate]) AS [StartDate]
		,(RAND(CHECKSUM(NEWID())) * [DayAdd] + [StartDate]) AS [EndDate]
	FROM [dateVars], [daysIn], [dates]
	WHERE
		([StartDate] <= DATEADD(DAY, 200, [LastDayOfCurrentYear]))
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
FROM (
	SELECT
		CASE WHEN [EndDate] > [StartDate] THEN [StartDate] ELSE [EndDate] END [StartDate]
		,CASE WHEN [StartDate] > [EndDate] THEN [StartDate] ELSE [EndDate] END [EndDate]
	FROM [dates]
) AS [dates]
CROSS JOIN (
	SELECT
		[lv].[_id] AS [CalendarEventTypeId]
		,[lv].[Value] AS [CalendarEventType]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'CalendarEventType')
) AS [mtg]
OPTION (MAXRECURSION 9999);


