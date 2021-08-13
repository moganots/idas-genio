USE [IdasGenioDb];
GO

;WITH [cte] ([TabName], [EntityName], [ColumnId], [ColumnName], [PlaceHolder]) AS (
SELECT
	CASE
		WHEN [ac].[name] IN ('SalutationId', 'Name', 'MIddleName', 'Surname', 'IdNumber', 'BirthDate', 'GenderId', 'EmploymentTypeId', 'PositionId', 'DepartmentId', 'ManagerId', 'DateHired', 'EmployeeNumber', 'IsTerminated', 'DateTerminated', 'CompanyName', 'IndustryTypeId', 'RegistrationNumber', 'VATNumber', 'BankId', 'AccountNumber')
			THEN 'Personal Details'
		WHEN [ac].[name] IN ('RecipientsName', 'TelephoneNumber', 'OfficeTelephoneNumber', 'MobileTelephoneNumber', 'EmailAddress', 'PreferredLanguageId', 'UseEmailAddress', 'UseTelephoneNumber', 'Website', 'AddressLine1', 'AddressLine2', 'City', 'ProvinceId', 'PostalCode', 'Country')
			THEN 'Contact Details'
		WHEN [ac].[name] IN ('EmployeeId', 'ClientId', 'SupplierId', 'EmailAddress', 'ConfirmPassword', 'Password', 'PasswordHash', 'UserTypeId', 'IsAdmin', 'IsLocked', 'DateLastLoggedIn', 'SessionToken')
			THEN 'User Account'
		ELSE 'Shared'
	END AS [TabName]
	, [e].[Name] AS [EntityName]
	, [ac].[column_id] AS [ColumnId]
	, [ac].[name] AS [ColumnName]
	, CASE WHEN [ac].[name] IN ('IdNumber') THEN [ac].[name] ELSE (SELECT [dbo].[SplitCamelCase]([ac].[name])) END AS [PlaceHolder]
FROM [dbo].[Entity] AS [e]
LEFT JOIN [sys].[tables] AS [t] ON ([e].[Name] = [t].[name])
LEFT JOIN [sys].[all_columns] AS [ac] ON ([t].[object_id] = [ac].[object_id])
WHERE
	([e].[Name] IN ('User', 'Employee', 'Client', 'Supplier', 'ContactDetail'))
)
SELECT
	[TabName]
	, [ColumnName]
	, [ColumnName] + ': new FormControl({value: null, disabled: true}, Validators.required),'
	--*,
	,'<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
	<mat-form-field>
	<input matInput
	type="text"
	id="' + [ColumnName] + '"
	name="' + [ColumnName] + '"
	formControlName="' + [ColumnName] + '"
	class=""
	placeholder="' + (SELECT [dbo].[SplitCamelCase]([ColumnName])) + '" />
	</mat-form-field>
	</div>'
FROM [cte]
WHERE
	[TabName] = 'User Account'
ORDER BY
	[TabName]
	, [ColumnId]