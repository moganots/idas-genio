/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [_id]
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
  WHERE
	(YEAR([DateCreated]) = YEAR(GETDATE()))
	AND (MONTH([DateCreated]) = MONTH(GETDATE()))
	AND (DAY([DateCreated]) = DAY(GETDATE()))
ORDER BY [DateCreated] DESC