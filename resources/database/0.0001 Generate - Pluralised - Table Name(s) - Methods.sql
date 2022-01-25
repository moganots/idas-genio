USE [IdasGenioDb]
GO

;WITH [cte] AS (
	SELECT
		[name]
		, CASE
			WHEN RIGHT([name], 1) = 's' THEN CONCAT([name], 'es')
			WHEN RIGHT([name], 1) = 'y' THEN CONCAT(LEFT([name], LEN([name]) - 1), 'ies')
			ELSE CONCAT([name], 's')
			END AS [namePluralised]
	FROM [sys].[tables]
	WHERE
		([type] IN ('U'))
)
SELECT
	*
FROM (
	SELECT
		[name]
		,[namePluralised]
		,'
  const get' + [namePluralised] + ' = () => {
    return database.' + [namePluralised] + ';
  }' AS [jsonContextGetMethod]
  , 'get' + [namePluralised] + ' : get' + [namePluralised] + ',' AS [jsonContextReturnMethod]
	FROM [cte]
) AS [cte]