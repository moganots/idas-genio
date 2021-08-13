USE [IdasGenioDb];
GO

SELECT
	*
	,',[' + LOWER(LTRIM(RTRIM((SELECT [dbo].[GetFirstCharacters]((SELECT [dbo].[SplitCamelCase] ([e].[Name]))))))) + '].[' + [ac].[name] + ']' AS [ColumnName]
	,',[' + LOWER(LTRIM(RTRIM((SELECT [dbo].[GetFirstCharacters]((SELECT [dbo].[SplitCamelCase] ([e].[Name]))))))) + '].[' + [ac].[name] + '] AS ''' + [e].[name] + '.' + [ac].[name] + '''' AS [JsonProperty] -- (LTRIM(RTRIM((SELECT [dbo].[GetFirstCharacters]((SELECT [dbo].[SplitCamelCase] ([e].[Name])))))))
FROM [dbo].[Entity] AS [e]
JOIN [sys].[tables] AS [t] ON ([e].[Name] = [t].[name])
JOIN [sys].[all_columns] AS [ac] ON ([t].[object_id] = [ac].[object_id])
WHERE
	([e].[Name] IN ('menuitem'))
ORDER BY
	[ac].[column_id]