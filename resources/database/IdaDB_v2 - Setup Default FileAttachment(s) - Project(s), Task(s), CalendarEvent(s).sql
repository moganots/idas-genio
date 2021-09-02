USE [IdasGenioDb];
GO

;WITH [files] AS (
SELECT 'Izingodla - Test Project Documentation.doc' AS [FileName], '.doc' AS [FileExtension], 'application/doc' AS [ContentType], 9123  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.docx' AS [FileName], '.docx' AS [FileExtension], 'application/docx' AS [ContentType], 3456789  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.pdf' AS [FileName], '.pdf' AS [FileExtension], 'application/pdf' AS [ContentType], 9876543  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.xls' AS [FileName], '.xls' AS [FileExtension], 'application/xls' AS [ContentType], 56765432  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.xlsx' AS [FileName], '.xlsx' AS [FileExtension], 'application/xlsx' AS [ContentType], 98712654  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.txt' AS [FileName], '.txt' AS [FileExtension], 'application/txt' AS [ContentType], 4562378  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation (1).txt' AS [FileName], '.txt' AS [FileExtension], 'application/txt' AS [ContentType], 0  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation (2).txt' AS [FileName], '.txt' AS [FileExtension], 'application/txt' AS [ContentType], NULL AS [FileSize]
)
, [projectFiles] AS (
	SELECT
       [_id] AS [ProjectId]
      ,[FileName]
      ,[FileExtension]
      ,[ContentType]
      ,[FileSize]
	  ,[CreatedBy]
	FROM [dbo].[Project]
	CROSS JOIN [files]
)
, [taskFiles] AS (
	SELECT
       [_id] AS [TaskId]
      ,[FileName]
      ,[FileExtension]
      ,[ContentType]
      ,[FileSize]
	  ,[CreatedBy]
	FROM [dbo].[Task]
	CROSS JOIN [files]
)
, [calendarEventFiles] AS (
	SELECT
       [_id] AS [CalendarEventId]
      ,[FileName]
      ,[FileExtension]
      ,[ContentType]
      ,[FileSize]
	  ,[CreatedBy]
	FROM [dbo].[CalendarEvent]
	CROSS JOIN [files]
)
SELECT
	[ProjectId]
	,[TaskId]
	,[CalendarEventId]
	,[FileName]
	,[FileExtension]
	,[ContentType]
	,[FileSize]
	,[CreatedBy]
FROM (
	SELECT
		[ProjectId]
		,NULL AS [TaskId]
		,NULL AS [CalendarEventId]
		,[FileName]
		,[FileExtension]
		,[ContentType]
		,[FileSize]
		,[CreatedBy]
	FROM [projectFiles]
	UNION ALL
	SELECT
		NULL AS [ProjectId]
		,[TaskId]
		,NULL AS [CalendarEventId]
		,[FileName]
		,[FileExtension]
		,[ContentType]
		,[FileSize]
		,[CreatedBy]
	FROM [taskFiles]
	UNION ALL
	SELECT
		NULL AS [ProjectId]
		,NULL AS [TaskId]
		,[CalendarEventId]
		,[FileName]
		,[FileExtension]
		,[ContentType]
		,[FileSize]
		,[CreatedBy]
	FROM [calendarEventFiles]
) AS [fileAttachments];