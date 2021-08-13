USE [IdasGenioDb];
GO

SELECT
	[g].[GroupId]
	,[mi].[_id] AS [MenuItemId]
FROM [dbo].[MenuItem] AS [mi]
LEFT JOIN (
	SELECT
		[lv].[_id] AS [GroupId]
		,[lv].[Value] AS [GroupName]
	FROM [dbo].[LookupCategory] AS [lc], [dbo].[LookupValue] AS [lv]
	WHERE
		([lc].[_id] = [lv].[LookupCategoryId])
		AND ([lc].[Name] = 'Group')
) AS [g] ON (
	-- Administrators, Employees
	([g].[GroupName] IN ('Administrators', 'Employees'))
	-- Clients, Suppliers
	OR ([g].[GroupName] IN ('Clients', 'Suppliers') AND [mi].[Title] IN ('Dashboard', 'My Profile', 'My Inbox', 'My Schedule', 'My Projects', 'My Tasks'))
	-- General
	OR ([g].[GroupName] IN ('General') AND [mi].[Title] IN ('Dashboard', 'My Profile'))
)