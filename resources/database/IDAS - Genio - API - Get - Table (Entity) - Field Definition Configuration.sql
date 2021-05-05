SELECT
	[t].[name] AS [TableName]
	, [ac].[column_id] AS [ColumnId]
	, LOWER(TRIM([e].[name])) AS [identifier]
	, CASE
		WHEN TRIM([e].[Name]) IN ('Dashboard') THEN 'dashboard'
		WHEN TRIM([e].[Name]) IN ('User', 'Profile', 'User Profile') THEN 'manage_accounts'
		WHEN TRIM([e].[Name]) IN ('Employee', 'Employees') THEN 'groups'
		WHEN TRIM([e].[Name]) IN ('Notification', 'Notifications') THEN 'circle_notifications'
		WHEN TRIM([e].[Name]) IN ('Inbox', 'Mail', 'Message') THEN 'mail_outline'
		WHEN TRIM([e].[Name]) IN ('Schedule', 'User Schedule', 'Schedules', 'User Schedules') THEN 'event'
		WHEN TRIM([e].[Name]) IN ('Project', 'Projects') THEN 'auto_awesome_motion'
		WHEN TRIM([e].[Name]) IN ('Client', 'Clients') THEN 'stream'
		WHEN TRIM([e].[Name]) IN ('Supplier', 'Suppliers') THEN 'reduce_capacity'
		WHEN TRIM([e].[Name]) IN ('User', 'Users') THEN 'manage_accounts'
		WHEN TRIM([e].[Name]) IN ('Task', 'Tasks') THEN 'tune'
		ELSE ''
		END AS [icon]
	, TRIM([e].[Name]) + 's' AS [navigationBarHeading]
	, 'Manage ' + TRIM([e].[Name]) + 's' AS [pageTitle]
	, 'Manage ' + TRIM([e].[Name]) + 's' AS [pageName]
	, 'Manage ' + TRIM([e].[Name]) + 's' AS [tableHeading]
	, 'Manage ' + TRIM([e].[Name]) + 's' AS [graphHeading]
	, '{fieldId: ' + CAST([ac].[column_id] AS NVARCHAR(MAX)) + ', field: ''' + [ac].[name] + ''', canShow: ' + CASE WHEN [ac].[name] IN ('_id', 'CreatedBy', 'DateCreated', 'ModifiedBy', 'DateModified', 'UpdatedBy') THEN 'false' ELSE 'true' END + ', canSort: true, canGroup: false},' AS [FieldConfiguration]
FROM [IdasGenioDb].[sys].[all_columns] AS [ac]
JOIN [IdasGenioDb].[sys].[tables] AS [t] ON ([ac].[object_id] = [t].[object_id])
JOIN [IdasGenioDb].[dbo].[Entity] AS [e] ON ([t].[name] = [e].[Name])
WHERE
	[e].[Name] = 'Client'