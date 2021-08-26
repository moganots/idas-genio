USE [IdasGenioDb];
GO

DECLARE @TableName NVARCHAR(255) = 'CalendarEvent';

DECLARE @StoredProcedureFetchOrSelectParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureFetchOrSelectColumnNames NVARCHAR(MAX) = '';
DECLARE @StoredProcedureFetchOrSelectObjectColumnNames NVARCHAR(MAX) = '';
DECLARE @StoredProcedureFetchOrSelectWhereParameters NVARCHAR(MAX) = '';
DECLARE @ExecQuery NVARCHAR(MAX) = '';

-- === Setup: Fetch (SELECT) store procedure
-- === Setup: @StoredProcedureFetchOrSelectParameters
-- === Setup: @StoredProcedureFetchOrSelectColumnNames
-- === Setup: @StoredProcedureFetchOrSelectWhereParameters
SELECT
	@StoredProcedureFetchOrSelectParameters += CHAR(9) + '@' + [ac].[name] + ' [' + [ty].[name] + ']' +
		CASE
			WHEN [ty].[name] IN ('char', 'varchar', 'nchar', 'nvarchar', 'text', 'ntext')
				THEN '(' + CASE WHEN [ac].[max_length] < 0 THEN 'MAX' ELSE CAST([ac].[max_length] AS NVARCHAR(MAX)) END + ')'
			ELSE ''
		END + ' = NULL,' + CHAR(13),
	@StoredProcedureFetchOrSelectColumnNames += CHAR(9) + CHAR(9) + '[t].[' + [ac].[name] + '],' + CHAR(13),
	@StoredProcedureFetchOrSelectWhereParameters += CHAR(9) + CHAR(9) + 
	CASE
		WHEN [ac].[column_id] <> 1
			THEN 'AND (@' + [ac].[name] + ' IS NULL OR [t].[' + [ac].[name] + '] = @' + [ac].[name] + ')'
		ELSE '(@' + [ac].[name] + ' IS NULL OR [t].[' + [ac].[name] + '] = @' + [ac].[name] + ')'
	END + CHAR(13)
FROM [sys].[tables] AS [t], [sys].[all_columns] AS [ac], [sys].[types] AS [ty]
WHERE
	([t].[name] = @TableName)
	AND ([t].[object_id] = [ac].[object_id])
	AND ([ac].[system_type_id] = [ty].[system_type_id])
	AND ([ty].[name] NOT IN('sysname'))
ORDER BY
	[ac].[column_id]
	
-- === Setup: Fetch (SELECT) store procedure
-- === Setup: @StoredProcedureFetchOrSelectObjectColumnNames (Multi query (select) column(s))
SELECT
	@StoredProcedureFetchOrSelectObjectColumnNames += CHAR(9) + CHAR(9) + 
		CASE
			WHEN [pac].[name] IN ('CreatedBy', 'ModifiedBy') THEN LOWER(LEFT([pac].[name], 1)) + RIGHT([pac].[name], LEN([pac].[name]) - 1)
			ELSE  LEFT([pac].[name], LEN([pac].[name]) - 2)
		END + '(NULL)' + CHAR(13)
FROM [sys].[tables] AS [t], [sys].[all_columns] AS [pac], [sys].[foreign_key_columns] AS [fkc], [sys].[tables] AS [rfkct]
WHERE
	([t].[name] = @TableName)
	AND ([t].[object_id] = [pac].[object_id])
	AND ([t].[object_id] = [fkc].[parent_object_id])
	AND ([pac].[column_id] = [fkc].[parent_column_id])
	AND ([fkc].[referenced_object_id] = [rfkct].[object_id])
	
SET @StoredProcedureFetchOrSelectObjectColumnNames = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureFetchOrSelectObjectColumnNames)), 1, LEN(LTRIM(RTRIM(@StoredProcedureFetchOrSelectObjectColumnNames))) - 2)));

PRINT @StoredProcedureFetchOrSelectObjectColumnNames