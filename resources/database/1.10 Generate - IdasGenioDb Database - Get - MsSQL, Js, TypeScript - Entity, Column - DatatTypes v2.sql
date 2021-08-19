USE [IdasGenioDb];
GO

;WITH [cte] AS (
SELECT
	[e].[_id] AS [EntityId]
	,[t].[name] AS [EntityName]
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
	,CAST(CASE
		WHEN [ac].[name] IN ('_id', 'Code', 'Description', 'SubTaskId', 'IsActive', 'CreatedBy', 'DateCreated', 'ModifiedBy', 'DateModified')
			THEN 0
		ELSE 1
	END AS BIT) AS [IsRequired]
FROM
	[dbo].[Entity] AS [e]
	,[sys].[tables] AS [t]
	,[sys].[all_columns] AS [ac]
	,[sys].[types] AS [ty]
WHERE
	([e].[Name] = [t].[name])
	AND ([t].[object_id] = [ac].[object_id])
	AND ([ac].[system_type_id] = [ty].[system_type_id])
	AND ([ty].[name] NOT IN ('sysname'))
)
SELECT
	[EntityId]
	,[EntityName]
	,[ColumnId]
	,[ColumnName]
	,[ColumnSqlDataType]
	,[ColumnJsDataType]
	,[IsRequired]
	,'{id: ' + CAST([ColumnId] AS VARCHAR(255)) + ', name: `' + [ColumnName] + '` , canShow: ' + CASE WHEN [IsRequired] = 1 THEN 'true' ELSE 'false' END + ', canSort: true, canGroup: false},' AS [Configuration]
	,[ColumnName] + ': ['''', ' + CASE WHEN [IsRequired] = 1 THEN 'Validators.required' ELSE 'null' END + '],' AS [FormField]
	,[ColumnName] + ': ' + [ColumnJsDataType] + ';' AS [JsClassField]
FROM [cte]
WHERE
	([EntityName] = 'FileAttachment')
ORDER BY
	[ColumnId]