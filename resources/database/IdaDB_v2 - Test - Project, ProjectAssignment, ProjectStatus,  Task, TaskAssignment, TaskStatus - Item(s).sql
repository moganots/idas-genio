-- ==============================================================================================================================
-- Test - Project, ProjectAssignment, ProjectStatus, Task, TaskAssignment, TaskStatus
-- ==============================================================================================================================

-- Project(s) - Start and End Date(s)
DECLARE @TestProject1DateCreated DATETIME = (DATEADD(MONTH, -4, GETDATE()))
DECLARE @TestProject2DateCreated DATETIME = (DATEADD(MONTH, -2, '3 MAY 2021 13:09:44'))
DECLARE @TestProject3DateCreated DATETIME = (DATEADD(MONTH, -1, '23 JANUARY 2021 08:59:59'))

-- Temp Table(s)
-- Project(s)
DECLARE @TestProjects TABLE (
[_id] [bigint] IDENTITY(1,1) NOT NULL,
[Name] [nvarchar](255) NOT NULL,
[Description] [nvarchar](255) NOT NULL,
[StartDate] [datetime] NOT NULL,
[EndDate] [datetime] NOT NULL,
[CreatedBy] [bigint] NULL,
[DateCreated] [datetime] NULL
);
-- Assignee(s)
DECLARE @TestAssignees TABLE (
[UserId] [bigint] NOT NULL,
[EmailAddress] [nvarchar](320) NOT NULL
);
-- Project Assignment(s)
DECLARE @TestProjectAssignments TABLE (
[_id] [bigint] IDENTITY(1,1) NOT NULL,
[ProjectId] [bigint] NOT NULL,
[ProjectAssignmentTypeId] [bigint] NOT NULL,
[AssigneeId] [bigint] NOT NULL,
[PreviousAssigneeId] [bigint] NULL,
[CreatedBy] [bigint] NULL,
[DateCreated] [datetime] NULL
);
-- Project Status(es)
DECLARE @TestProjectStatuses TABLE (
[_id] [bigint] IDENTITY(1,1) NOT NULL,
[ProjectId] [bigint] NOT NULL,
[StatusId] [bigint] NOT NULL,
[CreatedBy] [bigint] NULL,
[DateCreated] [datetime] NULL
);
-- Project Task(s)
DECLARE @TestProjectTasks TABLE (
[_id] [bigint] IDENTITY(1,1) NOT NULL,
[ProjectId] [bigint] NOT NULL,
[Summary] [nvarchar](255) NOT NULL,
[Description] [nvarchar](255) NOT NULL,
[CreatedBy] [bigint] NULL,
[DateCreated] [datetime] NULL
);
-- Project Task Assignment(s)
DECLARE @TestProjectTaskAssignments TABLE (
[_id] [bigint] IDENTITY(1,1) NOT NULL,
[TaskId] [bigint] NOT NULL,
[AssigneeId] [bigint] NOT NULL,
[PreviousAssigneeId] [bigint] NULL,
[CreatedBy] [bigint] NULL,
[DateCreated] [datetime] NULL
);
-- Project Task Status(es)
DECLARE @TestProjectTaskStatuses TABLE (
[_id] [bigint] IDENTITY(1,1) NOT NULL,
[TaskId] [bigint] NOT NULL,
[StatusId] [bigint] NOT NULL,
[CreatedBy] [bigint] NULL,
[DateCreated] [datetime] NULL
);

-- ==============================================================================================================================
-- Setup >> Default > Test Project(s)
-- ==============================================================================================================================
INSERT INTO @TestProjects
SELECT
	[Name]
	,[Description]
	,[StartDate]
	,[EndDate]
	,NULL AS [CreatedBy]
	,[StartDate] AS [DateCreated]
