DECLARE @DatabaseName [varchar](255) = 'IdasGenioDb';

IF EXISTS(SELECT TOP 1 [name] FROM [sys].[databases] WHERE [name] = @DatabaseName)
BEGIN
	USE [IdasGenioDb];

 -- GO
	PRINT ('>> Start > Execute Script > 0.2. Insert Test Data - IdasGenioDb');
 -- GO

	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	-- INSERT >> Test >> Employee(s) > [dbo].[Employee]
	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	;WITH [cte] ([EmployeeNumber], [SalutationId], [Name], [MiddleName], [Surname], [IdNumber], [BirthDate], [GenderId], [EmploymentTypeId], [PositionId], [DepartmentId], [ManagerId], [DateHired], [IsTerminated], [DateTerminated]) AS (
	SELECT 'C62302' AS [EmployeeNumber], 'Ms' AS [SalutationId], 'Jane' AS [Name], NULL AS [MiddleName], 'Doe' AS [Surname], 9202204720082 AS [IdNumber], '1992-02-20' AS [BirthDate], 'Female' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'CEO' AS [PositionId], 'Management' AS [DepartmentId], NULL AS [ManagerId], '2016-01-01' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated] UNION
	SELECT 'M36517' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'John' AS [Name], NULL AS [MiddleName], 'Doe' AS [Surname], 9304195659081 AS [IdNumber], '1993-04-19' AS [BirthDate], 'Male' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'Managing Director' AS [PositionId], 'Management' AS [DepartmentId], 'Jane Doe' AS [ManagerId], '2016-01-01' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated] UNION
	SELECT 'E37518' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'Good' AS [Name], NULL AS [MiddleName], 'Job' AS [Surname], 9102127508084 AS [IdNumber], '1991-02-12' AS [BirthDate], 'Male' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'Engineer' AS [PositionId], 'Operations' AS [DepartmentId], 'John Doe' AS [ManagerId], '2016-01-01' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated] UNION
	SELECT 'E95590' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'Bad' AS [Name], NULL AS [MiddleName], 'Job' AS [Surname], 9610136334084 AS [IdNumber], '1996-10-13' AS [BirthDate], 'Male' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'Engineer' AS [PositionId], 'Operations' AS [DepartmentId], 'Good Job' AS [ManagerId], '2016-07-23' AS [DateHired], 1 AS [IsTerminated], '2018-02-15' AS [DateTerminated] UNION
	SELECT 'E87365' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'Joe' AS [Name], NULL AS [MiddleName], 'Soap' AS [Surname], 8502065982080 AS [IdNumber], '1985-02-06' AS [BirthDate], 'Male' AS [GenderId], 'Consultant' AS [EmploymentTypeId], 'Engineer' AS [PositionId], 'Operations' AS [DepartmentId], 'Good Job' AS [ManagerId], '2018-04-30' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated]
	)
	INSERT INTO [dbo].[Employee]([EmployeeNumber], [SalutationId], [Name], [MiddleName], [Surname], [IdNumber], [BirthDate], [GenderId], [EmploymentTypeId], [PositionId], [DepartmentId], [DateHired], [IsTerminated], [DateTerminated], [IsActive], [CreatedBy])
	SELECT
		[cte].[EmployeeNumber],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lvpa].[Value] = [cte].[SalutationId]) AS [SalutationId],
		[cte].[Name],
		[cte].[MiddleName],
		[cte].[Surname],
		[cte].[IdNumber],
		[cte].[BirthDate],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Gender' AND [lvpa].[Value] = [cte].[GenderId]) AS [GenderId],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'EmploymentType' AND [lvpa].[Value] = [cte].[EmploymentTypeId]) AS [EmploymentTypeId],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Position' AND [lvpa].[Value] = [cte].[PositionId]) AS [PositionId],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Department' AND [lvpa].[Value] = [cte].[DepartmentId]) AS [DepartmentId],
		[cte].[DateHired],
		[cte].[IsTerminated],
		[cte].[DateTerminated],
		CASE WHEN [cte].[IsTerminated] = 1 THEN 0 ELSE 1 END [IsActive],
		(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
	FROM [cte]

	UPDATE [e]
	SET
		[e].[ManagerId] = [me].[_id]	
	FROM [dbo].[Employee] AS [e]
	LEFT JOIN [dbo].[Employee] AS [me] ON (
		-- Employee(s): Jane Doe, Bad Job, Manager: John Doe
		(([e].[Name] + ' ' + [e].[Surname]) IN ('Jane Doe', 'Bad Job') AND ([me].[Name] + ' ' + [me].[Surname]) IN ('John Doe'))
		-- Employee(s): John Doe, Manager: Jane Doe
		OR (([e].[Name] + ' ' + [e].[Surname]) IN ('John Doe') AND ([me].[Name] + ' ' + [me].[Surname]) IN ('Jane Doe'))
		-- Employee(s): Joe Soap, Manager: Jane Doe
		OR (([e].[Name] + ' ' + [e].[Surname]) IN ('Joe Soap') AND ([me].[Name] + ' ' + [me].[Surname]) IN ('Bad Job'))
		-- Employee(s): Good Job, Manager: Joe Soap
		OR (([e].[Name] + ' ' + [e].[Surname]) IN ('Good Job') AND ([me].[Name] + ' ' + [me].[Surname]) IN ('Joe Soap'))
	);

 -- GO
	PRINT ('>> Completed INSERT >> Test >> Employee(s) > [dbo].[Employee]')
 -- GO

	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	-- INSERT >> Test >> Client(s) > [dbo].[Client]
	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	;WITH [cte] ([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber]) AS (
	SELECT 'Mr' AS [SalutationId], 'Close' [Name], 'Corporation' [Surname], 'Close Corporation' [CompanyName], 'Construction Services' [IndustryTypeId], '7707288001087' [IdNumber], '2009/222222/23' [RegistrationNumber], NULL [VATNumber] UNION
	SELECT 'Mr' AS [SalutationId], 'Private' [Name], 'Company' [Surname], 'Private Company' [CompanyName], 'Entertainment Industry' [IndustryTypeId], '8105252255087' [IdNumber], '2016/222222/07' [RegistrationNumber], '4220122222' [VATNumber]
	)
	INSERT INTO [dbo].[Client]([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber], [CreatedBy])
	SELECT
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lvpa].[Value] = [cte].[SalutationId]) AS [SalutationId],
		[cte].[Name],
		[cte].[Surname],
		[cte].[CompanyName],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'IndustryType' AND [lvpa].[Value] = [cte].[IndustryTypeId]) AS [IndustryTypeId],
		[cte].[IdNumber],
		[cte].[RegistrationNumber],
		[cte].[VATNumber],
		(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
	FROM [cte];

 -- GO
	PRINT ('>> Completed > INSERT >> Test Data > [dbo].[Client]');
 -- GO

	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	-- INSERT >> Test >> Supplier(s) > [dbo].[Supplier]
	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	;WITH [cte] ([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber], [BankId], [AccountNumber]) AS (
	SELECT 'Ms' AS [SalutationId], 'Thandi' AS [Name], 'Ndaba' AS [Surname], 'Thandi Ndaba Attorneys' AS [CompanyName], 'Attorneys/Law Firms' AS [IndustryTypeId], NULL AS [IdNumber], '2008/222222/23' AS [RegistrationNumber], 4820082222 AS [VATNumber], 'Absa Bank Ltd' AS [BankId], 1234567890123 AS [AccountNumber]
	)
	INSERT INTO [dbo].[Supplier]([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber], [BankId], [AccountNumber], [CreatedBy])
	SELECT
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lvpa].[Value] = [cte].[SalutationId]) AS [SalutationId],
		[cte].[Name],
		[cte].[Surname],
		[cte].[CompanyName],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'IndustryType' AND [lvpa].[Value] = [cte].[IndustryTypeId]) AS [IndustryTypeId],
		[cte].[IdNumber],
		[cte].[RegistrationNumber],
		[cte].[VATNumber],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Bank' AND [lvpa].[Value] = [cte].[BankId]) AS [BankId],
		[cte].[AccountNumber],
		(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
	FROM [cte];

 -- GO
	PRINT ('>> Completed > INSERT >> Test >> Supplier(s) > [dbo].[Supplier]');
 -- GO

	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	-- INSERT >> Test >> ContactDetail(s) > [dbo].[ContactDetail]
	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	;WITH [cte] ([EmployeeId], [ClientId], [SupplierId], [RecipientsName], [EmailAddress], [HomeTelephoneNumber], [OfficeTelephoneNumber], [MobileTelephoneNumber], [PreferredLanguageId], [UseEmailAddress], [UseHomeTelephoneNumber], [UseOfficeTelephoneNumber], [UseMobileTelephoneNumber], [UsePostalAddress], [Website], [AddressLine1], [AddressLine2], [City], [ProvinceId], [PostalCode], [CountryId]) AS (
	SELECT 'Jane Doe' AS [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], 'Jane Doe' AS [RecipientsName], 'Jane.Doe@genio.idas.co.za' AS [EmailAddress], '27311234567' AS [HomeTelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'English' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
	SELECT 'John Doe' AS [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], 'John Doe' AS [RecipientsName], 'John.Doe@genio.idas.co.za' AS [EmailAddress], '27311234568' AS [HomeTelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'English' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
	SELECT 'Good Job' AS [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], 'Good Job' AS [RecipientsName], 'Good.Job@genio.idas.co.za' AS [EmailAddress], '27311234569' AS [HomeTelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'IsiZulu' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
	SELECT 'Bad Job' AS [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], 'Bad Job' AS [RecipientsName], 'Bad.Job@genio.idas.co.za' AS [EmailAddress], '27311234570' AS [HomeTelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'IsiZulu' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
	SELECT 'Joe Soap' AS [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], 'Joe Soap' AS [RecipientsName], 'Joe.Soap@genio.idas.co.za' AS [EmailAddress], '27311234571' AS [HomeTelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'English' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
	SELECT NULL AS [EmployeeId], 'Close Corporation' AS [ClientId], NULL AS [SupplierId], 'Close Corporation' AS [RecipientsName], 'info@closecorporation.co.za' AS [EmailAddress], '27311234572' AS [HomeTelephoneNumber], '27311234572' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'IsiXhosa' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.closecorporation.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
	SELECT NULL AS [EmployeeId], 'Private Company' AS [ClientId], NULL AS [SupplierId], 'Private Company' AS [RecipientsName], 'info@privatecompany.co.za' AS [EmailAddress], '27311234573' AS [HomeTelephoneNumber], '27311234573' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'English' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.privatecompany.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
	SELECT NULL AS [EmployeeId], NULL AS [ClientId], 'Thandi Ndaba' AS [SupplierId], 'Thandi Ndaba Attorneys' AS [RecipientsName], 'info@thandindabaattorneys.co.za' AS [EmailAddress], '27311234573' AS [HomeTelephoneNumber], '27311234573' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'English' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 1 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.thandindabaattorneys.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country]
	)
	INSERT INTO [dbo].[ContactDetail]([EmployeeId], [ClientId], [SupplierId], [RecipientsName], [EmailAddress], [HomeTelephoneNumber], [OfficeTelephoneNumber], [MobileTelephoneNumber], [PreferredLanguageId], [UseEmailAddress], [UseHomeTelephoneNumber], [UseOfficeTelephoneNumber], [UseMobileTelephoneNumber], [UsePostalAddress], [Website], [AddressLine1], [AddressLine2], [City], [ProvinceId], [PostalCode], [CountryId], [CreatedBy])
	SELECT
		[e].[_id] AS [EmployeeId],
		[c].[_id] AS [ClientId],
		[s].[_id] AS [SupplierId],
		[RecipientsName],
		[EmailAddress],
		[HomeTelephoneNumber],
		[OfficeTelephoneNumber],
		[MobileTelephoneNumber],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'PreferredLanguage' AND [lvpa].[Value] = [cte].[PreferredLanguageId]) AS [PreferredLanguageId],
		[UseEmailAddress],
		[UseHomeTelephoneNumber],
		[UseOfficeTelephoneNumber],
		[UseMobileTelephoneNumber],
		[UsePostalAddress],
		[Website],
		[AddressLine1],
		[AddressLine2],
		[City],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Province' AND [lvpa].[Value] = [cte].[ProvinceId]) AS [ProvinceId],
		[PostalCode],
		(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Country' AND [lvpa].[Value] = [cte].[CountryId]) AS [CountryId],
		(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
	FROM [cte]
	LEFT JOIN [dbo].[Employee] AS [e] ON [cte].[EmployeeId] = ([e].[Name] + ' ' + [e].[Surname])
	LEFT JOIN [dbo].[Client] AS [c] ON [cte].[ClientId] = ([c].[Name] + ' ' + [c].[Surname])
	LEFT JOIN [dbo].[Supplier] AS [s] ON [cte].[SupplierId] = ([s].[Name] + ' ' + [s].[Surname]);

 -- GO
	PRINT ('>> Completed > INSERT >> Test >> ContactDetail(s) > [dbo].[ContactDetail]');
 -- GO

	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	-- INSERT >> Test >> Users(s) > Employee, Client, Supplier > [dbo].[User]
	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	INSERT [dbo].[User] ([EmployeeId], [ClientId], [SupplierId], [EmailAddress],[PasswordHash],[UserTypeId],[IsAdmin],[IsLocked],[Avatar],[IsActive],[CreatedBy])
	SELECT
		[e].[_id] AS [EmployeeId]
		,[c].[_id] AS [ClientId]
		,[s].[_id] AS [SupplierId]
		,[EmailAddress]
		,'66c7ba6b2e0c67e2c88bd054334996e0/fc5d35d618c0a2b71a9a9a9719962b9b17ebae00516de2304ea72a160aef742d812cf169c154722659ffe3d0e49e085b365af7a8e4442ed77bf5a74992f0e2b4' AS [PasswordHash]
		,[UserTypeId]
		,0 AS [IsAdmin]
		,ISNULL([e].[IsTerminated], 0) AS [IsLocked]
		,CASE
			WHEN [EmailAddress] IN ('info@thandindabaattorneys.co.za') THEN './assets/img/avatars/avatar-8.png'
			WHEN [EmailAddress] IN ('info@closecorporation.co.za') THEN './assets/img/avatars/avatar-14.png'
			WHEN [EmailAddress] IN ('info@privatecompany.co.za') THEN './assets/img/avatars/avatar-3.png'
			WHEN [EmailAddress] IN ('Bad.Job@genio.idas.co.za') THEN './assets/img/avatars/avatar-19.png'
			WHEN [EmailAddress] IN ('Good.Job@genio.idas.co.za') THEN './assets/img/avatars/avatar-22.png'
			WHEN [EmailAddress] IN ('Jane.Doe@genio.idas.co.za') THEN './assets/img/avatars/avatar-20.png'
			WHEN [EmailAddress] IN ('Joe.Soap@genio.idas.co.za') THEN './assets/img/avatars/avatar-15.png'
			WHEN [EmailAddress] IN ('John.Doe@genio.idas.co.za') THEN './assets/img/avatars/avatar-23.png'
		END AS [Avatar]
		,CASE
			WHEN [e].[_id] IS NOT NULL THEN
				CASE
					WHEN ISNULL([e].[IsTerminated], 0) <> 0 THEN 0
					ELSE [e].[IsActive]
				END
			WHEN [c].[_id] IS NOT NULL THEN [c].[IsActive]
			WHEN [s].[_id] IS NOT NULL THEN [s].[IsActive]
			ELSE 0
		END AS [IsActive]
		,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
	FROM [dbo].[ContactDetail] AS [cd]
	LEFT JOIN [dbo].[Employee] AS [e] ON ([cd].[EmployeeId] = [e].[_id])
	LEFT JOIN [dbo].[Client] AS [c] ON ([cd].[ClientId] = [c].[_id])
	LEFT JOIN [dbo].[Supplier] AS [s] ON ([cd].[SupplierId] = [s].[_id])
	JOIN (
		SELECT
			[lv].[_id] AS [UserTypeId]
			,[lv].[Value] AS [UserType]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'UserType')
			AND ([lv].[Value] IN ('Employee', 'Client', 'Supplier'))
	) AS [ut] ON (
		-- Employee
		(
			[cd].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za', 'John.Doe@genio.idas.co.za', 'Joe.Soap@genio.idas.co.za', 'Bad.Job@genio.idas.co.za', 'Good.Job@genio.idas.co.za')
			AND [ut].[UserType] IN ('Employee')
		)
		-- Client
		OR (
			[cd].[EmailAddress] IN ('info@closecorporation.co.za', 'info@privatecompany.co.za')
			AND [ut].[UserType] IN ('Client')
		)
		-- Supplier
		OR (
			[cd].[EmailAddress] IN ('info@thandindabaattorneys.co.za') AND [ut].[UserType] IN ('Supplier')
		)
	);

 -- GO
	PRINT ('>> Completed > INSERT >> Test >> Users(s) > Employee, Client, Supplier > [dbo].[User]');
 -- GO

	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	-- INSERT >> Test >> Users(s), Group(s) > Employee, Client, Supplier > [dbo].[UserGroup]
	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	INSERT INTO [dbo].[UserGroup] ([UserId],[GroupId],[CreatedBy])
	SELECT
		[u].[_id] AS [UserId]
		,[g].[GroupId]
		,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
	FROM [dbo].[User] AS [u]
	JOIN (
		SELECT
			[lv].[_id] AS [GroupId]
			,[lv].[Value] AS [Group]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'Group')
	) AS [g] ON (
		-- Administrators, Employees, Managers
		(
			[u].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za', 'John.Doe@genio.idas.co.za')
			AND [g].[Group] IN ('Administrators', 'Employees', 'Managers')
		)
		-- Clients
		OR (
			[u].[EmailAddress] IN ('info@closecorporation.co.za', 'info@privatecompany.co.za')
			AND [g].[Group] IN ('Clients')
		)
		-- Employees
		OR (
			[u].[EmailAddress] IN ('Joe.Soap@genio.idas.co.za', 'Bad.Job@genio.idas.co.za', 'Good.Job@genio.idas.co.za')
			AND [g].[Group] IN ('Employees')
		)
		-- Suppliers
		OR (
			[u].[EmailAddress] IN ('info@thandindabaattorneys.co.za')
			AND [g].[Group] IN ('Suppliers')
		)
	)

 -- GO
	PRINT ('>> Completed > INSERT >> Test >> Users(s), Group(s) > Employee, Client, Supplier > [dbo].[UserGroup]');
 -- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Project(s)
	-- ==============================================================================================================================
	-- Project(s) - Start and End Date(s)
	DECLARE @TestProject1DateCreated DATETIME = (DATEADD(MONTH, -4, GETDATE()));
	DECLARE @TestProject2DateCreated DATETIME = (DATEADD(MONTH, -2, '3 MAY 2021'));
	DECLARE @TestProject3DateCreated DATETIME = (DATEADD(MONTH, -1, '23 JANUARY 2021'));

	-- Assignee(s)
	DECLARE @TestAssignees TABLE (
	[UserId] [bigint] NOT NULL,
	[EmailAddress] [nvarchar](320) NOT NULL
	);

	INSERT INTO [dbo].[Project] ([Name],[Code],[Description],[ProjectTypeId],[PriorityId],[StartDate],[EndDate],[CreatedBy],[DateCreated])
	SELECT
		[Name]
		,[Code]
		,[Description]
		,[type].[ProjectTypeId]
		,[priority].[PriorityId]
		,CONVERT(VARCHAR, [StartDate], 23) AS [StartDate]
		,CONVERT(VARCHAR, [EndDate], 23) AS [EndDate]
		,1 AS [CreatedBy]
		,[StartDate] AS [DateCreated]
	FROM (
	SELECT 'Test Project 1' AS [Name], 'TP1' AS [Code], 'Test Project 1' AS [Description], @TestProject1DateCreated AS [StartDate], (DATEADD(YEAR, 2, @TestProject1DateCreated)) AS [EndDate] UNION
	SELECT 'Test Project 2' AS [Name], 'TP2' AS [Code], 'Test Project 2' AS [Description], @TestProject2DateCreated AS [StartDate], (DATEADD(MONTH, 8, @TestProject2DateCreated)) AS [EndDate] UNION
	SELECT 'Test Project 3' AS [Name], 'TP3' AS [Code], 'Test Project 3' AS [Description], @TestProject3DateCreated AS [StartDate], (DATEADD(WEEK, 67, @TestProject3DateCreated)) AS [EndDate]
	) AS [prj]
	LEFT JOIN (
		SELECT
			[lv].[_id] AS [ProjectTypeId]
			,[lv].[Value] AS [ProjectType]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'ProjectType')
			AND ([lv].[Value] IN ('Construction', 'Research', 'Outreach'))
	) AS [type] ON (
		(([prj].[Name] IN ('Test Project 1')) AND ([type].[ProjectType]) IN ('Construction'))
		OR (([prj].[Name] IN ('Test Project 2')) AND ([type].[ProjectType]) IN ('Outreach'))
		OR (([prj].[Name] IN ('Test Project 3')) AND ([type].[ProjectType]) IN ('Research'))
	)
	LEFT JOIN (
		SELECT
			[lv].[_id] AS [PriorityId]
			,[lv].[Value] AS [PriorityType]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'Priority')
			AND ([lv].[Value] IN ('Normal', 'High', 'Medium'))
	) AS [priority] ON (
		(([prj].[Name] IN ('Test Project 1')) AND ([priority].[PriorityType]) IN ('High'))
		OR (([prj].[Name] IN ('Test Project 2')) AND ([priority].[PriorityType]) IN ('Medium'))
		OR (([prj].[Name] IN ('Test Project 3')) AND ([priority].[PriorityType]) IN ('Normal'))
	)

 -- GO
	PRINT ('>> Completed > INSERT >> Test Data > [dbo].[Project]');
 -- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Project, File Attachment(s)
	-- ==============================================================================================================================
	--INSERT INTO [dbo].[FileAttachment]([ProjectId], [FileName], [FileSize], [CreatedBy])
	--SELECT
	--	[p].[_id] AS [ProjectId]
	--	,[FileName]
	--	,[FileSize]
	--	,[p].[CreatedBy]
	--FROM [dbo].[Project] AS [p]
	--CROSS JOIN (
	--SELECT 'Izingodla - Test Project Documentation.doc' AS [FileName], 9123  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.docx' AS [FileName], 3456789  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.pdf' AS [FileName], 9876543  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.xls' AS [FileName], 56765432  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.xlsx' AS [FileName], 98712654  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.txt' AS [FileName], 4562378  AS [FileSize]
	--) AS [fa];

 ---- GO
	--PRINT ('>> Completed > INSERT >> Test Data > Project, FileAttachment(s) > [dbo].[Project], [dbo].[FileAttachment]');
 ---- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Project Assignee(s)
	-- ==============================================================================================================================
	INSERT INTO @TestAssignees
	SELECT
		[u].[_id] AS [UserId]
		,[u].[EmailAddress]
	FROM (
	SELECT 'Jane.Doe@genio.idas.co.za' AS [EmailAddress] UNION
	SELECT 'John.Doe@genio.idas.co.za' AS [EmailAddress] UNION
	SELECT 'Bad.Job@genio.idas.co.za' AS [EmailAddress] UNION
	SELECT 'Joe.Soap@genio.idas.co.za' AS [EmailAddress] UNION
	SELECT 'Good.Job@genio.idas.co.za' AS [EmailAddress]
	) AS [TestAssignees]
	JOIN [dbo].[User] AS [u] ON ([TestAssignees].[EmailAddress] = [u].[EmailAddress]);

 -- GO
	PRINT ('>> Completed > INSERT >> Test Data > Project, Task > @TestAssignees');
 -- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Project Assignment(s)
	-- ==============================================================================================================================
	INSERT INTO [dbo].[ProjectAssignment] ([ProjectId],[ProjectAssignmentTypeId],[AssigneeId],[CreatedBy],[DateCreated])
	SELECT
		[p].[_id] AS [ProjectId]
		,[ProjectAssignmentTypeId]
		,[pa].[UserId] AS [AssigneeId]
		,1 AS [CreatedBy]
		,(DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [p].[DateCreated])))))) AS [DateCreated]
	FROM [dbo].[Project] AS [p]
	LEFT JOIN (
		SELECT
			[UserId]
			,[EmailAddress]
			,[pat].[ProjectAssignmentTypeId]
			,[pat].[ProjectAssignmentType]
		FROM @TestAssignees
		CROSS JOIN (
			SELECT
				[lv].[_id] AS [ProjectAssignmentTypeId]
				,[lv].[Value] AS [ProjectAssignmentType]
			FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
			WHERE
				([lv].[LookupCategoryId] = [lc].[_id])
				AND ([lc].[Name] = 'ProjectAssignmentType')
		) AS [pat]
	) AS [pa] ON (
		-- Project Manager(s)
		(
			[p].[Name] IN ('Test Project 1') AND [pa].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Project Manager')
		)
		OR (
			[p].[Name] IN ('Test Project 2') AND [pa].[EmailAddress] IN ('John.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Project Manager')
		)
		OR (
			[p].[Name] IN ('Test Project 3') AND [pa].[EmailAddress] IN ('Good.Job@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Project Manager')
		)
		-- Business Analyst(s)
		OR (
			[p].[Name] IN ('Test Project 1') AND [pa].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Business Analyst')
		)
		OR (
			[p].[Name] IN ('Test Project 2') AND [pa].[EmailAddress] IN ('Bad.Work@genio.idas.co.za', 'Good.Job@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Business Analyst')
		)
		OR (
			[p].[Name] IN ('Test Project 3') AND [pa].[EmailAddress] IN ('Good.Job@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Business Analyst')
		)
		-- Senior Engineer(s)
		OR (
			[p].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3') AND [pa].[EmailAddress] IN ('John.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Senior Engineer')
		)
		-- Engineer(s)
		OR (
			[p].[Name] IN ('Test Project 1', 'Test Project 2') AND [pa].[EmailAddress] IN ('Joe.Soap@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Engineer')
		)
	);

 -- GO
	PRINT ('>> Completed > INSERT >> Test Data > [dbo].[ProjectAssignment]');
 -- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Update Test Project(s) > CreatedBy
	-- ==============================================================================================================================
	UPDATE [p]
	SET
		[CreatedBy] = [pa].[AssigneeId]
		,[ModifiedBy] = [pa].[AssigneeId]
		,[DateModified] = GETDATE()
	FROM [dbo].[Project] AS [p]
	JOIN [dbo].[ProjectAssignment] AS [pa] ON ([p].[_id] = [pa].[ProjectId])
	JOIN [dbo].[LookupValue] AS [lv] ON ([pa].[ProjectAssignmentTypeId] = [lv].[_id])
	WHERE
		([lv].[Value] = 'Project Manager');

 -- GO
	PRINT ('>> Completed > UPDATE >> Test Data > [dbo].[Project] > [CreatedBy]');
 -- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Update Test Project Assignment(s) > CreatedBy
	-- ==============================================================================================================================
	UPDATE [pa]
	SET
		[CreatedBy] = [tpacb].[AssigneeId]
		,[ModifiedBy] = [pa].[AssigneeId]
		,[DateModified] = GETDATE()
	FROM [dbo].[ProjectAssignment] AS [pa]
	LEFT JOIN (
		SELECT
			[tpa].[ProjectId]
			,[AssigneeId]
			,[p].[Name] AS [ProjectName]
			,[lv].[Value] AS [ProjectAssignmentType]
		FROM [dbo].[ProjectAssignment] AS [tpa]
		JOIN [dbo].[Project] AS [p] ON ([p].[_id] = [tpa].[ProjectId])
		JOIN [dbo].[LookupValue] AS [lv] ON ([tpa].[ProjectAssignmentTypeId] = [lv].[_id])
	) AS [tpacb] ON (
		-- Assignment > Created By > Project Manager
		(
			([pa].[ProjectId] = [tpacb].[ProjectId])
			AND ([tpacb].[ProjectName] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
			AND ([tpacb].[ProjectAssignmentType] IN ('Project Manager'))
		)
	);

 -- GO
	PRINT ('>> Completed > UPDATE >> Test Data > [dbo].[ProjectAssignment] > [CreatedBy]');
 -- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Project Status(es)
	-- ==============================================================================================================================
	INSERT INTO [dbo].[ProjectStatus] ([ProjectId],[StatusId],[CreatedBy],[DateCreated])
	SELECT
		[p].[_id] AS [ProjectId]
		,[StatusId]
		,CASE
			WHEN [ps].[StatusName] IN ('Created', 'Not Started')
				THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
			WHEN [ps].[StatusName] IN ('Started')
				THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
			WHEN [ps].[StatusName] IN ('On Hold')
				THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
			WHEN [ps].[StatusName] IN ('Cancelled')
				THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
			WHEN [ps].[StatusName] IN ('In Progress')
				THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
			WHEN [ps].[StatusName] IN ('Completed')
				THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
			WHEN [ps].[StatusName] IN ('Blocked')
				THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
			WHEN [ps].[StatusName] IN ('Done')
				THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
			ELSE [tpa].[AssigneeId]
		END AS [CreatedBy]
		,CASE
			WHEN [ps].[StatusName] IN ('Created', 'Not Started')
				THEN [p].[DateCreated]
			WHEN [ps].[StatusName] IN ('Started')
				THEN (DATEADD(HOUR, (91 % 5), (DATEADD(MINUTE, (87 % 3), [tpa].[DateCreated]))))
			WHEN [ps].[StatusName] IN ('On Hold')
				THEN (DATEADD(MONTH, 2, [tpa].[DateCreated]))
			WHEN [ps].[StatusName] IN ('Cancelled')
				THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
			WHEN [ps].[StatusName] IN ('In Progress')
				THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
			WHEN [ps].[StatusName] IN ('Completed')
				THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
			WHEN [ps].[StatusName] IN ('Blocked')
				THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
			WHEN [ps].[StatusName] IN ('Done')
				THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
			ELSE [tpa].[DateCreated]
		END AS [DateCreated]
	FROM [dbo].[Project] AS [p]
	LEFT JOIN [dbo].[ProjectAssignment] AS [tpa] ON ([p].[_id] = [tpa].[ProjectId])
	LEFT JOIN [dbo].[LookupValue] AS [lvpa] ON ([tpa].[ProjectAssignmentTypeId] = [lvpa].[_id])
	LEFT JOIN (
		SELECT
			[lv].[_id] AS [StatusId]
			,[lv].[Value] AS [StatusName]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'Status')
	) AS [ps] ON (
		-- Project >> Status >> Created, Not Started > By Project Manager
		(
			([p].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
			AND ([ps].[StatusName] IN ('Created', 'Not Started'))
			AND ([lvpa].[Value] IN ('Project Manager'))
		)
		-- Project >> Status >> Started > By Project Manager
		OR (
			([p].[Name] IN ('Test Project 1', 'Test Project 2'))
			AND ([ps].[StatusName] IN ('Started'))
			AND ([lvpa].[Value] IN ('Project Manager'))
		)
		-- Project >> Status >> Started > By Business Analyst
		OR (
			([p].[Name] IN ('Test Project 3'))
			AND ([ps].[StatusName] IN ('Started'))
			AND ([lvpa].[Value] IN ('Business Analyst'))
		)
		-- Project >> Status >> On Hold, Cancelled > By Project Manager, Senior Engineer, Business Analyst, Engineer
		OR (
			([p].[Name] IN ('Test Project 2'))
			AND ([ps].[StatusName] IN ('On Hold', 'Cancelled'))
			AND ([lvpa].[Value] IN ('Project Manager', 'Senior Engineer', 'Business Analyst', 'Engineer'))
		)
		-- Project >> Status >> On Hold > By Senior Engineer
		OR (
			([p].[Name] IN ('Test Project 3'))
			AND ([ps].[StatusName] IN ('On Hold'))
			AND ([lvpa].[Value] IN ('Senior Engineer'))
		)
		-- Project >> Status >> In Progress > By Business Analyst
		OR (
			([p].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
			AND ([ps].[StatusName] IN ('In Progress'))
			AND ([lvpa].[Value] IN ('Business Analyst'))
		)
		-- Project >> Status >> Completed > By Senior Engineer, Engineer
		OR (
			([p].[Name] IN ('Test Project 1'))
			AND ([ps].[StatusName] IN ('Completed'))
			AND ([lvpa].[Value] IN ('Senior Engineer', 'Engineer'))
		)
		-- Project >> Status >> Blocked, Done > By Business Analyst
		OR (
			([p].[Name] IN ('Test Project 1'))
			AND ([ps].[StatusName] IN ('Blocked', 'Done'))
			AND ([lvpa].[Value] IN ('Business Analyst'))
		)
	);

 -- GO
	PRINT ('>> Completed > INSERT >> Test Data > [dbo].[ProjectStatus]');
 -- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Project Task(s)
	-- ==============================================================================================================================
	INSERT INTO [dbo].[Task] ([ProjectId],[Name],[Description],[TaskTypeId],[PriorityId],[CreatedBy],[DateCreated])
	SELECT DISTINCT
		[pa].[ProjectId]
		,'As a ' + [lvpa].[Value] + ', I want to ' + [lvps].[Value] + ' on the ' + [p].[Name] + ' project' AS [Name]
		,[lvps].[Value] + ' on the ' + [p].[Name] + ' project' AS [Description]
		,[type].[TaskTypeId]
		,[p].[PriorityId]
		,[pa].[AssigneeId] AS [CreatedBy]
		,[ps].[DateCreated]
	FROM [dbo].[ProjectAssignment] AS [pa]
	JOIN [dbo].[LookupValue] AS [lvpa] ON ([pa].[ProjectAssignmentTypeId] = [lvpa].[_id])
	JOIN [dbo].[Project] AS [p] ON ([pa].[ProjectId] = [p].[_id])
	JOIN [dbo].[ProjectStatus] AS [ps] ON ([pa].[AssigneeId] = [ps].[CreatedBy])
	JOIN [dbo].[LookupValue] AS [lvps] ON ([ps].[StatusId] = [lvps].[_id])
	LEFT JOIN (
		SELECT
			[lv].[_id] AS [TaskTypeId]
			,[lv].[Value] AS [TaskType]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'TaskType')
	) AS [type] ON (
		(([lvpa].[Value] IN ('Project Manager')) AND ([type].[TaskType] IN ('Consultation')))
		OR (([lvpa].[Value] IN ('Business Analyst')) AND ([type].[TaskType] IN ('Planning')))
		OR (([lvpa].[Value] IN ('Senior Engineer')) AND ([type].[TaskType] IN ('Development')))
		OR (([lvpa].[Value] IN ('Engineer')) AND ([type].[TaskType] IN ('Development')))
	);

 -- GO
	PRINT ('>> Completed > INSERT >> Test Data > [dbo].[Task]');
 -- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Project Task Assignment(s)
	-- ==============================================================================================================================
	INSERT INTO [dbo].[TaskAssignment] ([TaskId],[AssigneeId],[CreatedBy],[DateCreated])
	SELECT DISTINCT
		[_id] AS [TaskId]
		,[CreatedBy] AS [AssigneeId]
		,[CreatedBy]
		,[DateCreated]
	FROM [dbo].[Task];

 -- GO
	PRINT ('>> Completed > INSERT >> Test Data > [dbo].[TaskAssignment]');
 -- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Task, Task Assignment File Attachment(s)
	-- ==============================================================================================================================
	--INSERT INTO [dbo].[FileAttachment]([TaskId], [FileName], [FileSize], [CreatedBy])
	--SELECT
	--	[ta].[_id] AS [TaskId]
	--	,[FileName]
	--	,[FileSize]
	--	,[ta].[AssigneeId]
	--FROM [dbo].[TaskAssignment] AS [ta]
	--CROSS JOIN (
	--SELECT 'Izingodla - Test Project Documentation.doc' AS [FileName], 9123  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.docx' AS [FileName], 3456789  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.pdf' AS [FileName], 9876543  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.xls' AS [FileName], 56765432  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.xlsx' AS [FileName], 98712654  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.txt' AS [FileName], 4562378  AS [FileSize]
	--) AS [fa];

 ---- GO
	--PRINT ('>> Completed > INSERT >> Test Data > Task, Task Assignment, File Attachment(s) > [dbo].[Task], [dbo].[TaskAssignment], [dbo].[FileAttachment]');
 ---- GO

	-- ==============================================================================================================================
	-- Setup >> Test >> Project Task Status(es)
	-- ==============================================================================================================================
	INSERT INTO [dbo].[TaskStatus] ([TaskId],[StatusId],[CreatedBy],[DateCreated])
	SELECT DISTINCT
		[tsk].[_id] AS [TaskId]
		,[psts].[StatusId]
		,[tska].[CreatedBy]
		,[psts].[DateCreated]
	FROM [dbo].[Task] AS [tsk]
	JOIN [dbo].[TaskAssignment] AS [tska] ON ([tsk].[_id] = [tska].[TaskId])
	JOIN [dbo].[ProjectStatus] AS [psts] ON ([tsk].[ProjectId] = [psts].[ProjectId]);

 -- GO
	PRINT ('>> Completed > INSERT >> Test Data > [dbo].[TaskStatus]');
 -- GO

	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	-- INSERT >> Test >> Calendar Event(s) > ([dbo].[CalendarEvent])
	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	;WITH [dateVars] AS (
		SELECT
			DATEADD(yy, DATEDIFF(yy, 0, GETDATE()), 0) AS [FirstDayOfCurrentYear]
			,DATEADD(dd, -1, DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) + 1, 0)) AS [LastDayOfCurrentYear]
	)
	, [daysIn] AS (
		SELECT
			DATEDIFF(DAY, [FirstDayOfCurrentYear], [LastDayOfCurrentYear]) AS [Days]
		FROM [dateVars]
	)
	, [dates] AS (
		SELECT
			1 AS [DayAdd]
			,(RAND(CHECKSUM(NEWID())) * [Days] + [FirstDayOfCurrentYear]) AS [StartDate]
			,(RAND(CHECKSUM(NEWID())) * [Days] + [FirstDayOfCurrentYear]) AS [EndDate]
		FROM [dateVars], [daysIn]
		UNION ALL
		SELECT
			([DayAdd] + 1) AS [DayAdd]
			,(RAND(CHECKSUM(NEWID())) * [DayAdd] + [StartDate]) AS [StartDate]
			,(RAND(CHECKSUM(NEWID())) * [DayAdd] + [StartDate]) AS [EndDate]
		FROM [dateVars], [daysIn], [dates]
		WHERE
			([StartDate] <= DATEADD(DAY, 200, [LastDayOfCurrentYear]))
	)
	INSERT INTO [dbo].[CalendarEvent]([CalendarEventTypeId],[Title],[Description],[Location],[IsAllDayEvent],[StartDate],[EndDate],[CreatedBy])
	SELECT
		[CalendarEventTypeId]
		,CONCAT([CalendarEventType], ' Meeting') AS [Title]
		,CONCAT([CalendarEventType], ' Meeting') AS [Description]
		,'Teams Meeting' AS [Location]
		,1 AS [IsAllDayEvent]
		,[StartDate]
		,[EndDate]
		,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
	FROM (
		SELECT
			CASE WHEN [EndDate] > [StartDate] THEN [StartDate] ELSE [EndDate] END [StartDate]
			,CASE WHEN [StartDate] > [EndDate] THEN [StartDate] ELSE [EndDate] END [EndDate]
		FROM [dates]
	) AS [dates]
	CROSS JOIN (
		SELECT
			[lv].[_id] AS [CalendarEventTypeId]
			,[lv].[Value] AS [CalendarEventType]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'CalendarEventType')
	) AS [cet]
	OPTION (MAXRECURSION 9999);

 -- GO
	PRINT ('>> Completed > INSERT >> Test Data > [dbo].[CalendarEvent]');
 -- GO

	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	-- INSERT >> Test >> Calendar Event(s), Attendee (Administrator, Employee, Client, Supplier) > ([dbo].[CalendarEventAttendee])
	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	INSERT INTO [dbo].[CalendarEventAttendee]([CalendarEventId], [AttendeeId], [CreatedBy])
	SELECT
		[ce].[_id] AS [CalendarEventId]
		,[u].[_id] AS [AttendeeId]
		,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
	FROM [dbo].[CalendarEvent] AS [ce]
	JOIN [dbo].[LookupValue] AS [cet] ON ([ce].[CalendarEventTypeId] = [cet].[_id])
	JOIN [dbo].[User] AS [u] ON (
		-- Action Review
		([cet].[Value] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([cet].[Value] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([cet].[Value] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([cet].[Value] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([cet].[Value] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Board
		OR ([cet].[Value] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
		OR ([cet].[Value] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
		OR ([cet].[Value] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
		-- Broadcast
		-- Community of Practice
		-- Consultation
		OR ([cet].[Value] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([cet].[Value] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([cet].[Value] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([cet].[Value] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([cet].[Value] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Decision Making
		-- Governance
		OR ([cet].[Value] IN ('Governance') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		-- Idea Generation
		OR ([cet].[Value] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([cet].[Value] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([cet].[Value] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([cet].[Value] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([cet].[Value] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Interview
		OR ([cet].[Value] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za'))
		OR ([cet].[Value] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'good.job@genio.idas.co.za'))
		OR ([cet].[Value] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		-- Introductions
		OR ([cet].[Value] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([cet].[Value] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([cet].[Value] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([cet].[Value] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za', 'info@closecorporation.co.za', 'info@thandindabaattorneys.co.za'))
		OR ([cet].[Value] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za', 'info@privatecompany.co.za', 'info@thandindabaattorneys.co.za'))
		-- Issue Resolution
		OR ([cet].[Value] IN ('Issue Resolution') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@thandindabaattorneys.co.za'))
		-- One-on-One
		OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za'))
		-- Planning
		OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Problem Solving
		-- Progress Check
		OR ([cet].[Value] IN ('Governance') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		-- Sensemaking
		-- Site Visit
		-- Team Cadence
		OR ([cet].[Value] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
		OR ([cet].[Value] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([cet].[Value] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		OR ([cet].[Value] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
		OR ([cet].[Value] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
		-- Training
		-- Workshop
		OR ([cet].[Value] IN ('Workshop') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	);

 -- GO
	PRINT ('>> Completed > INSERT >> Test Data > [dbo].[CalendarEventAttendee]');
 -- GO

	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	-- INSERT >> Test >> Calendar Event(s), File Attachment(s)> ([dbo].[FileAttachment])
	-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
	--INSERT INTO [dbo].[FileAttachment]([CalendarEventId], [FileName], [FileSize], [CreatedBy])
	--SELECT
	--	[ce].[_id] AS [CalendarEventId]
	--	,[FileName]
	--	,[FileSize]
	--	,[ce].[CreatedBy]
	--FROM [dbo].[CalendarEvent] AS [ce]
	--CROSS JOIN (
	--SELECT 'Izingodla - Test Project Documentation.doc' AS [FileName], 9123  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.docx' AS [FileName], 3456789  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.pdf' AS [FileName], 9876543  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.xls' AS [FileName], 56765432  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.xlsx' AS [FileName], 98712654  AS [FileSize] UNION ALL
	--SELECT 'Izingodla - Test Project Documentation.txt' AS [FileName], 4562378  AS [FileSize]
	--) AS [fa];

 ---- GO
	--PRINT ('>> Completed > INSERT >> Test >> Calendar Event(s), File Attachment(s) > [dbo].[CalendarEvent], [dbo].[FileAttachment]');
 ---- GO

	SELECT '[dbo].[User]' AS [TableName], *  FROM [dbo].[User]
	SELECT '[dbo].[LookupCategory]' AS [TableName], *  FROM [dbo].[LookupCategory]
	SELECT '[dbo].[LookupValue]' AS [TableName], *  FROM [dbo].[LookupValue]
	SELECT '[dbo].[Entity]' AS [TableName], *  FROM [dbo].[Entity]
	SELECT '[dbo].[EntityRelationship]' AS [TableName], *  FROM [dbo].[EntityRelationship]
	SELECT '[dbo].[EntityUserGroupCapacity]' AS [TableName], *  FROM [dbo].[EntityUserGroupCapacity]
	SELECT '[dbo].[EntityChangeHistory]' AS [TableName], *  FROM [dbo].[EntityChangeHistory]
	SELECT '[dbo].[Employee]' AS [TableName], *  FROM [dbo].[Employee]
	SELECT '[dbo].[Client]' AS [TableName], *  FROM [dbo].[Client]
	SELECT '[dbo].[Supplier]' AS [TableName], *  FROM [dbo].[Supplier]
	SELECT '[dbo].[ContactDetail]' AS [TableName], *  FROM [dbo].[ContactDetail]
	SELECT '[dbo].[Project]' AS [TableName], *  FROM [dbo].[Project]
	SELECT '[dbo].[ProjectAssignment]' AS [TableName], *  FROM [dbo].[ProjectAssignment]
	SELECT '[dbo].[ProjectComment]' AS [TableName], *  FROM [dbo].[ProjectComment]
	SELECT '[dbo].[ProjectWorkLog]' AS [TableName], *  FROM [dbo].[ProjectWorkLog]
	SELECT '[dbo].[ProjectStatus]' AS [TableName], *  FROM [dbo].[ProjectStatus]
	SELECT '[dbo].[Task]' AS [TableName], *  FROM [dbo].[Task]
	SELECT '[dbo].[TaskAssignment]' AS [TableName], *  FROM [dbo].[TaskAssignment]
	SELECT '[dbo].[TaskComment]' AS [TableName], *  FROM [dbo].[TaskComment]
	SELECT '[dbo].[TaskWorkLog]' AS [TableName], *  FROM [dbo].[TaskWorkLog]
	SELECT '[dbo].[TaskStatus]' AS [TableName], *  FROM [dbo].[TaskStatus]
	SELECT '[dbo].[UserGroup]' AS [TableName], *  FROM [dbo].[UserGroup]
	SELECT '[dbo].[UserGroupCapacity]' AS [TableName], *  FROM [dbo].[UserGroupCapacity]
	SELECT '[dbo].[MenuItem]' AS [TableName], *  FROM [dbo].[MenuItem]
	SELECT '[dbo].[CalendarEvent]' AS [TableName], *  FROM [dbo].[CalendarEvent]
	SELECT '[dbo].[CalendarEventAttendee]' AS [TableName], *  FROM [dbo].[CalendarEventAttendee]
	SELECT '[dbo].[UserLocks]' AS [TableName], *  FROM [dbo].[UserLocks]
	SELECT '[dbo].[UserTransaction]' AS [TableName], *  FROM [dbo].[UserTransaction]
	SELECT '[dbo].[GroupMenuItem]' AS [TableName], *  FROM [dbo].[GroupMenuItem]
	SELECT '[dbo].[UserTypeMenuItem]' AS [TableName], *  FROM [dbo].[UserTypeMenuItem]
	SELECT '[dbo].[NotificationMessage]' AS [TableName], *  FROM [dbo].[NotificationMessage]
	SELECT '[dbo].[InboxMessage]' AS [TableName], *  FROM [dbo].[InboxMessage]
	SELECT '[dbo].[FileAttachment]' AS [TableName], *  FROM [dbo].[FileAttachment]
END
ELSE
BEGIN
	PRINT ('Database: IdasGenioDb, does not exist.');
END

GO
PRINT ('>> Completed > Execute Script > 0.2. Insert Test Data - IdasGenioDb');
GO
