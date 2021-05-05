USE [IdaDB_v2];
GO

SELECT
	[ept].[_id] AS [ParentEntityId],
	[ptfc].[name] AS [ParentEntityColumnName],
	[ect].[_id] AS [ChildEntityId],
	[ctfc].[name] AS [ChildEntityColumnName],
	[fk].[name] AS [RelationshipName],
	(SELECT [_id] FROM [IdaDB_v2].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [IdaDB_v2].[sys].[foreign_keys] AS [fk]	-- All Foreign Key Constraints
JOIN [IdaDB_v2].[sys].[foreign_key_columns] AS [fkc] ON [fk].[object_id] = [fkc].[constraint_object_id]	-- All Foreign Key Constraint Columns
JOIN [IdaDB_v2].[sys].[tables] AS [pt] ON [fkc].[referenced_object_id] = [pt].[object_id]	-- Parent/Referenced Table
JOIN [IdaDB_v2].[dbo].[Entity] AS [ept] ON [pt].[name] = [ept].[Name]						-- Parent Entity
JOIN [IdaDB_v2].[sys].[all_columns] AS [ptfc] ON [pt].[object_id] = [ptfc].[object_id] AND [fkc].[referenced_column_id] = [ptfc].[column_id]	-- Parent/Referenced Table Column
JOIN [IdaDB_v2].[sys].[tables] AS [ct] ON [fkc].[parent_object_id] = [ct].[object_id]	-- Child Table
JOIN [IdaDB_v2].[dbo].[Entity] AS [ect] ON [ct].[name] = [ect].[Name]					-- Child Entity
JOIN [IdaDB_v2].[sys].[all_columns] AS [ctfc] ON [ct].[object_id] = [ctfc].[object_id] AND [fkc].[parent_column_id] = [ctfc].[column_id]		-- Child Table Column