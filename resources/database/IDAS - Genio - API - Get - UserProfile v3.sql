USE [IdasGenioDb];
GO

;WITH [cte] AS (
SELECT
	[u].[_id] AS 'User._id'
	,[u].[EmployeeId] AS 'User.EmployeeId'
	,[u].[ClientId] AS 'User.ClientId'
	,[u].[SupplierId] AS 'User.SupplierId'
	,[u].[EmailAddress] AS 'User.EmailAddress'
	,[u].[PasswordHash] AS 'User.PasswordHash'
	,[u].[UserTypeId] AS 'User.UserTypeId'
	,[u].[IsAdmin] AS 'User.IsAdmin'
	,[u].[IsLocked] AS 'User.IsLocked'
	,[u].[Avatar] AS 'User.Avatar'
	,[u].[DateLastLoggedIn] AS 'User.DateLastLoggedIn'
	,[u].[SessionToken] AS 'User.SessionToken'
	,[u].[IsActive] AS 'User.IsActive'
	,[u].[CreatedBy] AS 'User.CreatedBy'
	,[u].[DateCreated] AS 'User.DateCreated'
	,[u].[ModifiedBy] AS 'User.ModifiedBy'
	,[u].[DateModified] AS 'User.DateModified'
	,[e].[_id] AS 'Employee._id'
	,[e].[SalutationId] AS 'Employee.SalutationId'
	,[e].[Name] AS 'Employee.Name'
	,[e].[MiddleName] AS 'Employee.MiddleName'
	,[e].[Surname] AS 'Employee.Surname'
	,[e].[IdNumber] AS 'Employee.IdNumber'
	,[e].[BirthDate] AS 'Employee.BirthDate'
	,[e].[GenderId] AS 'Employee.GenderId'
	,[e].[EmploymentTypeId] AS 'Employee.EmploymentTypeId'
	,[e].[PositionId] AS 'Employee.PositionId'
	,[e].[DepartmentId] AS 'Employee.DepartmentId'
	,[e].[ManagerId] AS 'Employee.ManagerId'
	,[e].[DateHired] AS 'Employee.DateHired'
	,[e].[EmployeeNumber] AS 'Employee.EmployeeNumber'
	,[e].[IsTerminated] AS 'Employee.IsTerminated'
	,[e].[DateTerminated] AS 'Employee.DateTerminated'
	,[e].[IsActive] AS 'Employee.IsActive'
	,[e].[CreatedBy] AS 'Employee.CreatedBy'
	,[e].[DateCreated] AS 'Employee.DateCreated'
	,[e].[ModifiedBy] AS 'Employee.ModifiedBy'
	,[e].[DateModified] AS 'Employee.DateModified'
	,(SELECT [dbo].[ValueJoin](' ', [e].[Name], [e].[MiddleName], [e].[Surname], NULL, NULL, NULL, NULL, NULL, NULL, NULL)) AS 'Employee.DisplayName'
	,[c].[_id] AS 'Client._id'
	,[c].[SalutationId] AS 'Client.SalutationId'
	,[c].[Name] AS 'Client.Name'
	,[c].[Surname] AS 'Client.Surname'
	,[c].[CompanyName] AS 'Client.CompanyName'
	,[c].[IndustryTypeId] AS 'Client.IndustryTypeId'
	,[c].[IdNumber] AS 'Client.IdNumber'
	,[c].[RegistrationNumber] AS 'Client.RegistrationNumber'
	,[c].[VATNumber] AS 'Client.VATNumber'
	,[c].[IsActive] AS 'Client.IsActive'
	,[c].[CreatedBy] AS 'Client.CreatedBy'
	,[c].[DateCreated] AS 'Client.DateCreated'
	,[c].[ModifiedBy] AS 'Client.ModifiedBy'
	,[c].[DateModified] AS 'Client.DateModified'
	,(SELECT [dbo].[ValueJoin](' ', [c].[Name], COALESCE([c].[Surname], [c].[CompanyName]), NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)) AS 'Client.DisplayName'
	,[s].[_id] AS 'Supplier._id'
	,[s].[SalutationId] AS 'Supplier.SalutationId'
	,[s].[Name] AS 'Supplier.Name'
	,[s].[Surname] AS 'Supplier.Surname'
	,[s].[CompanyName] AS 'Supplier.CompanyName'
	,[s].[IndustryTypeId] AS 'Supplier.IndustryTypeId'
	,[s].[IdNumber] AS 'Supplier.IdNumber'
	,[s].[RegistrationNumber] AS 'Supplier.RegistrationNumber'
	,[s].[VATNumber] AS 'Supplier.VATNumber'
	,[s].[BankId] AS 'Supplier.BankId'
	,[s].[AccountNumber] AS 'Supplier.AccountNumber'
	,[s].[IsActive] AS 'Supplier.IsActive'
	,[s].[CreatedBy] AS 'Supplier.CreatedBy'
	,[s].[DateCreated] AS 'Supplier.DateCreated'
	,[s].[ModifiedBy] AS 'Supplier.ModifiedBy'
	,[s].[DateModified] AS 'Supplier.DateModified'
	,(SELECT [dbo].[ValueJoin](' ', [s].[Name], COALESCE([s].[Surname], [s].[CompanyName]), NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)) AS 'Supplier.DisplayName'
	,[cd].[_id] AS 'ContactDetail._id'
	,[cd].[EmployeeId] AS 'ContactDetail.EmployeeId'
	,[cd].[ClientId] AS 'ContactDetail.ClientId'
	,[cd].[SupplierId] AS 'ContactDetail.SupplierId'
	,[cd].[RecipientsName] AS 'ContactDetail.RecipientsName'
	,[cd].[EmailAddress] AS 'ContactDetail.EmailAddress'
	,[cd].[HomeTelephoneNumber] AS 'ContactDetail.HomeTelephoneNumber'
	,[cd].[OfficeTelephoneNumber] AS 'ContactDetail.OfficeTelephoneNumber'
	,[cd].[MobileTelephoneNumber] AS 'ContactDetail.MobileTelephoneNumber'
	,[cd].[Website] AS 'ContactDetail.Website'
	,[cd].[AddressLine1] AS 'ContactDetail.AddressLine1'
	,[cd].[AddressLine2] AS 'ContactDetail.AddressLine2'
	,[cd].[City] AS 'ContactDetail.City'
	,[cd].[ProvinceId] AS 'ContactDetail.ProvinceId'
	,[cd].[PostalCode] AS 'ContactDetail.PostalCode'
	,[cd].[CountryId] AS 'ContactDetail.CountryId'
	,[cd].[PreferredLanguageId] AS 'ContactDetail.PreferredLanguageId'
	,[cd].[UseEmailAddress] AS 'ContactDetail.UseEmailAddress'
	,[cd].[UseHomeTelephoneNumber] AS 'ContactDetail.UseHomeTelephoneNumber'
	,[cd].[UseOfficeTelephoneNumber] AS 'ContactDetail.UseOfficeTelephoneNumber'
	,[cd].[UseMobileTelephoneNumber] AS 'ContactDetail.UseMobileTelephoneNumber'
	,[cd].[UsePostalAddress] AS 'ContactDetail.UsePostalAddress'
	,[cd].[IsActive] AS 'ContactDetail.IsActive'
	,[cd].[CreatedBy] AS 'ContactDetail.CreatedBy'
	,[cd].[DateCreated] AS 'ContactDetail.DateCreated'
	,[cd].[ModifiedBy] AS 'ContactDetail.ModifiedBy'
	,[cd].[DateModified] AS 'ContactDetail.DateModified'
	,[ug].[_id] AS 'UserGroup._id'
	,[ug].[UserId] AS 'UserGroup.UserId'
	,[ug].[GroupId] AS 'UserGroup.GroupId'
	,[ug].[IsActive] AS 'UserGroup.IsActive'
	,[ug].[CreatedBy] AS 'UserGroup.CreatedBy'
	,[ug].[DateCreated] AS 'UserGroup.DateCreated'
	,[ug].[ModifiedBy] AS 'UserGroup.ModifiedBy'
	,[ug].[DateModified] AS 'UserGroup.DateModified'
FROM [dbo].[User] AS [u]
LEFT JOIN [dbo].[Employee] AS [e] ON (([u].[EmployeeId] = [e].[_id]))
LEFT JOIN [dbo].[Client] AS [c] ON (([u].[ClientId] = [c].[_id]))
LEFT JOIN [dbo].[Supplier] AS [s] ON (([u].[SupplierId] = [s].[_id]))
LEFT JOIN [dbo].[ContactDetail] AS [cd] ON (
	([e].[_id] = [cd].[EmployeeId])
	OR ([c].[_id] = [cd].[ClientId])
	OR ([s].[_id] = [cd].[SupplierId])
)
LEFT JOIN [dbo].[UserGroup] AS [ug] ON (([u].[_id] = [ug].[UserId]))
)
SELECT
	[User._id]
	,[User.EmployeeId]
	,[User.ClientId]
	,[User.SupplierId]
	,[User.EmailAddress]
	,[User.PasswordHash]
	,[User.UserTypeId]
	,[User.IsAdmin]
	,[User.IsLocked]
	,[User.Avatar]
	,[User.DateLastLoggedIn]
	,[User.SessionToken]
	,[User.IsActive]
	,[User.CreatedBy]
	,[User.DateCreated]
	,[User.ModifiedBy]
	,[User.DateModified]	
	,COALESCE([Employee.DisplayName], [Client.DisplayName], [Supplier.DisplayName], [User.EmailAddress]) AS 'User.DisplayName'
	,[Employee._id]
	,[Employee.SalutationId]
	,[Employee.Name]
	,[Employee.MiddleName]
	,[Employee.Surname]
	,[Employee.IdNumber]
	,[Employee.BirthDate]
	,[Employee.GenderId]
	,[Employee.EmploymentTypeId]
	,[Employee.PositionId]
	,[Employee.DepartmentId]
	,[Employee.ManagerId]
	,[Employee.DateHired]
	,[Employee.EmployeeNumber]
	,[Employee.IsTerminated]
	,[Employee.DateTerminated]
	,[Employee.IsActive]
	,[Employee.CreatedBy]
	,[Employee.DateCreated]
	,[Employee.ModifiedBy]
	,[Employee.DateModified]
	,[Employee.DisplayName]
	,[Client._id]
	,[Client.SalutationId]
	,[Client.Name]
	,[Client.Surname]
	,[Client.CompanyName]
	,[Client.IndustryTypeId]
	,[Client.IdNumber]
	,[Client.RegistrationNumber]
	,[Client.VATNumber]
	,[Client.IsActive]
	,[Client.CreatedBy]
	,[Client.DateCreated]
	,[Client.ModifiedBy]
	,[Client.DateModified]
	,[Client.DisplayName]
	,[Supplier._id]
	,[Supplier.SalutationId]
	,[Supplier.Name]
	,[Supplier.Surname]
	,[Supplier.CompanyName]
	,[Supplier.IndustryTypeId]
	,[Supplier.IdNumber]
	,[Supplier.RegistrationNumber]
	,[Supplier.VATNumber]
	,[Supplier.BankId]
	,[Supplier.AccountNumber]
	,[Supplier.IsActive]
	,[Supplier.CreatedBy]
	,[Supplier.DateCreated]
	,[Supplier.ModifiedBy]
	,[Supplier.DateModified]
	,[Supplier.DisplayName]
	,[ContactDetail._id]
	,[ContactDetail.EmployeeId]
	,[ContactDetail.ClientId]
	,[ContactDetail.SupplierId]
	,[ContactDetail.RecipientsName]
	,[ContactDetail.EmailAddress]
	,[ContactDetail.HomeTelephoneNumber]
	,[ContactDetail.OfficeTelephoneNumber]
	,[ContactDetail.MobileTelephoneNumber]
	,[ContactDetail.Website]
	,[ContactDetail.AddressLine1]
	,[ContactDetail.AddressLine2]
	,[ContactDetail.City]
	,[ContactDetail.ProvinceId]
	,[ContactDetail.PostalCode]
	,[ContactDetail.CountryId]
	,[ContactDetail.PreferredLanguageId]
	,[ContactDetail.UseEmailAddress]
	,[ContactDetail.UseHomeTelephoneNumber]
	,[ContactDetail.UseOfficeTelephoneNumber]
	,[ContactDetail.UseMobileTelephoneNumber]
	,[ContactDetail.UsePostalAddress]
	,[ContactDetail.IsActive]
	,[ContactDetail.CreatedBy]
	,[ContactDetail.DateCreated]
	,[ContactDetail.ModifiedBy]
	,[ContactDetail.DateModified]
	,[UserGroup._id]
	,[UserGroup.UserId]
	,[UserGroup.GroupId]
	,[UserGroup.IsActive]
	,[UserGroup.CreatedBy]
	,[UserGroup.DateCreated]
	,[UserGroup.ModifiedBy]
	,[UserGroup.DateModified]
	,(
		SELECT
			[mi].[_id]
			,[mi].[Title]
			,[mi].[Path]
			,[mi].[Image]
			,[mi].[Icon]
			,[mi].[Component]
			,[mi].[Configuration]
			,[mi].[CssClass]
			,[mi].[IsActive]
			,[mi].[CreatedBy]
			,[mi].[DateCreated]
			,[mi].[ModifiedBy]
			,[mi].[DateModified]	
		FROM [dbo].[GroupMenuItem] AS [gmi]
		LEFT JOIN [dbo].[MenuItem] AS [mi] ON ([gmi].[MenuItemId] = [mi].[_id])
		WHERE
			([cte].[UserGroup.GroupId] = [gmi].[GroupId])
		FOR JSON PATH
	) AS [MenuItems]
FROM [cte]
FOR JSON PATH