;WITH [dates] AS (
	SELECT	1 AS [Number], 
			DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) - 0, 0) AS [StartDate], 
			DATEADD(DAY, -1, DATEADD(M, DATEDIFF(MONTH, 0, GETDATE()) + 1, 0)) AS [EndDate]
	UNION ALL
	SELECT	[Number] + 1 AS [Number], 
			DATEADD(MONTH, (RAND(12) * -1), [StartDate]) AS [StartDate], 
			DATEADD(MONTH, (RAND(12) * -1), [EndDate]) AS [EndDate]
	FROM [dates]
	WHERE [Number] < 300
)
SELECT
	*
FROM [dates]



/*
SELECT DISTINCT
	[CalendarEventTypeId]
	,[Title]
	,[Description]
	,[Location]
	,[IsAllDayEvent]
	,[StartDate]
	,[EndDate]
	,[EventAttendeeId]
	,[CreatedBy]
FROM (
	SELECT
		[CalendarEventTypeId]
		,CONCAT([CalendarEventType], ' Meeting') AS [Title]
		,CONCAT([CalendarEventType], ' Meeting') AS [Description]
		,'Teams Meeting' AS [Location]
		,1 AS [IsAllDayEvent]
		,CONCAT(CONVERT(VARCHAR, [StartDate], 23), ' ', (RIGHT('00' + CAST(ROUND(RAND() * 8, 0) AS VARCHAR(2)), 2) + ':' + RIGHT('00' + CAST(ROUND(RAND() * 31, 0) AS VARCHAR(2)), 2))) AS [StartDate]
		,CONCAT(CONVERT(VARCHAR, [EndDate], 23), ' ', (RIGHT('00' + CAST(ROUND(RAND() * 8, 0) AS VARCHAR(2)), 2) + ':' + RIGHT('00' + CAST(ROUND(RAND() * 31, 0) AS VARCHAR(2)), 2))) AS [EndDate]
		,[u].[_id] AS [EventAttendeeId]
		,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
	FROM [cte]
	CROSS JOIN (
		SELECT
			[lv].[_id] AS [CalendarEventTypeId]
			,[lv].[Value] AS [CalendarEventType]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'CalendarEventType')
	) AS [mtg]
	LEFT JOIN [dbo].[User] AS [u] ON  (
		-- Action Review
		([mtg].[CalendarEventType] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Board
		OR ([mtg].[CalendarEventType] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
		-- Broadcast
		-- Community of Practice
		-- Consultation
		OR ([mtg].[CalendarEventType] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Decision Making
		-- Governance
		OR ([mtg].[CalendarEventType] IN ('Governance') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		-- Idea Generation
		OR ([mtg].[CalendarEventType] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Interview
		OR ([mtg].[CalendarEventType] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'good.job@genio.idas.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		-- Introductions
		OR ([mtg].[CalendarEventType] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za', 'info@closecorporation.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za', 'info@privatecompany.co.za', 'info@thandindabaattorneys.co.za'))
		-- Issue Resolution
		OR ([mtg].[CalendarEventType] IN ('Issue Resolution') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@thandindabaattorneys.co.za'))
		-- One-on-One
		OR ([mtg].[CalendarEventType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za'))
		-- Planning
		OR ([mtg].[CalendarEventType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Problem Solving
		-- Progress Check
		OR ([mtg].[CalendarEventType] IN ('Governance') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		-- Sensemaking
		-- Site Visit
		-- Team Cadence
		OR ([mtg].[CalendarEventType] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[CalendarEventType] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Training
		-- Workshop
		OR ([mtg].[CalendarEventType] IN ('Workshop') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	)
) AS [Meetings]
*/