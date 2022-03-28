USE [IdasGenioDb]
GO

;WITH [notifications] AS (
	SELECT
		[id]
		,CASE
			WHEN LOWER(RTRIM(LTRIM([Operation]))) IN ('add', 'create', 'insert', 'new') THEN 
				CASE
					WHEN [EntityName] IN ('CalendarEventAttendee') THEN 'invite'
					WHEN [EntityName] IN ('FileAttachment') THEN 'attach'
					WHEN [EntityName] IN ('TaskAssignment', 'ProjectAssignment') THEN 'assign'
					WHEN [EntityName] IN ('TaskReview', 'ProjectReview') THEN 'review'
					ELSE 'new'
				END
			WHEN LOWER(RTRIM(LTRIM([Operation]))) IN ('change', 'edit', 'update') THEN 'change'
			WHEN LOWER(RTRIM(LTRIM([Operation]))) IN ('archive', 'deactivate', 'delete', 'remove') THEN
				CASE
					WHEN [EntityName] IN ('User') THEN 'deactivate'
					ELSE 'delete'
				END
		END AS [TransactionType]
		,[EntityName]
		,(SELECT [dbo].[SplitCamelCase]([EntityName])) AS [EntityNameFormatted]
		,COALESCE(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Name')
		, JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Title')
		, JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Description')
		, JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Comment')
		, JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Summary')
		, JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Review')) AS [Title]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.CalendarEventId') AS [CalendarEventId]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.AttendeeId') AS [AttendeeId]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ClientId') AS [ClientId]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.EmployeeId') AS [EmployeeId]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.SupplierId') AS [SupplierId]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectId') AS [ProjectId]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskId') AS [TaskId]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.AssigneeId') AS [AssigneeId]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.StatusId') AS [StatusId]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.UserId') AS [UserId]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.IsActive') AS [IsActive]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.CreatedBy') AS [CreatedBy]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ModifiedBy') AS [ModifiedBy]
		--,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.') AS [CalendarEventId]
	FROM [dbo].[EntityChangeHistory]
)
SELECT
	*
FROM [notifications]
ORDER BY
	[EntityName]

/****** Script for SelectTopNRows command from SSMS  *****
SELECT  [_id]
      ,[Operation]
      ,[EntityName]
      ,[id]
      ,[CurrentValue]
      ,[PreviousValue]
      ,[IsActive]
      ,[CreatedBy]
      ,[DateCreated]
      ,[ModifiedBy]
      ,[DateModified]
  FROM [IdasGenioDb].[dbo].[EntityChangeHistory]

  */