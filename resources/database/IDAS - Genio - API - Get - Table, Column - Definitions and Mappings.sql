SELECT
	[pt].[name] AS [tableName],
	[ptfc].[column_id] AS [columnId],
	[ptfc].[name] AS [columnName],
	[ptst].[name] AS [sqlDataType],
	CASE
		WHEN [ctfc].[column_id] IS NOT NULL THEN [ctfc].[name]
		WHEN LOWER([ptst].[name]) IN ('char', 'nchar', 'varchar', 'nvarchar', 'text', 'ntext') THEN 'String'
		WHEN LOWER([ptst].[name]) IN ('date', 'datetime2', 'datetimeoffset', 'smalldatetime', 'datetime') THEN 'Date'
		WHEN LOWER([ptst].[name]) IN ('time', 'timestamp') THEN 'Time'
		WHEN LOWER([ptst].[name]) IN ('bigint', 'int', 'smallint', 'tinyint') THEN 'Number'
		WHEN LOWER([ptst].[name]) IN ('bit') THEN 'Boolean'
		ELSE 'any'
	END AS [jsDataType]
FROM [IdasGenioDb].[sys].[foreign_keys] AS [fk]																-- -- All foreign keys ---------------------------------
LEFT JOIN [IdasGenioDb].[sys].[foreign_key_columns] AS [fkc] ON [fk].[object_id] = [fkc].[constraint_object_id]	-- -- All Foreign Key Constraint Columns ---------------
LEFT JOIN [IdasGenioDb].[sys].[tables] AS [pt] ON [fkc].[referenced_object_id] = [pt].[object_id]				-- -- Parent Table -------------------------------------
LEFT JOIN [IdasGenioDb].[sys].[all_columns] AS [ptfc] ON [pt].[object_id] = [ptfc].[object_id] AND ([fkc].[referenced_column_id] IS NULL OR [fkc].[referenced_column_id] = [ptfc].[column_id])	-- -- Parent Table Column Name -------------------------
LEFT JOIN [IdasGenioDb].[sys].[systypes] AS [ptst] ON [ptfc].[system_type_id] = [ptst].[xtype]	-- -- Parent Table Column DataType Name ----------------
LEFT JOIN [IdasGenioDb].[sys].[tables] AS [ct] ON [fkc].[parent_object_id] = [ct].[object_id]	-- -- Child Table -------------------------------------
LEFT JOIN [IdasGenioDb].[sys].[all_columns] AS [ctfc] ON [ct].[object_id] = [ctfc].[object_id] AND ([fkc].[parent_column_id] IS NULL OR [fkc].[parent_column_id] = [ctfc].[column_id])	-- -- Child Table Column Name -------------------------
LEFT JOIN [IdasGenioDb].[sys].[systypes] AS [ctst] ON [ctfc].[system_type_id] = [ctst].[xtype]	-- -- Child Table Column DataType Name ----------------
WHERE
	[ptst].[name] NOT IN ('sysname')
ORDER BY
	[pt].[name],
	[ptfc].[column_id]


--SELECT * FROM [IdasGenioDb].[sys].[all_columns]
--SELECT * FROM [IdasGenioDb].[sys].[systypes]