USE [IdasGenioDb];
GO

DECLARE @UserId [bigint] = 1
DECLARE @GroupId [bigint] = NULL

SELECT
	[u].[_id] AS [UserId],
	[lvg].[_id] AS [GroupId],
	[lvg].[Value] AS [GroupName]
FROM
	[dbo].[User] AS [u],
	[dbo].[LookupValue] AS [lvg],
	[dbo].[LookupCategory] AS [lc],
	[dbo].[UserGroup] AS [ug]
WHERE
	([u].[_id] = [ug].[UserId])
	AND (@UserId IS NULL OR [u].[_id] = @UserId)
	AND ([lvg].[_id] = [ug].[GroupId])
	AND ([lc].[_id] = [lvg].[LookupCategoryId] AND [lc].[Name] = 'Group')
	AND (@GroupId IS NULL OR [lvg].[_id] = @GroupId)


/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [_id]
      ,[UserId]
      ,[GroupId]
      ,[IsActive]
      ,[CreatedBy]
      ,[DateCreated]
      ,[ModifiedBy]
      ,[DateModified]
  FROM [IdasGenioDb].[dbo].[UserGroup]