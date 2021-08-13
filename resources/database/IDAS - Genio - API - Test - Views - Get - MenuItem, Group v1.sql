USE [IdasGenioDb];
GO

SELECT
	[g].[GroupId]
	,[mi].[_id] AS [MenuItemId]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [dbo].[MenuItem] AS [mi]
JOIN (
	SELECT
		[lv].[_id] AS [GroupId]
		,COALESCE([lv].[Value], [lv].[Value2], [lv].[Value3]) AS [Group]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'Group')
) AS [g] ON (
	-- Everyone
	(([g].[Group] IN ('Everyone')) AND ([mi].[Title] IN ('Dashboard', 'My Profile')))
	-- Administrators
	OR (([g].[Group] IN ('Administrators')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks', 'My Employees', 'Clients', 'Suppliers', 'Users')))
	-- Clients
	OR (([g].[Group] IN ('Clients')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
	-- Employees
	OR (([g].[Group] IN ('Employees')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
	-- Managers
	OR (([g].[Group] IN ('Managers')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks', 'My Employees', 'Clients', 'Suppliers')))
	-- Suppliers
	OR (([g].[Group] IN ('Suppliers')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
)