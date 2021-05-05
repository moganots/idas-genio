USE [IdaDB_v2];
GO

;WITH [cte] ([EmployeeId],[DepartmentId],[ClientId],[RecipientsName],[TelephoneNumber],[OfficeTelephoneNumber],[MobileTelephoneNumber],[EmailAddress],[PreferredLanguageId],[UseEmailAddress],[UseTelephoneNumber],[Website],[AddressLine1],[AddressLine2],[City],[ProvinceId],[PostalCode],[Country]) AS (
SELECT 'Jane Doe' AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], 'Jane Doe' AS [RecipientsName], '27311234567' AS [TelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'Jane.Doe@genio.idas.co.za' AS [EmailAddress], 'English' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'John Doe' AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], 'John Doe' AS [RecipientsName], '27311234568' AS [TelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'John.Doe@genio.idas.co.za' AS [EmailAddress], 'English' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'Good Job' AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], 'Good Job' AS [RecipientsName], '27311234569' AS [TelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'Good.Job@genio.idas.co.za' AS [EmailAddress], 'IsiZulu' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'Bad Work' AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], 'Bad Work' AS [RecipientsName], '27311234570' AS [TelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'Bad.Work@genio.idas.co.za' AS [EmailAddress], 'IsiZulu' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'Joe Soap' AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], 'Joe Soap' AS [RecipientsName], '27311234571' AS [TelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'Joe.Soap@genio.idas.co.za' AS [EmailAddress], 'English' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT NULL AS [EmployeeId], NULL AS [DepartmentId], 'Close Corporation' AS [ClientId], 'Close Corporation' AS [RecipientsName], '27311234572' AS [TelephoneNumber], '27311234572' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'client@closecorporation.co.za' AS [EmailAddress], 'IsiXhosa' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.closecorporation.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT NULL AS [EmployeeId], NULL AS [DepartmentId], 'Private Company' AS [ClientId], 'Private Company' AS [RecipientsName], '27311234573' AS [TelephoneNumber], '27311234573' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'client@privatecompany.co.za' AS [EmailAddress], 'English' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.privatecompany.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country]
)
SELECT
	[e].[_id] AS [EmployeeId],
	[d].[_id] AS [DepartmentId],
	[c].[_id] AS [ClientId],
	[RecipientsName],
	[TelephoneNumber],
	[OfficeTelephoneNumber],
	[MobileTelephoneNumber],
	[EmailAddress],
	(SELECT [lv].[_id] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv] JOIN [IdaDB_v2].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'PreferredLanguage' AND [lv].[Value] = [cte].[PreferredLanguageId]) AS [PreferredLanguageId],
	[UseEmailAddress],
	[UseTelephoneNumber],
	[Website],
	[AddressLine1],
	[AddressLine2],
	[City],
	(SELECT [lv].[_id] FROM [IdaDB_v2].[dbo].[LookupValue] AS [lv] JOIN [IdaDB_v2].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Province' AND [lv].[Value] = [cte].[ProvinceId]) AS [ProvinceId],
	[PostalCode],
	[Country],
	(SELECT [_id] FROM [IdaDB_v2].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
LEFT JOIN [IdaDB_v2].[dbo].[Employee] AS [e] ON [cte].[EmployeeId] = ([e].[Name] + ' ' + [e].[Surname])
LEFT JOIN [IdaDB_v2].[dbo].[Department] AS [d] ON [cte].[DepartmentId] = [d].[Name]
LEFT JOIN [IdaDB_v2].[dbo].[Client] AS [c] ON [cte].[ClientId] = ([c].[Name] + ' ' + [c].[Surname])