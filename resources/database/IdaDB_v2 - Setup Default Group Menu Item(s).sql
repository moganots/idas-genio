USE [IdaDB_v2];
GO

;WITH [cte] ([GroupId],[MenuItemId]) AS (
SELECT [lv].[_id] AS [GroupId], [mi].[_id] AS [MenuItemId] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv], [IdaDB_v2].[dbo].[LookupCategory] AS [lc], [IdaDB_v2].[dbo].[MenuItem] AS [mi] WHERE [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Administrators' AND [mi].[Title] IN ('Clients', 'Dashboard', 'My Employees', 'My Inbox', 'My Schedule', 'My Notifications', 'User Profile', 'My Projects', 'Suppliers') UNION
SELECT [lv].[_id] AS [GroupId], [mi].[_id] AS [MenuItemId] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv], [IdaDB_v2].[dbo].[LookupCategory] AS [lc], [IdaDB_v2].[dbo].[MenuItem] AS [mi] WHERE [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Employees' AND [mi].[Title] IN ('Dashboard', 'My Employees', 'My Inbox', 'My Schedule', 'My Notifications', 'User Profile', 'My Projects')  UNION
SELECT [lv].[_id] AS [GroupId], [mi].[_id] AS [MenuItemId] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv], [IdaDB_v2].[dbo].[LookupCategory] AS [lc], [IdaDB_v2].[dbo].[MenuItem] AS [mi] WHERE [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Clients' AND [mi].[Title] IN ('Dashboard', 'My Inbox', 'My Schedule', 'My Notifications', 'User Profile', 'My Projects')  UNION
SELECT [lv].[_id] AS [GroupId], [mi].[_id] AS [MenuItemId] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv], [IdaDB_v2].[dbo].[LookupCategory] AS [lc], [IdaDB_v2].[dbo].[MenuItem] AS [mi] WHERE [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'General' AND [mi].[Title] IN ('Dashboard', 'My Inbox', 'My Schedule', 'My Notifications', 'User Profile') 
)
SELECT
	[GroupId],
	[MenuItemId],
	(SELECT [_id] FROM [IdaDB_v2].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]