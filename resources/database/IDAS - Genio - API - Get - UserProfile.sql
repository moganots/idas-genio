DECLARE @EmailAddress NVARCHAR(320) = 'root@genio.idas.co.za'
DECLARE @_id [bigint] = NULL
DECLARE @EmployeeId [bigint] = NULL
DECLARE @ClientId [bigint] = NULL
DECLARE @SupplierId [bigint] = NULL
SELECT
	[u].[_id]
	, [u].[EmailAddress]
	, [u].[PasswordHash]
	, [u].[IsAdmin]
	, [u].[IsLocked]
	, [u].[IsActive]
	, [u].[DateLastLoggedIn]
	, [e].[_id] AS 'EmployeeId'
	, [e].[SalutationId] AS 'EmployeeSalutationId'
	, [e].[Name] AS 'EmployeeName'
	, [e].[MiddleName] AS 'EmployeeMiddleName'
	, [e].[Surname] AS 'EmployeeSurname'
	, [e].[IdNumber] AS 'EmployeeIdNumber'
	, [e].[BirthDate] AS 'EmployeeBirthDate'
	, [e].[GenderId] AS 'EmployeeGenderId'
	, [e].[EmploymentTypeId] AS 'EmployeeEmploymentTypeId'
	, [e].[PositionId] AS 'EmployeePositionId'
	, [e].[DepartmentId] AS 'EmployeeDepartmentId'
	, [e].[ManagerId] AS 'EmployeeManagerId'
	, [e].[DateHired] AS 'EmployeeDateHired'
	, [e].[EmployeeNumber] AS 'EmployeeEmployeeNumber'
	, [e].[IsTerminated] AS 'EmployeeIsTerminated'
	, [e].[DateTerminated] AS 'EmployeeDateTerminated'
	, [e].[IsActive] AS 'EmployeeIsActive'
	, [c].[_id] AS 'ClientId'
	, [c].[SalutationId] AS 'ClientSalutationId'
	, [c].[Name] AS 'ClientName'
	, [c].[Surname] AS 'ClientSurname'
	, [c].[CompanyName] AS 'ClientCompanyName'
	, [c].[IndustryTypeId] AS 'ClientIndustryTypeId'
	, [c].[IdNumber] AS 'ClientIdNumber'
	, [c].[RegistrationNumber] AS 'ClientRegistrationNumber'
	, [c].[VATNumber] AS 'ClientVATNumber'
	, [c].[IsActive] AS 'ClientIsActive'
	, [s].[_id] AS 'SupplierId'
	, [s].[SalutationId] AS 'SupplierSalutationId'
	, [s].[Name] AS 'SupplierName'
	, [s].[Surname] AS 'SupplierSurname'
	, [s].[CompanyName] AS 'SupplierCompanyName'
	, [s].[IndustryTypeId] AS 'SupplierIndustryTypeId'
	, [s].[IdNumber] AS 'SupplierIdNumber'
	, [s].[RegistrationNumber] AS 'SupplierRegistrationNumber'
	, [s].[VATNumber] AS 'SupplierVATNumber'
	, [s].[BankId] AS 'SupplierBankId'
	, [s].[AccountNumber] AS 'SupplierAccountNumber'
	, [s].[IsActive] AS 'SupplierIsActive'
	, [s].[IsActive] AS 'UserGroup'
FROM [IdasGenioDb].[dbo].[User] AS [u]
LEFT JOIN [IdasGenioDb].[dbo].[Employee] AS [e] ON ([u].[EmployeeId] = [e].[_id])
LEFT JOIN [IdasGenioDb].[dbo].[Client] AS [c] ON ([u].[ClientId] = [c].[_id])
LEFT JOIN [IdasGenioDb].[dbo].[Supplier] AS [s] ON ([u].[SupplierId] = [s].[_id])
WHERE
	([u].[EmailAddress] = @EmailAddress)
	AND (@_id IS NULL OR [u].[_id] = @_id)
	AND (@EmployeeId IS NULL OR [u].[EmployeeId] = @EmployeeId)
	AND (@ClientId IS NULL OR [u].[ClientId] = @ClientId)
	AND (@SupplierId IS NULL OR [u].[SupplierId] = @SupplierId)