USE [IdasGenioDb];
GO

DECLARE @TableName NVARCHAR(255);
DECLARE @StoredProcedureName NVARCHAR(255);
DECLARE @StoredProcedureArchiveOrDeleteParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureArchiveOrDeleteColumnNames NVARCHAR(MAX) = '';
DECLARE @ExecQuery NVARCHAR(MAX) = '';
DECLARE Cursor_Table_Names CURSOR FOR
	SELECT [Name] FROM [sys].[tables]

OPEN Cursor_Table_Names
FETCH NEXT FROM Cursor_Table_Names INTO @TableName

WHILE(@@FETCH_STATUS = 0)
BEGIN
	SELECT
		@StoredProcedureArchiveOrDeleteParameters += CASE
			WHEN [ac].[name] IN ('_id', 'ModifiedBy')
				THEN CHAR(9) + '@' + [ac].[name] + ' [' + [ty].[name] + ']' +
					CASE
						WHEN [ty].[name] IN ('char', 'varchar', 'nchar', 'nvarchar', 'text', 'ntext')
							THEN '(' + CASE WHEN [ac].[max_length] < 0 THEN 'MAX' ELSE CAST([ac].[max_length] AS NVARCHAR(MAX)) END + ')'
						ELSE ''
					END + ',' + CHAR(13)
				ELSE ''
			END,
		@StoredProcedureArchiveOrDeleteColumnNames += CASE
			WHEN [ac].[name] IN ('IsActive', 'ModifiedBy', 'DateModified')
				THEN CHAR(9) + CHAR(9) + '[' + [ac].[name] + '] = ' + 
					CASE
						WHEN [ac].[name] IN ('DateModified')
							THEN 'GETDATE()'
						WHEN [ac].[name] IN ('IsActive')
							THEN '0'
						ELSE '@' + [ac].[name]
					END + ',' + CHAR(13)
				ELSE ''
			END
	FROM [sys].[tables] AS [t], [sys].[all_columns] AS [ac], [sys].[types] AS [ty]
	WHERE
		([t].[name] = @TableName)
		AND ([t].[object_id] = [ac].[object_id])
		AND ([ac].[system_type_id] = [ty].[system_type_id])
		AND ([ac].[name] IN ('_id', 'IsActive', 'ModifiedBy', 'DateModified'))
		AND ([ac].[is_computed] = 0)
		AND ([ty].[name] NOT IN('sysname'))
	ORDER BY
		[ac].[column_id]

	SET @StoredProcedureArchiveOrDeleteParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureArchiveOrDeleteParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureArchiveOrDeleteParameters))) - 2)));
	SET @StoredProcedureArchiveOrDeleteColumnNames = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureArchiveOrDeleteColumnNames)), 1, LEN(LTRIM(RTRIM(@StoredProcedureArchiveOrDeleteColumnNames))) - 2)));
	
	PRINT( @StoredProcedureArchiveOrDeleteParameters );
	PRINT( @StoredProcedureArchiveOrDeleteColumnNames );

	SET @StoredProcedureName = N'[dbo].[spArchiveOrDelete_' + @TableName + ']';
	SET @ExecQuery = CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + '-- Author:		Thabang Mogano'
	SET @ExecQuery += CHAR(13) + '-- Create date: ' + (SELECT CONVERT(VARCHAR, GETDATE(), 23))
	SET @ExecQuery += CHAR(13) + '-- Description:	[dbo].[' + @TableName + '] table Archive (DELETE) stored procedure'
	SET @ExecQuery += CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + 'CREATE PROCEDURE ' + @StoredProcedureName
	SET @ExecQuery += CHAR(13) + '('
	SET @ExecQuery += CHAR(13) + @StoredProcedureArchiveOrDeleteParameters
	SET @ExecQuery += CHAR(13) + ')'
	SET @ExecQuery += CHAR(13) + 'AS'
	SET @ExecQuery += CHAR(13) + 'BEGIN'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET NOCOUNT ON;'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'UPDATE [dbo].[' + @TableName + ']'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET'
	SET @ExecQuery += CHAR(13) + @StoredProcedureArchiveOrDeleteColumnNames
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'WHERE'
	SET @ExecQuery += CHAR(13) + CHAR(9) + CHAR(9) + '[_id] = @_id;'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SELECT * FROM [dbo].[' + @TableName + '] WHERE [_id] = @_id;'
	SET @ExecQuery += CHAR(13) + 'END';	

	IF (OBJECT_ID(@StoredProcedureName, 'P') IS NOT NULL)
	BEGIN
		EXEC ('DROP PROCEDURE ' + @StoredProcedureName);
		PRINT ('>> Completed > Drop procedure ' + @StoredProcedureName + ', successful');
	END

	PRINT ( @ExecQuery );
	EXEC ( @ExecQuery );
	PRINT ('>> Completed > Create procedure ' + @StoredProcedureName + ', successful');
	
	SET @StoredProcedureArchiveOrDeleteParameters = '';
	SET @StoredProcedureArchiveOrDeleteColumnNames = '';

	FETCH NEXT FROM Cursor_Table_Names INTO @TableName
END


CLOSE Cursor_Table_Names
DEALLOCATE Cursor_Table_Names