FROM (
SELECT 'Test Project 1' AS [Name], 'Test Project 1' AS [Description], @TestProject1DateCreated AS [StartDate], (DATEADD(YEAR, 2, @TestProject1DateCreated)) AS [EndDate] UNION
SELECT 'Test Project 2' AS [Name], 'Test Project 2' AS [Description], @TestProject2DateCreated AS [StartDate], (DATEADD(MONTH, 8, @TestProject2DateCreated)) AS [EndDate] UNION
SELECT 'Test Project 3' AS [Name], 'Test Project 3' AS [Description], @TestProject3DateCreated AS [StartDate], (DATEADD(WEEK, 67, @TestProject3DateCreated)) AS [EndDate]
) AS [TestProjects];

-- ==============================================================================================================================
-- Setup >> Default > Test Project Assignee(s)
-- ==============================================================================================================================
INSERT INTO @TestAssignees
SELECT
	[u].[_id] AS [UserId]
	,[u].[EmailAddress]
FROM (
SELECT 'Jane.Doe@genio.idas.co.za' AS [EmailAddress] UNION
SELECT 'John.Doe@genio.idas.co.za' AS [EmailAddress] UNION
SELECT 'Bad.Work@genio.idas.co.za' AS [EmailAddress] UNION
SELECT 'Joe.Soap@genio.idas.co.za' AS [EmailAddress] UNION
SELECT 'Good.Job@genio.idas.co.za' AS [EmailAddress]
) AS [TestAssignees]
JOIN [dbo].[User] AS [u] ON ([TestAssignees].[EmailAddress] = [u].[EmailAddress]);

-- ==============================================================================================================================
-- Setup >> Default > Test Project Assignment(s)
-- ==============================================================================================================================
INSERT INTO @TestProjectAssignments
SELECT
	[p].[_id] AS [ProjectId]
	,[ProjectAssignmentTypeId]
	,[pa].[UserId] AS [AssigneeId]
	,NULL AS [PreviousAssigneeId]
	,NULL AS [CreatedBy]
	,(DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [p].[DateCreated])))))) AS [DateCreated]
FROM @TestProjects AS [p]
LEFT JOIN (
	SELECT
		[UserId]
		,[EmailAddress]
		,[pat].[ProjectAssignmentTypeId]
		,[pat].[ProjectAssignmentType]
	FROM @TestAssignees
	CROSS JOIN (
		SELECT
			[lv].[_id] AS [ProjectAssignmentTypeId]
			,[lv].[Value] AS [ProjectAssignmentType]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'ProjectAssignmentType')
	) AS [pat]
) AS [pa] ON (
	-- Project Manager(s)
	(
		[p].[Name] IN ('Test Project 1') AND [pa].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Project Manager')
	)
	OR (
		[p].[Name] IN ('Test Project 2') AND [pa].[EmailAddress] IN ('John.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Project Manager')
	)
	OR (
		[p].[Name] IN ('Test Project 3') AND [pa].[EmailAddress] IN ('Good.Job@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Project Manager')
	)
	-- Business Analyst(s)
	OR (
		[p].[Name] IN ('Test Project 1') AND [pa].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Business Analyst')
	)
	OR (
		[p].[Name] IN ('Test Project 2') AND [pa].[EmailAddress] IN ('Bad.Work@genio.idas.co.za', 'Good.Job@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Business Analyst')
	)
	OR (
		[p].[Name] IN ('Test Project 3') AND [pa].[EmailAddress] IN ('Good.Job@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Business Analyst')
	)
	-- Senior Engineer(s)
	OR (
		[p].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3') AND [pa].[EmailAddress] IN ('John.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Senior Engineer')
	)
	-- Engineer(s)
	OR (
		[p].[Name] IN ('Test Project 1', 'Test Project 2') AND [pa].[EmailAddress] IN ('Joe.Soap@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Engineer')
	)
)

-- ==============================================================================================================================
-- Setup >> Default > Update Test Project(s) > CreatedBy
-- ==============================================================================================================================
UPDATE [p]
SET
	[CreatedBy] = [pa].[AssigneeId]
