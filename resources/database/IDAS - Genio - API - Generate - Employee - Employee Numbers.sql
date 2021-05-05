USE [IdasGenioDb];
GO

DECLARE @EmployeeId BIGINT = 1
DECLARE @PositionId BIGINT = (SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Position' AND [lv].[Value] = 'Engineer'))
DECLARE @EmploymentTypeId BIGINT = (SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'EmploymentType' AND [lv].[Value] = 'Permanent'))

DECLARE @Position NVARCHAR(1) = (SELECT UPPER(LEFT([lv].[Value], 1)) FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] WHERE [lv].[_id] = @PositionId)
DECLARE @EmploymentType NVARCHAR(1) = (SELECT UPPER(LEFT([lv].[Value], 1)) FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] WHERE [lv].[_id] = @EmploymentTypeId)
DECLARE @EmployeeNumber NVARCHAR(10) = CONCAT(@Position, @EmploymentType, (SELECT CAST((RAND() * (899999) + 100000) AS BIGINT)))

WHILE((SELECT COUNT([_id]) FROM [dbo].[Employee] WHERE [EmployeeNumber] LIKE '%' + @EmployeeNumber + '%') <> 0)
BEGIN
	SET @EmployeeNumber = CONCAT(@Position, @EmploymentType, (SELECT CAST((RAND() * (899999) + 100000) AS BIGINT)))
END

SELECT
	@EmployeeId [@EmployeeId],
	@PositionId [@PositionId],
	@EmploymentTypeId [@EmploymentTypeId],
	@Position [@Position],
	@EmploymentType [@EmploymentType],
	@EmployeeNumber [@EmployeeNumber]

