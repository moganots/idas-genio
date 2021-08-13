;WITH [cte] AS (
	SELECT	1 AS [Number], 
			DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) - 0, 0) AS [StartDate], 
			DATEADD(DAY, -1, DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) + 1, 0)) AS [EndDate]
	UNION ALL
	SELECT	[Number] + 1 AS [Number], 
			DATEADD(MONTH, -1, [StartDate]) AS [StartDate], 
			DATEADD(MONTH, -1, [EndDate]) AS [EndDate]
	FROM [cte]
	WHERE [Number] < 12
)
SELECT DISTINCT
	[MeetingTypeId]
	,[Title]
	,[Description]
	,[Location]
	,[IsAllDayEvent]
	,[StartDate]
	,[EndDate]
	,[MeetingAttendeeId]
	,[CreatedBy]
FROM (
	SELECT
		[MeetingTypeId]
		,CONCAT([MeetingType], ' Meeting') AS [Title]
		,CONCAT([MeetingType], ' Meeting') AS [Description]
		,'Teams Meeting' AS [Location]
		,1 AS [IsAllDayEvent]
		,CONCAT(CONVERT(VARCHAR, [StartDate], 23), ' ', (RIGHT('00' + CAST(ROUND(RAND() * 8, 0) AS VARCHAR(2)), 2) + ':' + RIGHT('00' + CAST(ROUND(RAND() * 31, 0) AS VARCHAR(2)), 2))) AS [StartDate]
		,CONCAT(CONVERT(VARCHAR, [EndDate], 23), ' ', (RIGHT('00' + CAST(ROUND(RAND() * 8, 0) AS VARCHAR(2)), 2) + ':' + RIGHT('00' + CAST(ROUND(RAND() * 31, 0) AS VARCHAR(2)), 2))) AS [EndDate]
		,[u].[_id] AS [MeetingAttendeeId]
		,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
	FROM [cte]
	CROSS JOIN (
		SELECT
			[lv].[_id] AS [MeetingTypeId]
			,[lv].[Value] AS [MeetingType]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'MeetingType')
	) AS [mtg]
	LEFT JOIN [dbo].[User] AS [u] ON  (
		-- Action Review
		([mtg].[MeetingType] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([mtg].[MeetingType] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[MeetingType] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([mtg].[MeetingType] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[MeetingType] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Board
		OR ([mtg].[MeetingType] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
		OR ([mtg].[MeetingType] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
		OR ([mtg].[MeetingType] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
		-- Broadcast
		-- Community of Practice
		-- Consultation
		OR ([mtg].[MeetingType] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([mtg].[MeetingType] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[MeetingType] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([mtg].[MeetingType] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[MeetingType] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Decision Making
		-- Governance
		OR ([mtg].[MeetingType] IN ('Governance') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		-- Idea Generation
		OR ([mtg].[MeetingType] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([mtg].[MeetingType] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[MeetingType] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([mtg].[MeetingType] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[MeetingType] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Interview
		OR ([mtg].[MeetingType] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za'))
		OR ([mtg].[MeetingType] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'good.job@genio.idas.co.za'))
		OR ([mtg].[MeetingType] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		-- Introductions
		OR ([mtg].[MeetingType] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([mtg].[MeetingType] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([mtg].[MeetingType] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([mtg].[MeetingType] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za', 'info@closecorporation.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([mtg].[MeetingType] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za', 'info@privatecompany.co.za', 'info@thandindabaattorneys.co.za'))
		-- Issue Resolution
		OR ([mtg].[MeetingType] IN ('Issue Resolution') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@thandindabaattorneys.co.za'))
		-- One-on-One
		OR ([mtg].[MeetingType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za'))
		-- Planning
		OR ([mtg].[MeetingType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([mtg].[MeetingType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[MeetingType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([mtg].[MeetingType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[MeetingType] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Problem Solving
		-- Progress Check
		OR ([mtg].[MeetingType] IN ('Governance') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		-- Sensemaking
		-- Site Visit
		-- Team Cadence
		OR ([mtg].[MeetingType] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([mtg].[MeetingType] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[MeetingType] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([mtg].[MeetingType] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([mtg].[MeetingType] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Training
		-- Workshop
		OR ([mtg].[MeetingType] IN ('Workshop') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	)
) AS [Meetings]
WHERE
	([MeetingAttendeeId] IS NOT NULL);