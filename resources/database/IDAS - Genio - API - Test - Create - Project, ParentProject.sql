USE [IdasGenioDb]
GO

DECLARE @ParentProjectName nvarchar(510) = 'Test Project 2'
DECLARE @CreatedByEmailAddress nvarchar(310) = 'good.job@genio.idas.co.za';
-- DECLARE @CreatedByEmailAddress nvarchar(310) = 'jane.doe@genio.idas.co.za';
-- DECLARE @CreatedByEmailAddress nvarchar(310) = 'john.doe@genio.idas.co.za';

DECLARE @RC int
DECLARE @Name nvarchar(510) = CONCAT('Test Project', CONCAT(' - ', (SELECT (ISNULL(COUNT([_id]), 0) + 1) FROM [dbo].[Project])));
DECLARE @Code nvarchar(510)
DECLARE @Description nvarchar(510) = @Name;

/*************************************************************************
 * 'Administrative', 'Business Implementation', 'Computer Software Development', 'Construction', 'Design', 'Integration', 'New Product Development', 'Processes, Procedures and Training', 'Proposal', 'Social'
 *************************************************************************/
DECLARE @ProjectTypeId bigint = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND [lc].[Name] = 'ProjectType' AND [lv].[Value] = 'Processes, Procedures and Training');
-- DECLARE @ProjectTypeId bigint = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND [lc].[Name] = 'ProjectType' AND [lv].[Value] = 'New Product Development');
-- DECLARE @ProjectTypeId bigint = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND [lc].[Name] = 'ProjectType' AND [lv].[Value] = 'Proposal');
-- DECLARE @ProjectTypeId bigint = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND [lc].[Name] = 'ProjectType' AND [lv].[Value] = 'Design');
-- DECLARE @ProjectTypeId bigint = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND [lc].[Name] = 'ProjectType' AND [lv].[Value] = 'Administrative');

/*************************************************************************
 * 'Blocked', 'Blocker', 'Critical', 'Dependency', 'Done', 'High', 'Highest', 'Low', 'Lowest', 'Major', 'Medium', 'Minor', 'Normal', 'Trivial'
 *************************************************************************/
DECLARE @PriorityId bigint = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND [lc].[Name] = 'Priority' AND [lv].[Value] = 'High');
-- DECLARE @PriorityId bigint = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND [lc].[Name] = 'Priority' AND [lv].[Value] = 'Low');
-- DECLARE @PriorityId bigint = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND [lc].[Name] = 'Priority' AND [lv].[Value] = 'Highest');
-- DECLARE @PriorityId bigint = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND [lc].[Name] = 'Priority' AND [lv].[Value] = 'Minor');
-- DECLARE @PriorityId bigint = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND [lc].[Name] = 'Priority' AND [lv].[Value] = 'Critical');

DECLARE @StartDate datetime = GETDATE();
DECLARE @EndDate datetime = DATEADD(YEAR, 2, DATEADD(MONTH, 12, DATEADD(DAY, 365, DATEADD(HOUR, 24, DATEADD(MINUTE, 60, @StartDate)))));
DECLARE @ParentProjectId bigint = (SELECT [_id] FROM [dbo].[Project] WHERE [Name] = @ParentProjectName);
DECLARE @CreatedBy bigint = (SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = @CreatedByEmailAddress);

-- TODO: Set parameter values here.

EXECUTE @RC = [dbo].[spCreateOrInsert_Project] 
   @Name
  ,@Code
  ,@Description
  ,@ProjectTypeId
  ,@PriorityId
  ,@StartDate
  ,@EndDate
  ,@ParentProjectId
  ,@CreatedBy
GO


