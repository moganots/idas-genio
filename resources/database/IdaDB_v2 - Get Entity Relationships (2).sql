USE [IdasGenioDb];
GO

;WITH [cte] ([EntityId], [ParentTableId], [ParentTableName], [ParentColumnId], [ParentColumnName], [ParentColumnSystemDataType], [ParentColumnSystemDataTypeName], [ReferencedTableId], [ReferencedTableName], [ReferencedColumnId], [ReferencedColumnName], [RelationshipId], [RelationshipName])
AS (
	SELECT
		[e].[_id] AS [EntityId],
		[t].[object_id] AS [ParentTableId],
		[t].[name] AS [ParentTableName],
		[ac].[column_id] AS [ParentColumnId],
		[ac].[name] AS [ParentColumnName],
		[acst].[xtype] AS [ParentColumnSystemDataType],
		[acst].[name] AS [ParentColumnSystemDataTypeName],
		[rt].[object_id] AS [ReferencedTableId],
		[rt].[name] AS [ReferencedTableName],
		[rac].[column_id] AS [ReferencedColumnId],
		[rac].[name] AS [ReferencedColumnName],
		[fk].[object_id] AS [RelationshipId],
		[fk].[name] AS [RelationshipName]
	FROM [IdasGenioDb].[dbo].[Entity] AS [e]
	JOIN [IdasGenioDb].[sys].[tables] AS [t] ON ([e].[Name] = [t].[name])
	JOIN [IdasGenioDb].[sys].[all_columns] AS [ac] ON ([t].[object_id] = [ac].[object_id])
	JOIN [IdasGenioDb].[sys].[systypes] AS [acst] ON ([ac].[system_type_id] = [acst].[xtype])
	LEFT JOIN [IdasGenioDb].[sys].[foreign_key_columns] AS [fkc] ON ([t].[object_id] = [fkc].[parent_object_id] AND [ac].[column_id] = [fkc].[parent_column_id])
	LEFT JOIN [IdasGenioDb].[sys].[tables] AS [rt] ON ([fkc].[referenced_object_id] = [rt].[object_id])
	LEFT JOIN [IdasGenioDb].[sys].[all_columns] AS [rac] ON ([rt].[object_id] = [rac].[object_id] AND [fkc].[referenced_column_id] = [rac].[column_id])
	LEFT JOIN [IdasGenioDb].[sys].[foreign_keys] AS [fk] ON ([fkc].[constraint_object_id] = [fk].[object_id])
)
SELECT
	[EntityId],
	[ParentTableId],
	--[ParentTableName],
	[ParentColumnId],
	--[ParentColumnName],
	[ReferencedTableId],
	--[ReferencedTableName],
	[ReferencedColumnId],
	--[ReferencedColumnName],
	[RelationshipId],
	[RelationshipName],
	--[ParentColumnSystemDataType],
	[SqlDataType],
	[JsDataType],
	'SELECT '''+[JsDataType]+''' UNION'
FROM (
	SELECT
		[EntityId],
		[ParentTableId],
		[ParentTableName],
		[ParentColumnId],
		[ParentColumnName],
		[ReferencedTableId],
		[ReferencedTableName],
		[ReferencedColumnId],
		[ReferencedColumnName],
		[RelationshipId],
		[RelationshipName],
		[ParentColumnSystemDataType],
		[ParentColumnSystemDataTypeName] AS [SqlDataType],
		CASE
			WHEN [ReferencedTableName] IS NOT NULL THEN [ReferencedTableName]
			WHEN [ParentColumnSystemDataTypeName] IN ('bigint') THEN 'number'
			WHEN [ParentColumnSystemDataTypeName] IN ('nvarchar') THEN 'string'
			WHEN [ParentColumnSystemDataTypeName] IN ('date', 'datetime') THEN 'Date'
			WHEN [ParentColumnSystemDataTypeName] IN ('bit') THEN 'boolean'
			ELSE 'string'
			END AS [JsDataType]
	FROM [cte]
	WHERE
		[ParentColumnSystemDataTypeName] NOT IN ('sysname')
) AS [data]
WHERE
	[ReferencedTableName] IS NOT NULL
	AND [JsDataType] NOT IN ('LookupValue')
ORDER BY
	[EntityId],
	[ParentColumnId]