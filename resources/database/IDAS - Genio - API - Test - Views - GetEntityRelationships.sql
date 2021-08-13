USE [IdasGenioDb];
GO

;WITH [cte] AS (
SELECT
	[fk].[object_id] AS [fk object_id]
	,[fk].[name] AS [fk name]
	,[fk].[parent_object_id] AS [fk parent_object_id]
	,[fk].[referenced_object_id] AS [fk referenced_object_id]
	,[pe].[_id] AS [ParentEntityId]
	,[fkc].[referenced_object_id] AS [fkc referenced_object_id]
	,[fkcrt].[name] AS [fkcrt name]
	,[fkc].[referenced_column_id] AS [fkc referenced_column_id]
	,[fkcrtac].[name] AS [fkcrtac name]
	,[fkc].[constraint_object_id] AS [fkc constraint_object_id]
	,[fkc].[constraint_column_id] AS [fkc constraint_column_id]
	,[ce].[_id] AS [ChildEntityId]
	,[fkc].[parent_object_id] AS [fkc parent_object_id]
	,[fkcct].[name] AS [fkcct name]
	,[fkc].[parent_column_id] AS [fkc parent_column_id]
	,[fkcctac].[name] AS [fkcctac name]
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
	,[fkcrtac name] AS [ParentEntityColumnName]
	,[ChildEntityId]
	,[fkcctac name] AS [ChildEntityColumnName]
	,[fk name] AS [RelationshipName]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]