USE [IdasGenioDb];
GO

DECLARE @IdNumber [bigint] = 8110225338085;
DECLARE @EmploymentTypeId [bigint] = 242;
DECLARE @PositionId [bigint] = 482;

DECLARE @BirthDate [date] = (SELECT [dbo].[GetSAIdNumberBirthDate](@IdNumber));
DECLARE @GenderId [bigint] = (SELECT [dbo].[GetSAIdNumberGenderId](@IdNumber));
DECLARE @EmployeeNumber [nvarchar](255) = (SELECT [dbo].[GenerateEmployeeNumber](@PositionId, @EmploymentTypeId));

SELECT
	@BirthDate [@BirthDate]
	,@GenderId [@GenderId]
	,@EmployeeNumber [@EmployeeNumber]