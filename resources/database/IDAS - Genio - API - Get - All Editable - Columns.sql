SELECT
	[e].[_id] AS [EntityId],
	[t].[object_id] AS [ParentTableId],
	[t].[name] AS [ParentTableName],
	[ac].[column_id] AS [ParentColumnId],
	[ac].[name] AS [ParentColumnName]
FROM [IdasGenioDb].[dbo].[Entity] AS [e]
JOIN [IdasGenioDb].[sys].[tables] AS [t] ON ([e].[Name] = [t].[name])
JOIN [IdasGenioDb].[sys].[all_columns] AS [ac] ON ([t].[object_id] = [ac].[object_id])
WHERE
	[ac].[name] NOT IN (
		'_id', 'EmployeeNumber', 'DateTerminated', 'MaximumHoursAllocated', 'BirthDate', 'UserId', 'EmployeeClientSupplierId', 'DateLastLoggedIn', 'CreatedBy', 'DateCreated', 'ModifiedBy', 'DateModified'
	)