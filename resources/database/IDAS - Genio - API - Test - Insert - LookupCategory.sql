USE [IdasGenioDb];
GO

;WITH [cte] AS (
	SELECT DISTINCT
		LEFT([ChildEntityColumnName], LEN([ChildEntityColumnName]) - 2) AS [LookupCategory]
	FROM [dbo].[Entity] AS [e], [dbo].[EntityRelationship] AS [er]
	WHERE
		([e].[_id] = [er].[ParentEntityId])
		AND ([e].[Name] = 'LookupValue')
	UNION
	SELECT 'BudgetCode' AS [LookupCategory] UNION
	SELECT 'WageType' AS [LookupCategory]
)
SELECT
	CASE
		WHEN [LookupCategory] IN ('Bank') THEN 'BNK'
		WHEN [LookupCategory] IN ('BudgetCode') THEN 'BGCDE'
		WHEN [LookupCategory] IN ('Capacity') THEN 'CPCTY'
		WHEN [LookupCategory] IN ('Country') THEN 'CNTR'
		WHEN [LookupCategory] IN ('Department') THEN 'DEPT'
		WHEN [LookupCategory] IN ('EmploymentType') THEN 'EMPTY'
		WHEN [LookupCategory] IN ('Gender') THEN 'GND'
		WHEN [LookupCategory] IN ('Group') THEN 'GRP'
		WHEN [LookupCategory] IN ('IndustryType') THEN 'INDTY'
		WHEN [LookupCategory] IN ('Position') THEN 'POST'
		WHEN [LookupCategory] IN ('PreferredLanguage') THEN 'LNG'
		WHEN [LookupCategory] IN ('Priority') THEN 'PRTY'
		WHEN [LookupCategory] IN ('ProjectAssignmentType') THEN 'PJATY'
		WHEN [LookupCategory] IN ('ProjectType') THEN 'PJTY'
		WHEN [LookupCategory] IN ('Province') THEN 'PRVC'
		WHEN [LookupCategory] IN ('Salutation') THEN 'SLTN'
		WHEN [LookupCategory] IN ('ScheduleType') THEN 'SCHTY'
		WHEN [LookupCategory] IN ('Status') THEN 'STS'
		WHEN [LookupCategory] IN ('TaskType') THEN 'TSKTY'
		WHEN [LookupCategory] IN ('TransactionType') THEN 'TRATY'
		WHEN [LookupCategory] IN ('UserLockReason') THEN 'ULR'
		WHEN [LookupCategory] IN ('UserType') THEN 'UT'
		WHEN [LookupCategory] IN ('WageType') THEN 'WGTY'
	ELSE 'NOCAT' END AS [Code]
	,[LookupCategory] AS [Name]
	,[LookupCategory] AS [Description]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]