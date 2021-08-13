DECLARE @TestProject1DateCreated DATETIME = (DATEADD(MONTH, -4, GETDATE()))
DECLARE @TestProject2DateCreated DATETIME = (DATEADD(MONTH, -2, '3 MAY 2021 23:09:44'))
DECLARE @TestProject3DateCreated DATETIME = (DATEADD(MONTH, -1, '23 JANUARY 2021 08:59:59'))

SELECT
	[p].[_id] AS [ProjectId]
	,[sts].[StatusId]
	,CASE
		WHEN [p].[Name] IN ('Test Project 1') AND [sts].[Value] IN ('Created', 'Not Started')
			THEN @TestProject1DateCreated
		WHEN [p].[Name] IN ('Test Project 2') AND [sts].[Value] IN ('Created', 'Not Started')
			THEN @TestProject2DateCreated
		WHEN [p].[Name] IN ('Test Project 3') AND [sts].[Value] IN ('Created', 'Not Started')
			THEN @TestProject3DateCreated
		WHEN [p].[Name] IN ('Test Project 1') AND [sts].[Value] IN ('Started')
			THEN (DATEADD(DAY, 3, @TestProject1DateCreated))
		WHEN [p].[Name] IN ('Test Project 2') AND [sts].[Value] IN ('Started')
			THEN (DATEADD(HOUR, 23, @TestProject2DateCreated))
		WHEN [p].[Name] IN ('Test Project 3') AND [sts].[Value] IN ('Started')
			THEN (DATEADD(WEEK, 10, @TestProject3DateCreated))
		WHEN [p].[Name] IN ('Test Project 2') AND [sts].[Value] IN ('On Hold')
			THEN (DATEADD(DAY, 12, (DATEADD(HOUR, 23, @TestProject2DateCreated))))
		WHEN [p].[Name] IN ('Test Project 2') AND [sts].[Value] IN ('De-scoped')
			THEN (DATEADD(MONTH, 2, (DATEADD(DAY, 8, (DATEADD(HOUR, 23, @TestProject2DateCreated))))))
		WHEN [p].[Name] IN ('Test Project 3') AND [sts].[Value] IN ('Cancelled')
			THEN (DATEADD(MONTH, 1, (DATEADD(WEEK, 10, @TestProject3DateCreated))))
		WHEN [p].[Name] IN ('Test Project 1') AND [sts].[Value] IN ('In Progress')
			THEN (DATEADD(DAY, 1, (DATEADD(DAY, 3, @TestProject1DateCreated))))
		WHEN [p].[Name] IN ('Test Project 1') AND [sts].[Value] IN ('Completed')
			THEN (DATEADD(MONTH, 5, (DATEADD(DAY, 1, (DATEADD(DAY, 3, @TestProject1DateCreated))))))
		WHEN [p].[Name] IN ('Test Project 1') AND [sts].[Value] IN ('Blocked')
			THEN (DATEADD(WEEK, 2, (DATEADD(MONTH, 5, (DATEADD(DAY, 1, (DATEADD(DAY, 3, @TestProject1DateCreated))))))))
		WHEN [p].[Name] IN ('Test Project 1') AND [sts].[Value] IN ('Re-started')
			THEN (DATEADD(WEEK, 6, (DATEADD(WEEK, 2, (DATEADD(MONTH, 5, (DATEADD(DAY, 1, (DATEADD(DAY, 3, @TestProject1DateCreated))))))))))
		WHEN [p].[Name] IN ('Test Project 1') AND [sts].[Value] IN ('Done')
			THEN (DATEADD(MONTH, 2, (DATEADD(WEEK, 6, (DATEADD(WEEK, 2, (DATEADD(MONTH, 5, (DATEADD(DAY, 1, (DATEADD(DAY, 3, @TestProject1DateCreated))))))))))))
	END AS [DateCreated]
FROM [dbo].[Project] AS [p]
LEFT JOIN (
	SELECT
		[lv].[_id] AS [StatusId]
		,[lv].[Value]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'Status')
) AS [sts] ON (
	(
		([p].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
		AND ([sts].[Value] IN ('Created', 'Not Started', 'Started'))
	)
	OR (
		([p].[Name] IN ('Test Project 2'))
		AND ([sts].[Value] IN ('On Hold'))
	)
	OR (
		([p].[Name] IN ('Test Project 3'))
		AND ([sts].[Value] IN ('Cancelled'))
	)
	OR (
		([p].[Name] IN ('Test Project 2'))
		AND ([sts].[Value] IN ('De-scoped'))
	)
	OR (
		([p].[Name] IN ('Test Project 1'))
		AND ([sts].[Value] IN ('In Progress'))
	)
	OR (
		([p].[Name] IN ('Test Project 1'))
		AND ([sts].[Value] IN ('Completed'))
	)
	OR (
		([p].[Name] IN ('Test Project 1'))
		AND ([sts].[Value] IN ('Blocked'))
	)
	OR (
		([p].[Name] IN ('Test Project 1'))
		AND ([sts].[Value] IN ('Re-started'))
	)
	OR (
		([p].[Name] IN ('Test Project 1'))
		AND ([sts].[Value] IN ('Done'))
	)
)