FROM @TestProjects AS [p]
JOIN @TestProjectAssignments AS [pa] ON ([p].[_id] = [pa].[ProjectId])
JOIN [dbo].[LookupValue] AS [lv] ON ([pa].[ProjectAssignmentTypeId] = [lv].[_id])
WHERE
	([lv].[Value] = 'Project Manager')

-- ==============================================================================================================================
-- Setup >> Default > Update Test Project Assignment(s) > CreatedBy
-- ==============================================================================================================================
UPDATE [pa]
SET
	[CreatedBy] = [tpacb].[AssigneeId]
FROM @TestProjectAssignments AS [pa]
LEFT JOIN (
	SELECT
		[tpa].[ProjectId]
		,[AssigneeId]
		,[p].[Name] AS [ProjectName]
		,[lv].[Value] AS [ProjectAssignmentType]
	FROM @TestProjectAssignments AS [tpa]
	JOIN @TestProjects AS [p] ON ([p].[_id] = [tpa].[ProjectId])
	JOIN [dbo].[LookupValue] AS [lv] ON ([tpa].[ProjectAssignmentTypeId] = [lv].[_id])
) AS [tpacb] ON (
	-- Assignment > Created By > Project Manager
	(
		([pa].[ProjectId] = [tpacb].[ProjectId])
		AND ([tpacb].[ProjectName] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
		AND ([tpacb].[ProjectAssignmentType] IN ('Project Manager'))
	)
)

-- ==============================================================================================================================
-- Setup >> Default > Test Project Status(es)
-- ==============================================================================================================================
INSERT INTO @TestProjectStatuses
SELECT
	[p].[_id] AS [ProjectId]
	,[StatusId]
	,CASE
		WHEN [ps].[StatusName] IN ('Created', 'Not Started')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('Started')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('On Hold')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('Cancelled')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('In Progress')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('Completed')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('Blocked')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('Done')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		ELSE [tpa].[AssigneeId]
	END AS [CreatedBy]
	,CASE
		WHEN [ps].[StatusName] IN ('Created', 'Not Started')
			THEN [p].[DateCreated]
		WHEN [ps].[StatusName] IN ('Started')
			THEN (DATEADD(HOUR, (91 % 5), (DATEADD(MINUTE, (87 % 3), [tpa].[DateCreated]))))
		WHEN [ps].[StatusName] IN ('On Hold')
			THEN (DATEADD(MONTH, 2, [tpa].[DateCreated]))
		WHEN [ps].[StatusName] IN ('Cancelled')
			THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
		WHEN [ps].[StatusName] IN ('In Progress')
			THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
		WHEN [ps].[StatusName] IN ('Completed')
			THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
		WHEN [ps].[StatusName] IN ('Blocked')
			THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
		WHEN [ps].[StatusName] IN ('Done')
			THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
		ELSE [tpa].[DateCreated]
	END AS [DateCreated]
FROM @TestProjects AS [p]
LEFT JOIN @TestProjectAssignments AS [tpa] ON ([p].[_id] = [tpa].[ProjectId])
LEFT JOIN [dbo].[LookupValue] AS [lvpa] ON ([tpa].[ProjectAssignmentTypeId] = [lvpa].[_id])
LEFT JOIN (
	SELECT
		[lv].[_id] AS [StatusId]
		,[lv].[Value] AS [StatusName]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'Status')
) AS [ps] ON (
	-- Project >> Status >> Created, Not Started > By Project Manager
	(
		([p].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
		AND ([ps].[StatusName] IN ('Created', 'Not Started'))
		AND ([lvpa].[Value] IN ('Project Manager'))
	)
	-- Project >> Status >> Started > By Project Manager
	OR (
		([p].[Name] IN ('Test Project 1', 'Test Project 2'))
		AND ([ps].[StatusName] IN ('Started'))
		AND ([lvpa].[Value] IN ('Project Manager'))
	)
	-- Project >> Status >> Started > By Business Analyst
	OR (
		([p].[Name] IN ('Test Project 3'))
		AND ([ps].[StatusName] IN ('Started'))
		AND ([lvpa].[Value] IN ('Business Analyst'))
	)
	-- Project >> Status >> On Hold, Cancelled > By Project Manager, Senior Engineer, Business Analyst, Engineer
	OR (
		([p].[Name] IN ('Test Project 2'))
		AND ([ps].[StatusName] IN ('On Hold', 'Cancelled'))
		AND ([lvpa].[Value] IN ('Project Manager', 'Senior Engineer', 'Business Analyst', 'Engineer'))
	)
	-- Project >> Status >> On Hold > By Senior Engineer
	OR (
		([p].[Name] IN ('Test Project 3'))
		AND ([ps].[StatusName] IN ('On Hold'))
		AND ([lvpa].[Value] IN ('Senior Engineer'))
	)
	-- Project >> Status >> In Progress > By Business Analyst
	OR (
		([p].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
		AND ([ps].[StatusName] IN ('In Progress'))
		AND ([lvpa].[Value] IN ('Business Analyst'))
	)
	-- Project >> Status >> Completed > By Senior Engineer, Engineer
	OR (
		([p].[Name] IN ('Test Project 1'))
		AND ([ps].[StatusName] IN ('Completed'))
		AND ([lvpa].[Value] IN ('Senior Engineer', 'Engineer'))
	)
	-- Project >> Status >> Blocked, Done > By Business Analyst
	OR (
		([p].[Name] IN ('Test Project 1'))
		AND ([ps].[StatusName] IN ('Blocked', 'Done'))
		AND ([lvpa].[Value] IN ('Business Analyst'))
	)
)

-- ==============================================================================================================================
-- Setup >> Default > Test Project Task(s)
-- ==============================================================================================================================
INSERT INTO @TestProjectTasks
SELECT DISTINCT
	[pa].[ProjectId]
	,'As a ' + [lvpa].[Value] + ', I want to ' + [lvps].[Value] + ' on the ' + [p].[Name] + ' project' AS [Summary]
	,[lvps].[Value] + ' on the ' + [p].[Name] + ' project' AS [Description]
	,[pa].[AssigneeId] AS [CreatedBy]
	,[ps].[DateCreated]
FROM @TestProjectAssignments AS [pa]
JOIN [dbo].[LookupValue] AS [lvpa] ON ([pa].[ProjectAssignmentTypeId] = [lvpa].[_id])
JOIN [dbo].[Project] AS [p] ON ([pa].[ProjectId] = [p].[_id])
JOIN @TestProjectStatuses AS [ps] ON ([pa].[AssigneeId] = [ps].[CreatedBy])
JOIN [dbo].[LookupValue] AS [lvps] ON ([ps].[StatusId] = [lvps].[_id])

-- ==============================================================================================================================
-- Setup >> Default > Test Project Task Assignment(s)
-- ==============================================================================================================================
INSERT INTO @TestProjectTaskAssignments
SELECT DISTINCT
	[_id] AS [TaskId]
	,[CreatedBy] AS [AssigneeId]
	,NULL AS [PreviousAssigneeId]
	,[CreatedBy]
	,[DateCreated]
FROM @TestProjectTasks

-- ==============================================================================================================================
-- Setup >> Default > Test Project Task Status(es)
-- ==============================================================================================================================
INSERT INTO @TestProjectTaskStatuses
SELECT DISTINCT
	[ptsk].[_id] AS [TaskId]
	,[psts].[StatusId]
	,[ptska].[CreatedBy]
	,[psts].[DateCreated]
FROM @TestProjectTasks AS [ptsk]
JOIN @TestProjectTaskAssignments AS [ptska] ON ([ptsk].[_id] = [ptska].[TaskId])
JOIN @TestProjectStatuses AS [psts] ON ([ptsk].[ProjectId] = [psts].[ProjectId])

SELECT * FROM @TestProjects
SELECT * FROM @TestProjectAssignments
SELECT * FROM @TestProjectStatuses
SELECT * FROM @TestProjectTasks
SELECT * FROM @TestProjectTaskAssignments
SELECT * FROM @TestProjectTaskStatuses