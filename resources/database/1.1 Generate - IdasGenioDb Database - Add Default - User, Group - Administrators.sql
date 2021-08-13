SELECT
	[u].[_id] AS [UserId]
	,[g].[GroupId]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [dbo].[User] AS [u]
JOIN (
	SELECT
		[lv].[_id] AS [GroupId]
		,[lv].[Value] AS [GroupName]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'Group')
) AS [g] ON (
	(
		[u].[EmailAddress] IN ('root@genio.idas.co.za', 'admin@genio.idas.co.za')
		AND ([g].[GroupName] = 'Administrators')
	)
)