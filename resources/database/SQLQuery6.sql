DECLARE @DateStart DATETIME = DATEADD(YEAR, DATEDIFF(YEAR, 0, GETDATE()), 0);
DECLARE @DateEnd DATETIME = DATEADD(YEAR, DATEDIFF(YEAR, 0, GETDATE()) + 1, -1);


SELECT @DateStart [@DateStart], @DateEnd [@DateEnd]

SELECT DATEADD(DAY, RAND() * DATEDIFF(DAY, @DateStart, @DateEnd), @DateStart)

;WITH [rand] AS (
	SELECT RAND() AS [GenNumber]
)
, [dates] AS (
	SELECT
		1 AS [DayAdd]
		,DATEADD(DAY, [rand].[GenNumber] * DATEDIFF(DAY, @DateStart, @DateEnd), @DateStart) AS [StartDate]
		,DATEADD(DAY, [rand].[GenNumber] * DATEDIFF(DAY, DATEADD(DAY, [rand].[GenNumber], @DateStart), @DateEnd), @DateStart) AS [EndDate]
	FROM [rand]
	UNION ALL
	SELECT
		([DayAdd] + 1) AS [DayAdd]
		,DATEADD(DAY, DATEDIFF(DAY, DATEADD(DAY, [DayAdd], [StartDate]), [EndDate]), [StartDate]) AS [StartDate]
		,DATEADD(DAY, DATEDIFF(DAY, DATEADD(DAY, [DayAdd], [StartDate]), [EndDate]), [StartDate]) AS [EndDate]
	FROM [dates], [rand]
	WHERE [DayAdd] <= 100
)
SELECT
	--CASE WHEN [EndDate] > [StartDate] THEN [EndDate] ELSE [StartDate] END AS [StartDate]
	--,CASE WHEN [EndDate] < [StartDate] THEN [EndDate] ELSE [StartDate] END AS [EndDate]
	*
FROM [dates]
ORDER BY
	[StartDate]