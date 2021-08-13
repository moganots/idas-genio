USE [IdasGenioDb];
GO

SELECT
	[ac].[name]
	,[ac].[name] + '?: ' +
	CASE
		WHEN [ty].[name] IN ('int', 'bigint', 'currency', 'numeric', 'float') THEN 'number'
		WHEN [ty].[name] IN ('date', 'datetime', 'time') THEN 'Date'
		WHEN [ty].[name] IN ('bit') THEN 'boolean'
		ELSE 'string'
	END + ','
	,[ac].[name] + ': ' +
	CASE
		WHEN [ty].[name] IN ('int', 'bigint', 'currency', 'numeric', 'float') THEN 'number'
		WHEN [ty].[name] IN ('date', 'datetime', 'time') THEN 'Date'
		WHEN [ty].[name] IN ('bit') THEN 'boolean'
		ELSE 'string'
	END + ';'
	,'this.' + [ac].[name] + ' = ' + [ac].[name] + ';'
FROM [dbo].[Entity] AS [e]
JOIN [sys].[tables] AS [t] ON ([e].[Name] = [t].[name])
JOIN [sys].[all_columns] AS [ac] ON ([t].[object_id] = [ac].[object_id])
JOIN [sys].[types] AS [ty] ON ([ac].[system_type_id] = [ty].[system_type_id])
WHERE
	([e].[Name] = 'Client')
	AND ([ac].[name] NOT IN ('_id', 'IsActive', 'CreatedBy', 'DateCreated', 'ModifiedBy', 'DateModified'))
	AND ([ty].[name] NOT IN ('sysname'))
ORDER BY
	[ac].[column_id]