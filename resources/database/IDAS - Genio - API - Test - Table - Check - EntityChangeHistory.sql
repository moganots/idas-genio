/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [_id]
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
  ([EntityName] IN ('InboxMessage', 'InboxMessageRecipient'))
  AND (
	((YEAR([DateCreated]) = YEAR(GETDATE()))
	AND (MONTH([DateCreated]) = MONTH(GETDATE()))
	AND (DAY([DateCreated]) = DAY(GETDATE())))
	OR
	 (
	((YEAR([DateModified]) = YEAR(GETDATE()))
	AND (MONTH([DateModified]) = MONTH(GETDATE()))
	AND (DAY([DateModified]) = DAY(GETDATE())))
	))
ORDER BY [DateModified] DESC, [DateCreated] DESC