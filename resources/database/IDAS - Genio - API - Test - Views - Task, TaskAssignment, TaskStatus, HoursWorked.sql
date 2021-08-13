USE [IdasGenioDb];

WITH [cte] AS (
	SELECT
		[tsk].[ProjectId]
		,[tsk].[_id] AS [TaskId]
		,[ta].[AssigneeId]
		,[ta].[DateCreated] AS [TADateCreated]
		,[sts].[StatusId]
		,[sts].[StatusName]
		,[tsksts].[DateCreated] AS [STSDateCreated]
	FROM [dbo].[Task] AS [tsk]
	LEFT JOIN [dbo].[TaskAssignment] AS [ta] ON ([tsk].[_id] = [ta].[TaskId])
	LEFT JOIN [dbo].[TaskStatus] AS [tsksts] ON ([tsk].[_id] = [tsksts].[TaskId])
	LEFT JOIN (
		SELECT
			[lv].[_id] AS [StatusId]
			,[lv].[Value] AS [StatusName]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'Status')
	) AS [sts] ON (
		(([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('Created')))
		OR (([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('Not Started')))
		OR (([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('Started')))
		OR (([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('In Progress')))
		OR (([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('Completed')))
		OR (([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('Done')))
		OR (([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('Blocked')))
		OR (([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('On Hold')))
		OR (([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('Re-Started')))
		OR (([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('Cancelled')))
		OR (([tsksts].[StatusId] = [sts].[StatusId]) AND ([sts].[StatusName] IN ('De-scoped')))
	)
)
SELECT
	[ProjectId]
	,[TaskId]
	,[AssigneeId]
	,[HoursWorked Created]
	,[HoursWorked Not Started]
	,[HoursWorked Started]
	,[HoursWorked In Progress]
	,[HoursWorked Completed]
	,[HoursWorked Done]
	,[HoursWorked Blocked]
	,[HoursWorked On Hold]
	,[HoursWorked Re-Started]
	,[HoursWorked Cancelled]
	,[HoursWorked De-scoped]
	,([HoursWorked Started] + [HoursWorked In Progress] + [HoursWorked Completed] + [HoursWorked Done]) AS [Total HoursWorked]
FROM (
	SELECT
		[ProjectId]
		,[TaskId]
		,[AssigneeId]
		,ISNULL([Created], 0) AS [HoursWorked Created]
		,ISNULL([Not Started], 0) AS [HoursWorked Not Started]
		,ISNULL([Started], 0) AS [HoursWorked Started]
		,ISNULL([In Progress], 0) AS [HoursWorked In Progress]
		,ISNULL([Completed], 0) AS [HoursWorked Completed]
		,ISNULL([Done], 0) AS [HoursWorked Done]
		,ISNULL([Blocked], 0) AS [HoursWorked Blocked]
		,ISNULL([On Hold], 0) AS [HoursWorked On Hold]
		,ISNULL([Re-Started], 0) AS [HoursWorked Re-Started]
		,ISNULL([Cancelled], 0) AS [HoursWorked Cancelled]
		,ISNULL([De-scoped], 0) AS [HoursWorked De-scoped]
	FROM (
		SELECT
			[ProjectId]
			,[TaskId]
			,[AssigneeId]
			,[StatusName]
			,DATEDIFF(HOUR, [TADateCreated], [STSDateCreated]) AS [HoursWorked]
		FROM [cte]
	) AS [cte]
	PIVOT (
		MAX([HoursWorked]) FOR [StatusName] IN ([Created], [Not Started], [Started], [In Progress], [Completed], [Done], [Blocked], [On Hold], [Re-Started], [Cancelled], [De-scoped])
	) [ctePivot]
) AS [data]