USE [IdaDB_v2];
GO

SELECT DISTINCT
	CASE
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'BudgetCode' THEN 'BGC'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Capacity' THEN 'CPCT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Department' THEN 'DPT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'EmploymentType' THEN 'EMPT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Gender' THEN 'GND'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Group' THEN 'GRP'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'IndustryType' THEN 'INDT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'ProjectAssignmentType' THEN 'PJAT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Salutation' THEN 'SLTN'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Position' THEN 'POS'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'PreferredLanguage' THEN 'PRFLNG'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Province' THEN 'PVNC'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Status' THEN 'STS'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'TransactionType' THEN 'TTY'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'UserLockReason' THEN 'ULR'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'WageType' THEN 'WGT'
	ELSE 'NOCAT' END AS [Code],
	LEFT([ctfc].[name], LEN([ctfc].[name]) - 2) AS [Name],
	LEFT([ctfc].[name], LEN([ctfc].[name]) - 2) AS [Description],
	(SELECT [_id] FROM [IdaDB_v2].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [IdaDB_v2].[sys].[foreign_keys] AS [fk]	-- All Foreign Key Constraints
JOIN [IdaDB_v2].[sys].[foreign_key_columns] AS [fkc] ON [fk].[object_id] = [fkc].[constraint_object_id]	-- All Foreign Key Constraint Columns
JOIN [IdaDB_v2].[sys].[tables] AS [pt] ON [fkc].[referenced_object_id] = [pt].[object_id]	-- Parent/Referenced Table
JOIN [IdaDB_v2].[dbo].[Entity] AS [ept] ON [pt].[name] = [ept].[Name]						-- Parent Entity
JOIN [IdaDB_v2].[sys].[all_columns] AS [ptfc] ON [pt].[object_id] = [ptfc].[object_id] AND [fkc].[referenced_column_id] = [ptfc].[column_id]	-- Parent/Referenced Table Column
JOIN [IdaDB_v2].[sys].[tables] AS [ct] ON [fkc].[parent_object_id] = [ct].[object_id]	-- Child Table
JOIN [IdaDB_v2].[dbo].[Entity] AS [ect] ON [ct].[name] = [ect].[Name]					-- Child Entity
JOIN [IdaDB_v2].[sys].[all_columns] AS [ctfc] ON [ct].[object_id] = [ctfc].[object_id] AND [fkc].[parent_column_id] = [ctfc].[column_id]		-- Child Table Column
WHERE
	[pt].[name] = 'LookupValue'