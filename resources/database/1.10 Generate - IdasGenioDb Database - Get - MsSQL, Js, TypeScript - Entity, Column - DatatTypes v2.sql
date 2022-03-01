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
	,[ColumnName] + '?: ' + [ColumnJsDataType] + ',' AS [JsClassConstructorField]
	,CASE
		WHEN [ColumnName] NOT IN ('_id', 'IsActive', 'Code', 'Name', 'Description', 'CreatedBy', 'DateCreated', 'ModifiedBy', 'DateModified')
			THEN 'this.' + [ColumnName] + ' = ' + [ColumnName] + ';'
			ELSE NULL
		END AS [JsClassConstructorInitialisation]
	,LOWER(LEFT([EntityName], 1)) + RIGHT([EntityName], LEN([EntityName]) - 1) + '.' + 
		CASE
			WHEN [ColumnName] LIKE '%Id'
				THEN LEFT([ColumnName], LEN([ColumnName]) - 2)
			WHEN [ColumnName] IN ('CreatedBy', 'ModifiedBy')
				THEN LOWER(LEFT([ColumnName], 1)) + RIGHT([ColumnName], LEN([ColumnName]) - 1)
			ELSE [ColumnName]
		END + ' = ' +
		CASE
			WHEN [ColumnName] IN ('CreatedBy', 'ModifiedBy', 'UserId', 'AssigneeId', 'PreviousAssigneeId', 'LoggedBy', 'AttendeeId')
				THEN 'this.users.find((user) => user?._id === ' + LOWER(LEFT([EntityName], 1)) + RIGHT([EntityName], LEN([EntityName]) - 1) + '?.' + [ColumnName] + ');'
			WHEN LEFT([ColumnName], LEN([ColumnName]) - 2) IN (SELECT [name] FROM [dbo].[LookupCategory])
				THEN 'this.lookupValues.find((lookupValue) => lookupValue?._id === ' + LOWER(LEFT([EntityName], 1)) + RIGHT([EntityName], LEN([EntityName]) - 1) + '?.' + [ColumnName] + ');'
			WHEN [ColumnName] IN ('ProjectId', 'ParentProjectId')
				THEN 'this.projects.find((project) => project?._id === ' + LOWER(LEFT([EntityName], 1)) + RIGHT([EntityName], LEN([EntityName]) - 1) + '?.' + [ColumnName] + ');'
			WHEN [ColumnName] IN ('TaskId', 'ParentTaskId')
				THEN 'this.tasks.find((task) => task?._id === ' + LOWER(LEFT([EntityName], 1)) + RIGHT([EntityName], LEN([EntityName]) - 1) + '?.' + [ColumnName] + ');'
			WHEN [ColumnName] IN ('EmployeeId')
				THEN 'this.employees.find((employee) => employee?._id === ' + LOWER(LEFT([EntityName], 1)) + RIGHT([EntityName], LEN([EntityName]) - 1) + '?.' + [ColumnName] + ');'
			WHEN [ColumnName] IN ('ClientId')
				THEN 'this.clients.find((client) => client?._id === ' + LOWER(LEFT([EntityName], 1)) + RIGHT([EntityName], LEN([EntityName]) - 1) + '?.' + [ColumnName] + ');'
			WHEN [ColumnName] IN ('SupplierId')
				THEN 'this.suppliers.find((supplier) => supplier?._id === ' + LOWER(LEFT([EntityName], 1)) + RIGHT([EntityName], LEN([EntityName]) - 1) + '?.' + [ColumnName] + ');'
		END AS [ReferenceValueInitialiser]
FROM [cte]
WHERE
	([EntityName] = 'user')
	--AND ([ColumnName] LIKE '%Id')
ORDER BY
	[ColumnId]