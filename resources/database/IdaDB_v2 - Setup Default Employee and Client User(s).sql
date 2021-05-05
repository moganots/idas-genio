USE [IdaDB_v2];
GO

;WITH [cte] ([EmployeeId],[ClientId],[EmailAddress]) AS (
SELECT [EmployeeId], NULL AS [ClientId], [EmailAddress] FROM [IdaDB_v2].[dbo].[ContactDetail] WHERE [EmployeeId] IS NOT NULL UNION
SELECT NULL AS [EmployeeId], [ClientId], [EmailAddress] FROM [IdaDB_v2].[dbo].[ContactDetail] WHERE [ClientId] IS NOT NULL
)
SELECT
	[EmployeeId],
	[ClientId],
	[EmailAddress],
	'admin@123' AS [Password],
	0 AS [IsLocked],
	1 AS [IsActive],
	(SELECT [_id] FROM [IdaDB_v2].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]