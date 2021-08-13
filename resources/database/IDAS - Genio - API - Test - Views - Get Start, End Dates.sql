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
	[ScheduleTypeId]
	,[Title]
	,[Description]
	,[Location]
	,[IsAllDayEvent]
	,[StartDate]
	,[StartTime]
	,[EndDate]
	,[EndTime]
	,[CreatedBy]
FROM (
	SELECT
		[ScheduleTypeId]
		,([UserType] + ' ' + [ScheduleType]) AS [Title]
		,([UserType] + ' ' + [ScheduleType]) AS [Description]
		,'Teams Meeting' AS [Location]
		,1 AS [IsAllDayEvent]
		,[StartDate]
		,(RIGHT('00' + CAST(ROUND(RAND() * 10, 0) AS VARCHAR(2)), 2) + ':' + RIGHT('00' + CAST(ROUND(RAND() * 31, 0) AS VARCHAR(2)), 2)) AS [StartTime]
		,[EndDate]
		,(RIGHT('00' + CAST(ROUND(RAND() * 11, 0) AS VARCHAR(2)), 2) + ':' + RIGHT('00' + CAST(ROUND(RAND() * 31, 0) AS VARCHAR(2)), 2)) AS [EndTime]
		,[schBy].[UserId] AS [CreatedBy]
	FROM [cte]
	CROSS JOIN (SELECT [lv].[_id] AS [ScheduleTypeId], [lv].[Value] AS [ScheduleType] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND ([lc].[Name] = 'ScheduleType')) AS [sch]
	LEFT JOIN (
		SELECT
			[_id] AS [UserId]
			,[EmailAddress]
			,[UserType]
		FROM [dbo].[User] AS [u]
		JOIN (SELECT [lv].[_id] AS [UserTypeId], [lv].[Value] AS [UserType] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND ([lc].[Name] = 'UserType') AND ([lv].[Value] IN ('Employee', 'Client', 'Supplier'))) AS [ut] ON ([u].[UserTypeId] = [ut].[UserTypeId])
	) AS [schBy] ON (
		(([schBy].[EmailAddress] IN ('jane.doe@genio.idas.co.za')) AND (DATEPART(MONTH,[StartDate]) IN (7)))
		OR (([schBy].[EmailAddress] IN ('jane.doe@genio.idas.co.za')) AND ([ScheduleType] IN ('Meeting')) AND (DATEPART(MONTH,[StartDate]) IN (1)))
		OR (([schBy].[EmailAddress] IN ('jane.doe@genio.idas.co.za')) AND ([ScheduleType] IN ('Appointment')) AND (DATEPART(MONTH,[StartDate]) IN (10)))
		OR (([schBy].[EmailAddress] IN ('jane.doe@genio.idas.co.za')) AND ([ScheduleType] IN ('Appointment')) AND (DATEPART(MONTH,[EndDate]) IN (2)))
		OR (([schBy].[EmailAddress] IN ('jane.doe@genio.idas.co.za')) AND ([ScheduleType] IN ('Meeting')) AND (DATEPART(MONTH,[EndDate]) IN (2)))
	
		OR (([schBy].[EmailAddress] IN ('john.doe@genio.idas.co.za')) AND (DATEPART(MONTH,[StartDate]) IN (6)))
		OR (([schBy].[EmailAddress] IN ('john.doe@genio.idas.co.za')) AND ([ScheduleType] IN ('Meeting')) AND (DATEPART(MONTH,[StartDate]) IN (3)))
		OR (([schBy].[EmailAddress] IN ('john.doe@genio.idas.co.za')) AND ([ScheduleType] IN ('Appointment')) AND (DATEPART(MONTH,[StartDate]) IN (7)))
		OR (([schBy].[EmailAddress] IN ('john.doe@genio.idas.co.za')) AND ([ScheduleType] IN ('Appointment')) AND (DATEPART(MONTH,[EndDate]) IN (9)))
		OR (([schBy].[EmailAddress] IN ('john.doe@genio.idas.co.za')) AND ([ScheduleType] IN ('Meeting')) AND (DATEPART(MONTH,[StartDate]) IN (2)))

		OR (([schBy].[EmailAddress] IN ('info@closecorporation.co.za')) AND ([ScheduleType] IN ('Appointment', 'Meeting')) AND (DATEPART(MONTH,[StartDate]) IN (1, 2, 9, 12, 11)))

		OR (([schBy].[EmailAddress] IN ('info@thandindabaattorneys.co.za')) AND ([ScheduleType] IN ('Meeting')) AND (DATEPART(MONTH,[StartDate]) IN (2, 8, 9, 10, 11)))
	)
) AS [schedule]
WHERE
	([CreatedBy] IS NOT NULL);