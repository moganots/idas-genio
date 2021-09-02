;WITH [cte] AS (
SELECT 'Company Name' AS [ConfigurationType], 'CompanyName' AS [Name], 'IDAS' AS [Value] UNION
SELECT 'Application Name' AS [ConfigurationType], 'ApplicationName' AS [Name], 'Genio' AS [Value] UNION
SELECT 'Network Protocol' AS [ConfigurationType], 'AppProtocol' AS [Name], 'http' AS [Value] UNION
SELECT 'Api Host' AS [ConfigurationType], 'AppHost' AS [Name], 'localhost' AS [Value] UNION
SELECT 'Api Port' AS [ConfigurationType], 'AppPort' AS [Name], '4237' AS [Value] UNION
SELECT 'Network Protocol' AS [ConfigurationType], 'ApiProtocol' AS [Name], 'http' AS [Value] UNION
SELECT 'Api Host' AS [ConfigurationType], 'ApiHost' AS [Name], 'localhost' AS [Value] UNION
SELECT 'Api Port' AS [ConfigurationType], 'ApiPort' AS [Name], '4238' AS [Value] UNION
SELECT 'Security Key' AS [ConfigurationType], 'AppEncryptionKey' AS [Name], '0x390044003600300031003300390046002D0038004600450045002D0034003100300044002D0042003800360036002D00410045003200330044003300330044003100320044003300310044004000530020002D002000470033004E003100300020002D002000320020005400680065007300730061006C006F006E00690061006E007300200033003A003300' AS [Value] UNION
SELECT 'Security Key' AS [ConfigurationType], 'AppEncryptionSaltCount' AS [Name], '10' AS [Value] UNION
SELECT 'Path Directory' AS [ConfigurationType], 'ApiLogDirectory' AS [Name], '/data/{0}/{1}/api/logs/{2}' AS [Value] UNION
SELECT 'Path File' AS [ConfigurationType], 'ApiLogFile' AS [Name], '{0}.{1}.api.{2}.logs' AS [Value] UNION
SELECT 'Path Directory' AS [ConfigurationType], 'AppLogDirectory' AS [Name], '/data/{0}/{1}/app/logs/{2}' AS [Value] UNION
SELECT 'Path File' AS [ConfigurationType], 'AppLogFile' AS [Name], '{0}.{1}.app.{2}.logs' AS [Value] UNION
SELECT 'Path Directory' AS [ConfigurationType], 'AppAttachmentsDirectory' AS [Name], '/data/{0}/{1}/secure/attachments' AS [Value]
)
SELECT
	[lv].[_id] AS [ConfigurationTypeId]
	,[cte].[Name]
	,[cte].[Value]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
LEFT JOIN [dbo].[LookupValue] AS [lv] ON ([cte].[ConfigurationType] = [lv].[Value]);