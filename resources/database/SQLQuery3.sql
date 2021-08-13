USE [IdasGenioDb];
GO

SELECT
	*
FROM
	[dbo].[LookupValue] AS [lv]
	,[dbo].[LookupCategory] AS [lc]
WHERE
	([lv].[LookupCategoryId] = [lc].[_id])
	AND ([lc].[Name] = 'TransactionType')