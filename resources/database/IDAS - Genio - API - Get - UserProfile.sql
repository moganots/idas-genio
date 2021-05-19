DECLARE @UID NVARCHAR(320) = 'root@genio.idas.co.za';

SELECT
	[u].[_id]
	, [u].[EmailAddress]
	, [u].[PasswordHash]
	, [u].[IsAdmin]
	, [u].[IsLocked]
	, [u].[IsActive]
	, [u].[DateLastLoggedIn]
	, [e].[_id] AS 'Employee._id'
	, [e].[SalutationId] AS 'Employee.SalutationId'
	, [e].[Name] AS 'Employee.Name'
	, [e].[MiddleName] AS 'Employee.MiddleName'
	, [e].[Surname] AS 'Employee.Surname'
	, [e].[IdNumber] AS 'Employee.IdNumber'
	, [e].[BirthDate] AS 'Employee.BirthDate'
	, [e].[GenderId] AS 'Employee.GenderId'
	, [e].[EmploymentTypeId] AS 'Employee.EmploymentTypeId'
	, [e].[PositionId] AS 'Employee.PositionId'
	, [e].[DepartmentId] AS 'Employee.DepartmentId'
	, [e].[ManagerId] AS 'Employee.ManagerId'
	, [e].[DateHired] AS 'Employee.DateHired'
	, [e].[EmployeeNumber] AS 'Employee.EmployeeNumber'
	, [e].[IsTerminated] AS 'Employee.IsTerminated'
	, [e].[DateTerminated] AS 'Employee.DateTerminated'
	, [e].[IsActive] AS 'Employee.IsActive'
	, [c].[_id] AS 'Client._id'
	, [c].[SalutationId] AS 'Client.SalutationId'
	, [c].[Name] AS 'Client.Name'
	, [c].[Surname] AS 'Client.Surname'
	, [c].[CompanyName] AS 'Client.CompanyName'
	, [c].[IndustryTypeId] AS 'Client.IndustryTypeId'
	, [c].[IdNumber] AS 'Client.IdNumber'
	, [c].[RegistrationNumber] AS 'Client.RegistrationNumber'
	, [c].[VATNumber] AS 'Client.VATNumber'
	, [c].[IsActive] AS 'Client.IsActive'
	, [s].[_id] AS 'Supplier._id'
	, [s].[SalutationId] AS 'Supplier.SalutationId'
	, [s].[Name] AS 'Supplier.Name'
	, [s].[Surname] AS 'Supplier.Surname'
	, [s].[CompanyName] AS 'Supplier.CompanyName'
	, [s].[IndustryTypeId] AS 'Supplier.IndustryTypeId'
	, [s].[IdNumber] AS 'Supplier.IdNumber'
	, [s].[RegistrationNumber] AS 'Supplier.RegistrationNumber'
	, [s].[VATNumber] AS 'Supplier.VATNumber'
	, [s].[BankId] AS 'Supplier.BankId'
	, [s].[AccountNumber] AS 'Supplier.AccountNumber'
	, [s].[IsActive] AS 'Supplier.IsActive'
FROM [IdasGenioDb].[dbo].[User] AS [u]
LEFT JOIN [IdasGenioDb].[dbo].[Employee] AS [e] ON ([u].[EmployeeId] = [e].[_id])
LEFT JOIN [IdasGenioDb].[dbo].[Client] AS [c] ON ([u].[ClientId] = [c].[_id])
LEFT JOIN [IdasGenioDb].[dbo].[Supplier] AS [s] ON ([u].[SupplierId] = [s].[_id])
WHERE
	([u].[EmailAddress] = @UID)
FOR JSON PATH