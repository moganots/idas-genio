USE [IdasGenioDb];
GO

DECLARE @TableName NVARCHAR(255);
DECLARE @StoredProcedureName NVARCHAR(255);
DECLARE @StoredProcedureFetchOrSelectParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureFetchOrSelectColumnNames NVARCHAR(MAX) = '';
DECLARE @StoredProcedureFetchOrSelectWhereParameters NVARCHAR(MAX) = '';
DECLARE @ExecQuery NVARCHAR(MAX) = '';
DECLARE Cursor_Table_Names CURSOR FOR
	SELECT [Name] FROM [sys].[tables]

OPEN Cursor_Table_Names
FETCH NEXT FROM Cursor_Table_Names INTO @TableName

WHILE(@@FETCH_STATUS = 0)
BEGIN
	SELECT
		@StoredProcedureFetchOrSelectParameters += CHAR(9) + '@' + [ac].[name] + ' [' + [ty].[name] + ']' +
			CASE
				WHEN [ty].[name] IN ('char', 'varchar', 'nchar', 'nvarchar', 'text', 'ntext')
					THEN '(' + CASE WHEN [ac].[max_length] < 0 THEN 'MAX' ELSE CAST([ac].[max_length] AS NVARCHAR(MAX)) END + ')'
				ELSE ''
			END + ' = NULL,' + CHAR(13),
		@StoredProcedureFetchOrSelectColumnNames += CHAR(9) + CHAR(9) + '[' + [ac].[name] + '],' + CHAR(13),
		@StoredProcedureFetchOrSelectWhereParameters += CHAR(9) + CHAR(9) + 
		CASE
			WHEN [ac].[column_id] <> 1
				THEN 'AND (@' + [ac].[name] + ' IS NULL OR [' + [ac].[name] + '] = @' + [ac].[name] + ')'
			ELSE '(@' + [ac].[name] + ' IS NULL OR [' + [ac].[name] + '] = @' + [ac].[name] + ')'
		END + CHAR(13)
	FROM [sys].[tables] AS [t], [sys].[all_columns] AS [ac], [sys].[types] AS [ty]
	WHERE
		([t].[name] = @TableName)
		AND ([t].[object_id] = [ac].[object_id])
		AND ([ac].[system_type_id] = [ty].[system_type_id])
		AND ([ty].[name] NOT IN('sysname'))
	ORDER BY
		[ac].[column_id]

	SET @StoredProcedureFetchOrSelectParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureFetchOrSelectParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureFetchOrSelectParameters))) - 2)));
	SET @StoredProcedureFetchOrSelectColumnNames = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureFetchOrSelectColumnNames)), 1, LEN(LTRIM(RTRIM(@StoredProcedureFetchOrSelectColumnNames))) - 2)));
	SET @StoredProcedureFetchOrSelectWhereParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureFetchOrSelectWhereParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureFetchOrSelectWhereParameters))) - 1)));
	
	PRINT( @StoredProcedureFetchOrSelectParameters );
	PRINT( @StoredProcedureFetchOrSelectColumnNames );
	PRINT( @StoredProcedureFetchOrSelectWhereParameters );

	SET @StoredProcedureName = N'[dbo].[spFetchOrSelect_' + @TableName + ']';
	SET @ExecQuery = CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + '-- Author:		Thabang Mogano'
	SET @ExecQuery += CHAR(13) + '-- Create date: ' + (SELECT CONVERT(VARCHAR, GETDATE(), 23))
	SET @ExecQuery += CHAR(13) + '-- Description:	[dbo].[' + @TableName + '] table Fetch (SELECT) stored procedure'
	SET @ExecQuery += CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + 'CREATE PROCEDURE ' + @StoredProcedureName
	SET @ExecQuery += CHAR(13) + '('
	SET @ExecQuery += CHAR(13) + @StoredProcedureFetchOrSelectParameters
	SET @ExecQuery += CHAR(13) + ')'
	SET @ExecQuery += CHAR(13) + 'AS'
	SET @ExecQuery += CHAR(13) + 'BEGIN'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET NOCOUNT ON;'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SELECT'
	SET @ExecQuery += CHAR(13) + @StoredProcedureFetchOrSelectColumnNames
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'FROM [dbo].[' + @TableName + ']'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'WHERE'
	SET @ExecQuery += CHAR(13) + @StoredProcedureFetchOrSelectWhereParameters
	SET @ExecQuery += CHAR(13) + 'END';	

	IF (OBJECT_ID(@StoredProcedureName, 'P') IS NOT NULL)
	BEGIN
		EXEC ('DROP PROCEDURE ' + @StoredProcedureName);
		PRINT ('>> Completed > Drop procedure ' + @StoredProcedureName + ', successful');
	END

	PRINT ( @ExecQuery );
	EXEC ( @ExecQuery );
	PRINT ('>> Completed > Create procedure ' + @StoredProcedureName + ', successful');
	
	SET @StoredProcedureFetchOrSelectParameters = '';
	SET @StoredProcedureFetchOrSelectColumnNames = '';
	SET @StoredProcedureFetchOrSelectWhereParameters = '';

	FETCH NEXT FROM Cursor_Table_Names INTO @TableName
END


CLOSE Cursor_Table_Names
DEALLOCATE Cursor_Table_Names