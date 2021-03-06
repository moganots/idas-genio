USE [IdasGenioDb];
GO

SELECT
	[lc].[Code]
	,[lc].[Name]
	,[lc].[Description]
	,'$idas-color-' + LOWER(REPLACE(RTRIM(LTRIM([lc].[Name])), ' ', '-')) + ':;' AS [CssClassCategoryColorsParameter]
	,'&.' + LOWER(REPLACE(RTRIM(LTRIM([lc].[Name])), ' ', '-')) + '{background-color: $idas-color-' + LOWER(REPLACE(RTRIM(LTRIM([lc].[Name])), ' ', '-')) + ';}' AS [CssClassCategoryParagraph]
	,'&.' + LOWER(REPLACE(RTRIM(LTRIM([lc].[Name])), ' ', '-')) + '{color: $idas-color-' + LOWER(REPLACE(RTRIM(LTRIM([lc].[Name])), ' ', '-')) + ';}' AS [CssClassCategoryIcon]
	,[lv].[Value]
	,[lv].[Icon]
	,'$idas-color-' + LOWER(REPLACE(RTRIM(LTRIM([lc].[Name])), ' ', '-')) + '-' + LOWER(REPLACE(RTRIM(LTRIM([lv].[Value])), ' ', '-')) +  + ':;' AS [CssClassColorsParameter]
	,'&.' + LOWER(REPLACE(RTRIM(LTRIM([lv].[Value])), ' ', '-')) + '{background-color: $idas-color-' + LOWER(REPLACE(RTRIM(LTRIM([lc].[Name])), ' ', '-')) + '-' + LOWER(REPLACE(RTRIM(LTRIM([lv].[Value])), ' ', '-')) + ';}' AS [CssClassParagraph]
	,'&.' + LOWER(REPLACE(RTRIM(LTRIM([lv].[Value])), ' ', '-')) + '{color: $idas-color-' + LOWER(REPLACE(RTRIM(LTRIM([lc].[Name])), ' ', '-')) + '-' + LOWER(REPLACE(RTRIM(LTRIM([lv].[Value])), ' ', '-')) + ';}' AS [CssClassIcon]
FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
WHERE
	([lv].[LookupCategoryId] = [lc].[_id])
	AND ([lc].[Name] = 'CalendarEventType')