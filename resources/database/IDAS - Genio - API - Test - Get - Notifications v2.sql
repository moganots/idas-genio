USE [IdasGenioDb]
GO

;WITH [notifications] AS (
	SELECT
		[_id] AS [NotificationId]
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
		,[id] AS [EntityId]
		,[EntityName]
		,(SELECT [dbo].[SplitCamelCase]([EntityName])) AS [EntityNameFormatted]
		,COALESCE(
			JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.CalendarEventId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ClientId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.EmployeeId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.InboxMessageId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectAssignementId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectCommentId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectReviewId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.SupplierId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskAssignementId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskCommentId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskReviewId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.UserId')
			) AS [RelatedEntityId]
		,CASE
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.CalendarEventId')))) <> 0 THEN 'CalendarEvent'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ClientId')))) <> 0 THEN 'Client'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.EmployeeId')))) <> 0 THEN 'Employee'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.InboxMessageId')))) <> 0 THEN 'InboxMessage'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectId')))) <> 0 THEN 'Project'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectAssignementId')))) <> 0 THEN 'ProjectAssignement'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectCommentId')))) <> 0 THEN 'ProjectComment'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectReviewId')))) <> 0 THEN 'ProjectReview'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.SupplierId')))) <> 0 THEN 'Supplier'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskId')))) <> 0 THEN 'Task'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskAssignementId')))) <> 0 THEN 'TaskAssignement'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskCommentId')))) <> 0 THEN 'TaskComment'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskReviewId')))) <> 0 THEN 'TaskReview'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.UserId')))) <> 0 THEN 'User'
			END AS [RelatedEntityName]
		,CASE
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.CalendarEventId')))) <> 0 THEN 'Calendar Event'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ClientId')))) <> 0 THEN 'Client'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.EmployeeId')))) <> 0 THEN 'Employee'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.InboxMessageId')))) <> 0 THEN 'Inbox Message'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectId')))) <> 0 THEN 'Project'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectAssignementId')))) <> 0 THEN 'Project Assignement'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectCommentId')))) <> 0 THEN 'Project Comment'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ProjectReviewId')))) <> 0 THEN 'Project Review'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.SupplierId')))) <> 0 THEN 'Supplier'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskId')))) <> 0 THEN 'Task'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskAssignementId')))) <> 0 THEN 'Task Assignement'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskCommentId')))) <> 0 THEN 'Task Comment'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.TaskReviewId')))) <> 0 THEN 'Task Review'
			WHEN LEN(LTRIM(RTRIM(JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.UserId')))) <> 0 THEN 'User'
			END AS [RelatedEntityNameFormatted]
		,COALESCE(
			(SELECT [dbo].[ValueJoinNameSurnameCompanyName](JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Name'), JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Surname'), JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.CompanyName')))
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Title')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Description')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Comment')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Summary')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Review')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Subject')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Value')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Value2')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.Value3')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.FileName')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.EmailAddress')
			) AS [Title]
		,COALESCE(
			JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.AssigneeId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.AttendeeId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.RecipientId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.UserId')
			,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.CreatedBy')
			) AS [UserId]		
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.CreatedBy') AS [CreatedBy]
		,JSON_VALUE(REPLACE(REPLACE([CurrentValue], '[{', '{'), '}]', '}'), '$.ModifiedBy') AS [ModifiedBy]
	FROM [dbo].[EntityChangeHistory]
)
SELECT
	*
FROM [notifications] AS [n]
WHERE
	([EntityName] IN ('CalendarEvent', 'CalendarEventAttendee', 'Client', 'ContactDetail', 'Employee', 'FileAttachment', 'InboxMessage', /*'LookupCategory', 'LookupValue', 'MenuItem', */'Project', 'ProjectAssignment', 'ProjectComment', 'ProjectReview', 'Supplier', 'Task', 'TaskAssignment', 'TaskComment', 'TaskReview', 'User'))
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