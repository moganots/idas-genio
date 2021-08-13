USE [IdasGenioDb];
GO

DECLARE @TableName NVARCHAR(255);
DECLARE @StoredProcedureName NVARCHAR(255);
DECLARE @StoredProcedureEditOrUpdateParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureEditOrUpdateColumnNames NVARCHAR(MAX) = '';
DECLARE @ExecQuery NVARCHAR(MAX) = '';
DECLARE Cursor_Table_Names CURSOR FOR
	SELECT [Name] FROM [sys].[tables]

OPEN Cursor_Table_Names
FETCH NEXT FROM Cursor_Table_Names INTO @TableName

WHILE(@@FETCH_STATUS = 0)
BEGIN
	SELECT
		@StoredProcedureEditOrUpdateParameters += CASE
			WHEN [ac].[name] NOT IN ('CreatedBy', 'DateCreated', 'DateModified')
				THEN CHAR(9) + '@' + [ac].[name] + ' [' + [ty].[name] + ']' +
					CASE
						WHEN [ty].[name] IN ('char', 'varchar', 'nchar', 'nvarchar', 'text', 'ntext')
							THEN '(' + CASE WHEN [ac].[max_length] < 0 THEN 'MAX' ELSE CAST([ac].[max_length] AS NVARCHAR(MAX)) END + ')'
						ELSE ''
					END + ',' + CHAR(13)
				ELSE ''
			END,
		@StoredProcedureEditOrUpdateColumnNames += CASE
			WHEN [ac].[name] NOT IN ('_id', 'CreatedBy', 'DateCreated')
				THEN CHAR(9) + CHAR(9) + '[' + [ac].[name] + '] = ' + 
					CASE
						WHEN [ac].[name] IN ('DateModified')
							THEN 'GETDATE()'
						ELSE '@' + [ac].[name]
					END + ',' + CHAR(13)
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

	SET @StoredProcedureEditOrUpdateParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureEditOrUpdateParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureEditOrUpdateParameters))) - 2)));
	SET @StoredProcedureEditOrUpdateColumnNames = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureEditOrUpdateColumnNames)), 1, LEN(LTRIM(RTRIM(@StoredProcedureEditOrUpdateColumnNames))) - 2)));
	
	PRINT( @StoredProcedureEditOrUpdateParameters );
	PRINT( @StoredProcedureEditOrUpdateColumnNames );

	SET @StoredProcedureName = N'[dbo].[spEditOrUpdate_' + @TableName + ']';
	SET @ExecQuery = CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + '-- Author:		Thabang Mogano'
	SET @ExecQuery += CHAR(13) + '-- Create date: ' + (SELECT CONVERT(VARCHAR, GETDATE(), 23))
	SET @ExecQuery += CHAR(13) + '-- Description:	[dbo].[' + @TableName + '] table Edit (UPDATE) stored procedure'
	SET @ExecQuery += CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + 'CREATE PROCEDURE ' + @StoredProcedureName
	SET @ExecQuery += CHAR(13) + '('
	SET @ExecQuery += CHAR(13) + @StoredProcedureEditOrUpdateParameters
	SET @ExecQuery += CHAR(13) + ')'
	SET @ExecQuery += CHAR(13) + 'AS'
	SET @ExecQuery += CHAR(13) + 'BEGIN'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET NOCOUNT ON;'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'UPDATE [dbo].[' + @TableName + ']'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET'
	SET @ExecQuery += CHAR(13) + @StoredProcedureEditOrUpdateColumnNames
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
	
	SET @StoredProcedureEditOrUpdateParameters = '';
	SET @StoredProcedureEditOrUpdateColumnNames = '';

	FETCH NEXT FROM Cursor_Table_Names INTO @TableName
END


CLOSE Cursor_Table_Names
DEALLOCATE Cursor_Table_Names