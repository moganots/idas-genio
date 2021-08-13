USE [IdasGenioDb];
GO

DECLARE @EmailAddress [nvarchar](255) = 'Jane.Doe@genio.idas.co.za';
DECLARE @_id [bigint] = NULL;
DECLARE @ClientId [bigint] = NULL;
DECLARE @EmployeeId [bigint] = NULL;
DECLARE @SupplierId [bigint] = NULL;

SELECT TOP 1
	[u].[_id] AS 'User._id'
	,[u].[EmailAddress] AS 'User.EmailAddress'
	,[u].[PasswordHash] AS 'User.PasswordHash'
	,ISNULL([u].[UserTypeId], [ut].[UserTypeId]) AS 'User.UserTypeId'
	,[u].[IsAdmin] AS 'User.IsAdmin'
	,[u].[IsLocked] AS 'User.IsLocked'
	,[u].[Avatar] AS 'User.Avatar'
	,[u].[DateLastLoggedIn] AS 'User.DateLastLoggedIn'
	,[u].[SessionToken] AS 'User.SessionToken'
	,[u].[IsActive] AS 'User.IsActive'
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
	,[c].[_id] AS 'Client._id'
	,[c].[SalutationId] AS 'Client.SalutationId'
	,[c].[Name] AS 'Client.Name'
	,[c].[Surname] AS 'Client.Surname'
	,[c].[CompanyName] AS 'Client.CompanyName'
	,[c].[IndustryTypeId] AS 'Client.IndustryTypeId'
	,[c].[IdNumber] AS 'Client.IdNumber'
	,[c].[RegistrationNumber] AS 'Client.RegistrationNumber'
	,[c].[VATNumber] AS 'Client.VATNumber'
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
	,[cd].[_id] AS 'ContactDetail._id'
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
FROM [dbo].[User] AS [u]
LEFT JOIN [dbo].[Employee] AS [e] ON ([u].[EmployeeId] = [e].[_id])
LEFT JOIN [dbo].[Client] AS [c] ON ([u].[ClientId] = [c].[_id])
LEFT JOIN [dbo].[Supplier] AS [s] ON ([u].[SupplierId] = [s].[_id])
LEFT JOIN [dbo].[ContactDetail] AS [cd] ON (
	([e].[_id] = [cd].[EmployeeId])
	OR ([c].[_id] = [cd].[ClientId])
	OR ([s].[_id] = [cd].[SupplierId])
)
LEFT JOIN (
	SELECT
		[lv].[_id] AS [UserTypeId]
		,[lv].[Value] AS [UserType]
	FROM [dbo].[LookupValue] AS [lv],[dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'UserType')
) AS [ut] ON (
	-- Root
	([u].[EmailAddress] IN ('root@genio.idas.co.za'))
	-- Admin
	OR ([u].[EmailAddress] IN ('admin@genio.idas.co.za'))
	-- Employee
	OR ([u].[EmployeeId] IS NOT NULL)
	-- Client
	OR ([u].[ClientId] IS NOT NULL)
	-- Supplier
	OR ([u].[SupplierId] IS NOT NULL)
)
WHERE
	([u].[EmailAddress] = @EmailAddress)
	AND (@_id IS NULL OR [u].[_id] = @_id)
	AND (@EmployeeId IS NULL OR [u].[EmployeeId] = @EmployeeId)
	AND (@ClientId IS NULL OR [u].[ClientId] = @ClientId)
	AND (@SupplierId IS NULL OR [u].[SupplierId] = @SupplierId)