USE [IdasGenioDb];
GO

DECLARE @FileAttachmentId [bigint] = 1;

SELECT
	CONCAT(
		[cs].[Value]
		, '/'
		, CASE
			WHEN [fa].[ProjectId] IS NOT NULL THEN 'project'
			WHEN [fa].[TaskId] IS NOT NULL THEN 'task'
			WHEN [fa].[CalendarEventId] IS NOT NULL THEN 'calendar-event'
			ELSE 'file' END
		, '/'
		, COALESCE([fa].[ProjectId], [fa].[TaskId], [fa].[CalendarEventId], [fa].[_id])
		, CASE
			WHEN
				[fa].[ProjectId] IS NOT NULL
				OR [fa].[TaskId] IS NOT NULL
				OR [fa].[CalendarEventId] IS NOT NULL
					THEN CONCAT('/', [fa].[_id])
			ELSE '' END
	)
FROM [dbo].[FileAttachment] AS [fa]
CROSS JOIN [dbo].[ConfigurationSetting] AS [cs]
WHERE
	([fa].[_id] = @FileAttachmentId)
	AND ([cs].[Name] = 'AppAttachmentsRouterLink')