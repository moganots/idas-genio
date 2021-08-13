USE [IdasGenioDb];
GO

SELECT
	[lc].[Name] AS [Category]
	,[lv].[Value]
	,[lv].[Icon]
	,[lv].[Image]
	,LEN([lv].[Value])
	,*
FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
WHERE
	([lv].[LookupCategoryId] = [lc].[_id])
	AND ([lv].[Icon] IS NOT NULL)
	AND ([lc].[Name] = 'Status')