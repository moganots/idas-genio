USE [IdasGenioDb];
GO

;WITH [cte] ([EntityName],[ColumnId],[ColumnName],[ColumnSqlDataType],[ColumnJsDataType]) AS (
SELECT
	[t].[name] AS [EntityName]
	,[ac].[column_id] AS [ColumnId]
	,[ac].[name] AS [ColumnName]
	,[ty].[name] AS [ColumnSqlDataType]
	,CASE
		WHEN [ty].[name] IN ('date', 'datetime', 'datetime2', 'datetimeoffset', 'smalldatetime', 'time')
			THEN 'Date'
		WHEN [ty].[name] IN ('bigint', 'decimal', 'float', 'int', 'money', 'numeric', 'real', 'smallint', 'smallmoney', 'tinyint')
			THEN 'number'
		WHEN [ty].[name] IN ('bit')
			THEN 'boolean'
		ELSE 'string'
	END AS [ColumnJsDataType]
FROM
	--[dbo].[Entity] AS [e],
	[sys].[tables] AS [t]
	,[sys].[all_columns] AS [ac]
	,[sys].[types] AS [ty]
WHERE
	--([e].[Name] = [t].[name]) AND
	([t].[object_id] = [ac].[object_id])
	AND ([ac].[system_type_id] = [ty].[system_type_id])
	AND ([ty].[name] NOT IN ('sysname'))
)
SELECT DISTINCT
	[EntityName]
	,[ColumnId]
	,[ColumnName]
	,[ColumnSqlDataType]
	,[ColumnJsDataType]
	,[ColumnName] + ': ' + [ColumnJsDataType] + ';' AS [JsColumnProperty]
	,[ColumnName] + '?: ' + [ColumnJsDataType] + ',' AS [JsColumnConstructorParameter]
	,'this.' + [ColumnName] + ' = ' + [ColumnName] + ';' AS [JsColumnConstructorSetParameter]
	,'{id: ' + CAST([ColumnId] AS VARCHAR(255)) + ', name: ''' + [ColumnName] + ''', canShow: true, canSort: true, canGroup: false},' AS [JsColumnFieldName]
	,'case ''' + [ColumnName] + ''':' AS [JsColumnCase]
FROM [cte]
WHERE
	--[ColumnJsDataType] IN ('number') AND
	[EntityName] NOT IN ('EntityRelationship', 'EntityUserGroupCapacity')
	AND [ColumnName] NOT IN ('_id', 'Name', 'Code', 'Description', 'IsActive', 'CreatedBy', 'DateCreated', 'ModifiedBy', 'DateModified')
	--AND [ColumnName] LIKE '%Id'
	AND [EntityName] IN ('Task')
ORDER BY
	[EntityName]
	,[ColumnId]