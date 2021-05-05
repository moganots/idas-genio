USE [IdaDB_v2];
GO

;WITH [cte] ([UserId],[GroupId]) AS (
SELECT [u].[_id] AS [UserId], [lv].[_id] AS [GroupId] FROM [IdaDB_v2].[dbo].[User] AS [u], [IdaDB_v2].[dbo].[LookupValue] AS [lv], [IdaDB_v2].[dbo].[LookupCategory] AS [lc] WHERE [u].[EmailAddress] = 'root@genio.idas.co.za' AND [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' UNION
SELECT [u].[_id] AS [UserId], [lv].[_id] AS [GroupId] FROM [IdaDB_v2].[dbo].[User] AS [u], [IdaDB_v2].[dbo].[LookupValue] AS [lv], [IdaDB_v2].[dbo].[LookupCategory] AS [lc] WHERE [u].[EmailAddress] = 'admin@genio.idas.co.za' AND [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Administrators' UNION
SELECT [u].[_id] AS [UserId], [lv].[_id] AS [GroupId] FROM [IdaDB_v2].[dbo].[User] AS [u], [IdaDB_v2].[dbo].[Employee] AS [e], [IdaDB_v2].[dbo].[LookupValue] AS [lv], [IdaDB_v2].[dbo].[LookupCategory] AS [lc] WHERE [u].[EmployeeId] = [e].[_id] AND [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Employees' UNION
SELECT [u].[_id] AS [UserId], [lv].[_id] AS [GroupId] FROM [IdaDB_v2].[dbo].[User] AS [u], [IdaDB_v2].[dbo].[Client] AS [c], [IdaDB_v2].[dbo].[LookupValue] AS [lv], [IdaDB_v2].[dbo].[LookupCategory] AS [lc] WHERE [u].[ClientId] = [c].[_id] AND [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Clients'
)
SELECT
	[UserId],
	[GroupId],
	(SELECT [_id] FROM [IdaDB_v2].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]