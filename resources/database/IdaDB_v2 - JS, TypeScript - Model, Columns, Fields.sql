USE [IdasGenioDb];
GO

DECLARE @EntityName VARCHAR(255) = 'Supplier'

SELECT
	'{id: ' + CAST([ac].[column_id] AS VARCHAR(100)) + ', name: ''' + [ac].[name] + ''', canShow: ' + 
	CASE
		WHEN [ac].[name] IN ('_id', 'CreatedBy', 'DateCreated', 'ModifiedBy', 'DateModified', 'PasswordHash', 'SessionToken')
			THEN 'false'
		ELSE 'true'
	END + ', canSort: true, canGroup: false},'
FROM [dbo].[Entity] AS [e], [sys].[tables] AS [t], [sys].[all_columns] AS [ac]
WHERE
	([e].[Name] = @EntityName)
	AND ([e].[Name] = [t].[name])
	AND ([t].[object_id] = [ac].[object_id])
ORDER BY
	[ac].[column_id]