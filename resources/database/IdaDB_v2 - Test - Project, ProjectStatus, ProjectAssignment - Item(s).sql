;WITH [cte] ([ProjectId], [ProjectAssignmentTypeId], [CurrentAssigneeId], [DateCreated]) AS (
	SELECT
		[prj].[_id] AS [ProjectId]
		,[pat].[ProjectAssignmentTypeId] AS [ProjectAssignmentTypeId]
		,[pat].[UserId] AS [CurrentAssigneeId]
		,[prjsts].[DateCreated]
	FROM [dbo].[ProjectStatus] AS [prjsts]
	JOIN [dbo].[Project] AS [prj] ON ([prjsts].[ProjectId] = [prj].[_id])
	JOIN [dbo].[LookupValue] AS [lv] ON ([prjsts].[StatusId] = [lv].[_id])
	LEFT JOIN (
		SELECT
			[lv].[_id] AS [ProjectAssignmentTypeId]
			,[lv].[Value] AS [ProjectAssignmentTypeValue]
			,[usr].[_id] AS [UserId]
			,[usr].[EmailAddress]
		FROM [dbo].[LookupValue] AS [lv]
		JOIN [dbo].[LookupCategory] AS [lc] ON ([lv].[LookupCategoryId] = [lc].[_id])
		CROSS JOIN [dbo].[User] AS [usr]
		WHERE
			([lc].[Name] = 'ProjectAssignmentType')
			AND (COALESCE([usr].[EmployeeId], [usr].[ClientId], [usr].[SupplierId]) IS NOT NULL)
	) AS [pat] ON (
		(
			-- Project Manager(s) - All Projects
			([prj].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
			AND ([lv].[Value] IN ('Created'))
			AND ([pat].[ProjectAssignmentTypeValue] IN ('Project Manager'))
			AND ([pat].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za'))
		)
		OR (
			-- Business Analyst(s) - All Projects
			([prj].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
			AND ([lv].[Value] IN ('Not Started', 'Started'))
			AND ([pat].[ProjectAssignmentTypeValue] IN ('Business Analyst'))
			AND ([pat].[EmailAddress] IN ('Bad.Work@genio.idas.co.za', 'Good.Job@genio.idas.co.za'))
		)
		OR (
			-- Senior Engineer(s) - All Projects
			([prj].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
			AND ([lv].[Value] IN ('Created'))
			AND ([pat].[ProjectAssignmentTypeValue] IN ('Senior Engineer'))
			AND ([pat].[EmailAddress] IN ('John.Doe@genio.idas.co.za'))
		)
		OR (
			-- Engineer(s) - All Projects
			([prj].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
			AND ([lv].[Value] IN ('Created'))
			AND ([pat].[ProjectAssignmentTypeValue] IN ('Engineer'))
			AND ([pat].[EmailAddress] IN ('Joe.Soap@genio.idas.co.za'))
		)
	)
)
SELECT
	[ProjectId]
	,[ProjectAssignmentTypeId]
	,[CurrentAssigneeId]
	,[DateCreated]
FROM [cte]
WHERE
	([ProjectId] IS NOT NULL)
	AND ([ProjectAssignmentTypeId] IS NOT NULL)
	AND ([CurrentAssigneeId] IS NOT NULL)