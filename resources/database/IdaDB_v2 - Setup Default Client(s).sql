USE [IdaDB_v2];
GO

;WITH [cte] ([SalutationId],[Name],[Surname],[CompanyName],[IndustryTypeId],[IdNumber],[RegistrationNumber],[VATNumber]) AS (
SELECT 'Mr' AS [SalutationId], 'Close' [Name], 'Corporation' [Surname], 'Close Corporation' [CompanyName], 'Construction Services' [IndustryTypeId], '7707288001087' [IdNumber], '2009/222222/23' [RegistrationNumber], NULL [VATNumber] UNION
SELECT 'Mr' AS [SalutationId], 'Private' [Name], 'Company' [Surname], 'Private Company' [CompanyName], 'Entertainment Industry' [IndustryTypeId], '8105252255087' [IdNumber], '2016/222222/07' [RegistrationNumber], '4220122222' [VATNumber]
)
SELECT
	(SELECT [lv].[_id] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv] JOIN [IdaDB_v2].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lv].[Value] = [cte].[SalutationId]) AS [SalutationId],
	[cte].[Name],
	[cte].[Surname],
	[cte].[CompanyName],
	(SELECT [lv].[_id] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv] JOIN [IdaDB_v2].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'IndustryType' AND [lv].[Value] = [cte].[IndustryTypeId]) AS [IndustryTypeId],
	[cte].[IdNumber],
	[cte].[RegistrationNumber],
	[cte].[VATNumber],
	(SELECT [_id] FROM [IdaDB_v2].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]