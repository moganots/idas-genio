USE [IdasGenioDb];
GO

DECLARE @UserId [bigint] = (SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'jane.doe@genio.idas.co.za');

SELECT
	CASE
		WHEN [Operation] IN ('Insert')
			THEN 'You have ' + (CAST(COUNT(*) AS VARCHAR(255))) + ' new ' + LOWER((SELECT [dbo].[SplitCamelCase]([EntityName]))) + '(s)'
		WHEN [Operation] IN ('Update')
			THEN 'You have ' + (CAST(COUNT(*) AS VARCHAR(255))) + ' ' + LOWER((SELECT [dbo].[SplitCamelCase]([EntityName]))) + ' change(s)'
		WHEN [Operation] IN ('Delete')
			THEN 'You have ' + (CAST(COUNT(*) AS VARCHAR(255))) + ' ' + LOWER((SELECT [dbo].[SplitCamelCase]([EntityName]))) + ' change(s)'
		ELSE ''
	END

	--'You have' +
	--	CASE
	--		WHEN [Operation] IN ('Insert') THEN ' new 'CAST(COUNT(*) AS NVARCHAR(255)) + ' ' + (SELECT [dbo].[SplitCamelCase]([EntityName])) + '(s)'
	--*
FROM [dbo].[EntityChangeHistory] AS [ech], [dbo].[User] AS [usr]
WHERE
	(([ech].[CreatedBy] = [usr].[_id]) OR ([ech].[ModifiedBy] = [usr].[_id]))
	AND (([usr].[_id] = @UserId AND [usr].[IsActive] = 1 AND [usr].[IsLocked] = 0))
	AND [EntityName] NOT IN ('ProjectStatus', 'TaskStatus', 'Task')
GROUP BY
	[Operation]
	,[EntityName]