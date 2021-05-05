SELECT
	[t].[name] AS [tableName],
	[tac].[column_id] AS [columnId],
	[tac].[name] AS [columnName],
	[tst].[name] AS [sqlDataType],
	CASE
		--WHEN [ctfc].[column_id] IS NOT NULL THEN [ctfc].[name]
		WHEN LOWER([tst].[name]) IN ('char', 'nchar', 'varchar', 'nvarchar', 'text', 'ntext') THEN 'string'
		WHEN LOWER([tst].[name]) IN ('date', 'datetime2', 'datetimeoffset', 'smalldatetime', 'datetime') THEN 'Date'
		WHEN LOWER([tst].[name]) IN ('time', 'timestamp') THEN 'Time'
		WHEN LOWER([tst].[name]) IN ('bigint', 'int', 'smallint', 'tinyint') THEN 'number'
		WHEN LOWER([tst].[name]) IN ('bit') THEN 'boolean'
		ELSE 'any'
	END AS [jsDataType]
FROM [IdasGenioDb].[sys].[tables] AS [t]
JOIN [IdasGenioDb].[sys].[all_columns] AS [tac] ON ([t].[object_id] = [tac].[object_id])
LEFT JOIN [IdasGenioDb].[sys].[systypes] AS [tst] ON [tac].[system_type_id] = [tst].[xtype]
LEFT JOIN [IdasGenioDb].[sys].[foreign_key_columns] AS [fkc]
	ON (
		[fkc].[referenced_object_id] = [t].[object_id]
	)
WHERE
	[tst].[name] NOT IN ('sysname')
ORDER BY
	[t].[name],
	[tac].[column_id]