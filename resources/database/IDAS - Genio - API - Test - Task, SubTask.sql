USE [IdasGenioDb];
GO

DECLARE @ProjectId [bigint] = (SELECT [_id] FROM [dbo].[Project] WHERE [Name] = 'Test Project 3');
DECLARE @Name [nvarchar](255) = 'Create New Project Task';
DECLARE @Description [nvarchar](255) = 'Create New Project Task';
DECLARE @TaskTypeId [bigint] = 686;
DECLARE @PriorityId [bigint] = 514;
DECLARE @ParentTaskId [bigint] = 44; --(SELECT TOP 1 [_id] FROM [dbo].[Task] WHERE [ProjectId] = @ProjectId); --NULL
DECLARE @StatusId [bigint] = 679;
DECLARE @AssigneeId [bigint] =  (SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'john.doe@genio.idas.co.za');
DECLARE @CreatedBy [bigint] =  (SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'bad.job@genio.idas.co.za');

EXEC [dbo].[spCreateOrInsert_Task] @ProjectId, @Name, @Description, @TaskTypeId, @PriorityId, @ParentTaskId, @CreatedBy, @AssigneeId, @StatusId