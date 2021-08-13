USE [IdasGenioDb];
GO

DECLARE @TableName NVARCHAR(255);
DECLARE @StoredProcedureName NVARCHAR(255);
DECLARE @StoredProcedureCreateOrInsertParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureCreateOrInsertColumnNames NVARCHAR(MAX) = '';
DECLARE @StoredProcedureCreateOrInsertValueParameters NVARCHAR(MAX) = '';
DECLARE @ExecQuery NVARCHAR(MAX) = '';
DECLARE Cursor_Table_Names CURSOR FOR
	SELECT [Name] FROM [sys].[tables]

OPEN Cursor_Table_Names
FETCH NEXT FROM Cursor_Table_Names INTO @TableName

WHILE(@@FETCH_STATUS = 0)
BEGIN
	SELECT
		@StoredProcedureCreateOrInsertParameters += CASE
			WHEN [ac].[name] NOT IN ('_id', 'IsActive', 'CreatedBy', 'DateCreated', 'ModifiedBy', 'DateModified')
				THEN CHAR(9) + '@' + [ac].[name] + ' [' + [ty].[name] + ']' +
					CASE
						WHEN [ty].[name] IN ('char', 'varchar', 'nchar', 'nvarchar', 'text', 'ntext')
							THEN '(' + CASE WHEN [ac].[max_length] < 0 THEN 'MAX' ELSE CAST([ac].[max_length] AS NVARCHAR(MAX)) END + ')'
						ELSE ''
					END + ',' + CHAR(13)
				ELSE ''
			END,
		@StoredProcedureCreateOrInsertColumnNames += CASE
			WHEN [ac].[name] NOT IN ('_id', 'IsActive', 'CreatedBy', 'DateCreated', 'ModifiedBy', 'DateModified')
				THEN '[' + [ac].[name] + '], '
				ELSE ''
			END,
		@StoredProcedureCreateOrInsertValueParameters += CASE
			WHEN [ac].[name] NOT IN ('_id', 'IsActive', 'CreatedBy', 'DateCreated', 'ModifiedBy', 'DateModified')
				THEN CHAR(9) + CHAR(9) + '@' + [ac].[name] + ',' + CHAR(13)
				ELSE ''
			END
	FROM [sys].[tables] AS [t], [sys].[all_columns] AS [ac], [sys].[types] AS [ty]
	WHERE
		([t].[name] = @TableName)
		AND ([t].[object_id] = [ac].[object_id])
		AND ([ac].[system_type_id] = [ty].[system_type_id])
		AND ([ac].[is_computed] = 0)
		AND ([ty].[name] NOT IN('sysname'))
	ORDER BY
		[ac].[column_id]

	SET @StoredProcedureCreateOrInsertParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureCreateOrInsertParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureCreateOrInsertParameters))) - 2)));
	SET @StoredProcedureCreateOrInsertColumnNames = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureCreateOrInsertColumnNames)), 1, LEN(LTRIM(RTRIM(@StoredProcedureCreateOrInsertColumnNames))) - 1)));
	SET @StoredProcedureCreateOrInsertValueParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureCreateOrInsertValueParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureCreateOrInsertValueParameters))) - 2)));
	
	PRINT( @StoredProcedureEditOrUpdateParameters );
	PRINT( @StoredProcedureEditOrUpdateColumnNames );
	PRINT( @StoredProcedureCreateOrInsertValueParameters );

	SET @StoredProcedureName = N'[dbo].[spCreateOrInsert_' + @TableName + ']';
	SET @ExecQuery = CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + '-- Author:		Thabang Mogano'
	SET @ExecQuery += CHAR(13) + '-- Create date: ' + (SELECT CONVERT(VARCHAR, GETDATE(), 23))
	SET @ExecQuery += CHAR(13) + '-- Description:	[dbo].[' + @TableName + '] table Create (INSERT) stored procedure'
	SET @ExecQuery += CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + 'CREATE PROCEDURE ' + @StoredProcedureName
	SET @ExecQuery += CHAR(13) + '('
	SET @ExecQuery += CHAR(13) + @StoredProcedureCreateOrInsertParameters
	SET @ExecQuery += CHAR(13) + ')'
	SET @ExecQuery += CHAR(13) + 'AS'
	SET @ExecQuery += CHAR(13) + 'BEGIN'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET NOCOUNT ON;'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'INSERT INTO [dbo].[' + @TableName + '](' + @StoredProcedureCreateOrInsertColumnNames + ')'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'VALUES ('
	SET @ExecQuery += CHAR(13) + @StoredProcedureCreateOrInsertValueParameters
	SET @ExecQuery += CHAR(13) + CHAR(9) + ');'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SELECT * FROM [dbo].[' + @TableName + '] WHERE [_id] = SCOPE_IDENTITY();'
	SET @ExecQuery += CHAR(13) + 'END';	

	IF (OBJECT_ID(@StoredProcedureName, 'P') IS NOT NULL)
	BEGIN
		EXEC ('DROP PROCEDURE ' + @StoredProcedureName);
		PRINT ('>> Completed > Drop procedure ' + @StoredProcedureName + ', successful');
	END

	PRINT ( @ExecQuery );
	EXEC ( @ExecQuery );
	PRINT ('>> Completed > Create procedure ' + @StoredProcedureName + ', successful');
	
	SET @StoredProcedureCreateOrInsertParameters = '';
	SET @StoredProcedureCreateOrInsertColumnNames = '';
	SET @StoredProcedureCreateOrInsertValueParameters = '';

	FETCH NEXT FROM Cursor_Table_Names INTO @TableName
END


CLOSE Cursor_Table_Names
DEALLOCATE Cursor_Table_Names