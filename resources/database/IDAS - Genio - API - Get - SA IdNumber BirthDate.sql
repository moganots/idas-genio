USE [IdasGenioDb];
GO

DECLARE @SAIdNumber BIGINT = null;
DECLARE @Year BIGINT = CAST(SUBSTRING(CAST(@SAIdNumber AS NVARCHAR(13)), 1, 2) AS INT);
DECLARE @Month BIGINT = CAST(SUBSTRING(CAST(@SAIdNumber AS NVARCHAR(13)), 3, 2) AS INT);
DECLARE @Day BIGINT = CAST(SUBSTRING(CAST(@SAIdNumber AS NVARCHAR(13)), 5, 2) AS INT);
DECLARE @DoB DATE = (SELECT CAST(CAST((@Year * 10000) + (@Month * 100) + @Day AS VARCHAR(255)) AS DATE));
DECLARE @GenderIndicator BIGINT = CAST(SUBSTRING(CAST(@SAIdNumber AS NVARCHAR(13)), 7, 4) AS INT);
DECLARE @GenderMaleOrFemale NVARCHAR(10) = CASE WHEN @GenderIndicator BETWEEN 0 AND 4999 THEN 'Female' WHEN @GenderIndicator BETWEEN 5000 AND 9999 THEN 'Male' ELSE 'Other' END;
DECLARE @GenderId BIGINT = (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv] ,[dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND ([lc].[Name] = 'Gender') AND ([lv].[Value] = @GenderMaleOrFemale));

-- 0 1 2 3 4 5 6 7 8 9 10 11 12 -- 0-based index
-- 1 2 3 4 5 6 7 8 9 10 11 12 13 -- Non 0-based index
-- Y Y M M D D S S S S C  A  Z
-- 9 3 0 4 1 9 5 6 5 9 0  8  1
SELECT
	@SAIdNumber [@SAIdNumber],
	@Year [@Year],
	@Month [@Month],
	@Day [@Day],
	@DoB [@DoB],
	@GenderIndicator [@GenderIndicator],
	@GenderMaleOrFemale [@GenderMaleOrFemale],
	@GenderId [@GenderId]

