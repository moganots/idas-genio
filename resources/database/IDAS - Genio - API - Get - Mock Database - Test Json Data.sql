
/*
 |-- --------------------------------------------------------------------------------------------------------------
 |-- Define JsonData temp tableS (#TableDefinition, #TableJsonData)
 |-- --------------------------------------------------------------------------------------------------------------
*/
CREATE TABLE #TableDefinition (
	[SchemaName][nvarchar](255),
	[TableName][nvarchar](255),
	[ExecJsonQuery] AS ('SELECT * FROM [IdasGenioDb].[' + [SchemaName] + '].[' + [TableName] + '] FOR JSON PATH')
);
CREATE TABLE #TableJsonData (
	[SchemaName][nvarchar](255),
	[TableName][nvarchar](255),
	[JsonData][nvarchar](max) NULL
);

/*
 |-- --------------------------------------------------------------------------------------------------------------
 |-- Insert into JsonData temp table (#TableDefinition)
 |-- --------------------------------------------------------------------------------------------------------------
*/
INSERT INTO #TableDefinition([SchemaName], [TableName])
SELECT
	[s].[name] AS [SchemaName]
	, [t].[name] AS [TableName]
FROM [IdasGenioDb].[sys].[tables] AS [t]
JOIN [IdasGenioDb].[sys].[schemas] AS [s] ON [t].[schema_id] = [s].[schema_id];

/*
 |-- --------------------------------------------------------------------------------------------------------------
 |-- Setup CURSOR FOR SELECT FROM temp table (#TableDefinition)
 |-- --------------------------------------------------------------------------------------------------------------
*/
DECLARE @SchemaName NVARCHAR(255);
DECLARE @TableName NVARCHAR(255);
DECLARE @ExecJsonQuery NVARCHAR(max);
DECLARE Cursor_Tables CURSOR FOR
	SELECT
		[SchemaName]
		, [TableName]
		, [ExecJsonQuery]
	FROM #TableDefinition

/*
 |-- --------------------------------------------------------------------------------------------------------------
 |-- Open and Fetch from CURSOR
 |-- --------------------------------------------------------------------------------------------------------------
*/
OPEN Cursor_Tables  
FETCH NEXT FROM Cursor_Tables INTO @SchemaName, @TableName, @ExecJsonQuery

WHILE @@FETCH_STATUS = 0  
BEGIN
	EXEC('
		DECLARE @SchemaName NVARCHAR(255) = ''' + @SchemaName + ''';
		DECLARE @TableName NVARCHAR(255) = ''' + @TableName + ''';
		DECLARE @JsonData NVARCHAR(MAX) = REPLACE((' + @ExecJsonQuery + '), ''"' + @TableName + 's"'', ''' + @TableName + ''')

		SET @JsonData = REPLACE(TRIM(SUBSTRING(@JsonData, 2, LEN(@JsonData) - 2)), ''"'','''''''');
		SET @JsonData = CASE WHEN LEN(@JsonData) > 0 THEN @JsonData ELSE NULL END;

		INSERT INTO #TableJsonData
		SELECT @SchemaName AS [SchemaName], @TableName AS [TableName], @JsonData AS [JsonData]
	');
	
	/*
	 |-- --------------------------------------------------------------------------------------------------------------
	 |-- Fetch CURSOR
	 |-- --------------------------------------------------------------------------------------------------------------
	*/
	FETCH NEXT FROM Cursor_Tables INTO @SchemaName, @TableName, @ExecJsonQuery
END

/*
 |-- --------------------------------------------------------------------------------------------------------------
 |-- Close and Deallocate CURSOR
 |-- --------------------------------------------------------------------------------------------------------------
*/
CLOSE Cursor_Tables  
DEALLOCATE Cursor_Tables

SELECT
	[SchemaName],
	[TableName],
	[JsonData],
	'public static ' + [TableName] + ' = [' + [JsonData] + '];' AS [jsJsonData]
FROM (
	SELECT
		[SchemaName],
		[TableName],
		REPLACE(ISNULL([JsonData], '{}'), 'n''s', 'ns') AS [JsonData]
	FROM #TableJsonData
) AS [tjd]

/*
 |-- --------------------------------------------------------------------------------------------------------------
 |-- Drop JsonData temp table (#TableDefinition)
 |-- --------------------------------------------------------------------------------------------------------------
*/
DROP TABLE #TableDefinition
DROP TABLE #TableJsonData