;WITH [cte] ([_id], [EmployeeClientSupplierId], [UserTypeId], [EmailAddress], [DateLastLoggedIn], [IsActive], [IsLocked]) AS (
SELECT
	[_id]
	, COALESCE([EmployeeId], [ClientId], [SupplierId]) AS [EmployeeClientSupplierId]
	, CASE
		WHEN COALESCE([EmployeeId], [ClientId], [SupplierId]) IS NULL AND [IsAdmin] = 1 THEN 'Admin'
		WHEN [EmployeeId] IS NOT NULL THEN 'Employee'
		WHEN [ClientId] IS NOT NULL THEN 'Client'
		WHEN [SupplierId] IS NOT NULL THEN 'Supplier'
		ELSE 'General' END AS [UserTypeId]
	, [EmailAddress]
	, [DateLastLoggedIn]
	, [IsActive]
	, [IsLocked]
FROM [IdasGenioDb].[dbo].[User]
)
SELECT
	[_id] AS [UserId]
	, [EmployeeClientSupplierId]
	, (SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'UserType' AND [lv].[Value] = [cte].[UserTypeId]) AS [UserTypeId]
	, [EmailAddress]
	, [DateLastLoggedIn]
	, [IsActive]
	, [IsLocked]
FROM [cte]