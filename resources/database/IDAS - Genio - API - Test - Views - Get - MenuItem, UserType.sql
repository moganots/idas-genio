USE [IdasGenioDb];
GO

SELECT
	[ut].[UserTypeId]
	,[mi].[_id] AS [MenuItemId]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [dbo].[MenuItem] AS [mi]
JOIN (
	SELECT
		[lv].[_id] AS [UserTypeId]
		,COALESCE([lv].[Value], [lv].[Value2], [lv].[Value3]) AS [UserType]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'UserType')
) AS [ut] ON (
	-- General
	(([ut].[UserType] IN ('General')) AND ([mi].[Title] IN ('Dashboard', 'My Profile')))
	-- Admin, Root
	OR (([ut].[UserType] IN ('Admin', 'Root')) AND ([mi].[Title] IN ('Dashboard', 'My Profile', 'My Inbox', 'My Schedule', 'My Projects', 'My Tasks', 'My Employees', 'Clients', 'Suppliers', 'Users')))
	-- Client
	OR (([ut].[UserType] IN ('Client')) AND ([mi].[Title] IN ('Dashboard', 'My Profile', 'My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
	-- Employee
	OR (([ut].[UserType] IN ('Employee')) AND ([mi].[Title] IN ('Dashboard', 'My Profile', 'My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
	-- Supplier
	OR (([ut].[UserType] IN ('Supplier')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
);