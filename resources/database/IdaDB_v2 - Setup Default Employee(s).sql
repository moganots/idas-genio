USE [IdaDB_v2];
GO

;WITH [cte] ([EmployeeNumber],[SalutationId],[Name],[MiddleName],[Surname],[IdNumber],[BirthDate],[GenderId],[EmploymentTypeId],[PositionId],[DepartmentId],[ManagerId],[DateHired],[IsTerminated],[DateTerminated]) AS (
SELECT 'C62302' AS [EmployeeNumber], 'Ms' AS[SalutationId], 'Jane' AS[Name], NULL AS[MiddleName], 'Doe' AS[Surname], '9202204720082' AS[IdNumber], '1992-02-20' AS[BirthDate], 'Female' AS[GenderId], 'Permanent' AS[EmploymentTypeId], 'CEO' AS[PositionId], 'Management' AS[DepartmentId], NULL AS[ManagerId], '2016-01-01' AS[DateHired], 0 AS[IsTerminated], NULL AS[DateTerminated] UNION
SELECT 'M36517' AS [EmployeeNumber], 'Mr' AS[SalutationId], 'John' AS[Name], NULL AS[MiddleName], 'Doe' AS[Surname], '9304195659081' AS[IdNumber], '1993-04-19' AS[BirthDate], 'Male' AS[GenderId], 'Permanent' AS[EmploymentTypeId], 'Managing Director' AS[PositionId], 'Management' AS[DepartmentId], 'Jane Doe' AS[ManagerId], '2016-01-01' AS[DateHired], 0 AS[IsTerminated], NULL AS[DateTerminated] UNION
SELECT 'E37518' AS [EmployeeNumber], 'Mr' AS[SalutationId], 'Good' AS[Name], NULL AS[MiddleName], 'Job' AS[Surname], '9102127508084' AS[IdNumber], '1991-02-12' AS[BirthDate], 'Male' AS[GenderId], 'Permanent' AS[EmploymentTypeId], 'Engineer' AS[PositionId], 'Operations' AS[DepartmentId], 'John Doe' AS[ManagerId], '2016-01-01' AS[DateHired], 0 AS[IsTerminated], NULL AS[DateTerminated] UNION
SELECT 'E95590' AS [EmployeeNumber], 'Mr' AS[SalutationId], 'Bad' AS[Name], NULL AS[MiddleName], 'Work' AS[Surname], '9610136334084' AS[IdNumber], '1996-10-13' AS[BirthDate], 'Male' AS[GenderId], 'Permanent' AS[EmploymentTypeId], 'Engineer' AS[PositionId], 'Operations' AS[DepartmentId], 'Good Job' AS[ManagerId], '2016-07-23' AS[DateHired], 1 AS[IsTerminated], '2018-02-15' AS[DateTerminated] UNION
SELECT 'E87365' AS [EmployeeNumber], 'Mr' AS[SalutationId], 'Joe' AS[Name], NULL AS[MiddleName], 'Soap' AS[Surname], '8502065982080' AS[IdNumber], '1985-02-06' AS[BirthDate], 'Male' AS[GenderId], 'Consultant' AS[EmploymentTypeId], 'Engineer' AS[PositionId], 'Operations' AS[DepartmentId], 'Good Job' AS[ManagerId], '2018-04-30' AS[DateHired], 0 AS[IsTerminated], NULL AS[DateTerminated]
)
SELECT
	[cte].[EmployeeNumber],
	(SELECT [lv].[_id] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv] JOIN [IdaDB_v2].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lv].[Value] = [cte].[SalutationId]) AS [SalutationId],
	[cte].[Name],
	[cte].[MiddleName],
	[cte].[Surname],
	[cte].[IdNumber],
	[cte].[BirthDate],
	(SELECT [lv].[_id] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv] JOIN [IdaDB_v2].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Gender' AND [lv].[Value] = [cte].[GenderId]) AS [GenderId],
	(SELECT [lv].[_id] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv] JOIN [IdaDB_v2].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'EmploymentType' AND [lv].[Value] = [cte].[EmploymentTypeId]) AS [EmploymentTypeId],
	(SELECT [lv].[_id] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv] JOIN [IdaDB_v2].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Position' AND [lv].[Value] = [cte].[PositionId]) AS [PositionId],
	(SELECT [lv].[_id] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv] JOIN [IdaDB_v2].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Department' AND [lv].[Value] = [cte].[DepartmentId]) AS [DepartmentId],
	[e].[_id] AS [ManagerId],
	[cte].[DateHired],
	[cte].[IsTerminated],
	[cte].[DateTerminated],
	(SELECT [_id] FROM [IdaDB_v2].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
LEFT JOIN [IdaDB_v2].[dbo].[Employee] AS [e] ON [cte].[ManagerId] = ([e].[Name] + ' ' + [e].[Surname])