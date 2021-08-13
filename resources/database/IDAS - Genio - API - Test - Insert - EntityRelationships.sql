USE [IdasGenioDb];
GO

;WITH [cte] AS (
SELECT
	[pe].[_id] AS [ParentEntityId]
	,[fkcrtac].[name] AS [ParentEntityColumnName]
	,[ce].[_id] AS [ChildEntityId]
	,[fkcctac].[name] AS [ChildEntityColumnName]
	,[fk].[name] AS [RelationshipName]
FROM [sys].[foreign_keys] AS [fk]	-- All Foreign Key Constraints
JOIN [sys].[foreign_key_columns] AS [fkc] ON ([fk].[object_id] = [fkc].[constraint_object_id])	-- All Foreign Key Constraint Columns
JOIN [sys].[tables] AS [fkcrt] ON ([fkc].[referenced_object_id] = [fkcrt].[object_id])	-- Parent / Reference table
JOIN [dbo].[Entity] AS [pe] ON ([fkcrt].[name] = [pe].[Name])	-- Parent Entity
JOIN [sys].[all_columns] AS [fkcrtac] ON (
		([fkcrt].[object_id] = [fkcrtac].[object_id])
		AND ([fkc].[referenced_column_id] = [fkcrtac].[column_id])
	)	-- Parent / Reference column(s)
JOIN [sys].[tables] AS [fkcct] ON ([fk].[parent_object_id] = [fkcct].[object_id])	-- Child table
JOIN [dbo].[Entity] AS [ce] ON ([fkcct].[name] = [ce].[Name])	-- Child Entity
JOIN [sys].[all_columns] AS [fkcctac] ON (
		([fkcct].[object_id] = [fkcctac].[object_id])
		AND ([fkc].[parent_column_id] = [fkcctac].[column_id])
	)	-- Child colum(s)
)
SELECT
	[ParentEntityId]
	,[ParentEntityColumnName]
	,[ChildEntityId]
	,[ChildEntityColumnName]
	,[RelationshipName]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]