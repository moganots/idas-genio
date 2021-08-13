ALTER TRIGGER [dbo].[trgUser]
ON [dbo].[User]
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
	SET NOCOUNT ON;
	IF (ROWCOUNT_BIG() = 0)
	BEGIN
		RETURN;
	END
	ELSE
	BEGIN
		DECLARE @PreviousValue [nvarchar](MAX) = ISNULL((SELECT * FROM [deleted] FOR JSON PATH), (SELECT * FROM [inserted] FOR JSON PATH));
		WITH [cte1] AS (
			SELECT
				[i].[_id] AS [InsertedID]
				,[i].[CreatedBy] AS [InsertedCreatedBy]
				,[i].[DateCreated] AS [InsertedDateCreated]
				,[d].[_id] AS [DeletedID]
				,[d].[CreatedBy] AS [DeletedCreatedBy]
				,[d].[ModifiedBy] AS [DeletedModifiedBy]
				,[d].[DateModified] AS [DeletedDateModified]
			FROM [deleted] AS [d]
			FULL OUTER HASH JOIN [inserted] AS [i] ON [i].[_id] = [d].[_id]
		), 
		[cte2] AS (
			SELECT
				CASE
					WHEN [InsertedID] IS NOT NULL AND [DeletedID] IS NOT NULL THEN 'Update'
					WHEN [InsertedID] IS NOT NULL AND [DeletedID] IS NULL THEN 'Insert'
					WHEN [InsertedID] IS NULL AND [DeletedID] IS NOT NULL THEN 'Delete'
					ELSE ''
				END AS [Operation]
				,'[dbo].[User]' AS [EntityName]
				,COALESCE([InsertedID], [DeletedID]) AS [id]
				,COALESCE([InsertedCreatedBy], [DeletedCreatedBy]) AS [CreatedBy]
				,[InsertedDateCreated] AS [DateCreated]
				,[DeletedModifiedBy] AS [ModifiedBy]
				,[DeletedDateModified] AS [DateModified]
			FROM [cte1]
		) 
		INSERT INTO [dbo].[EntityChangeHistory]([Operation],[EntityName],[id],[CurrentValue],[PreviousValue],[CreatedBy],[DateCreated],[ModifiedBy],[DateModified])
		SELECT
			[Operation]
			,[EntityName]
			,[id]
			,(SELECT * FROM [dbo].[User] WHERE ([_id] = [id]) FOR JSON PATH) AS [CurrentValue]
			,@PreviousValue AS [PreviousValue]
			,[CreatedBy]
			,[DateCreated]
			,[ModifiedBy]
			,[DateModified]
		FROM [cte2];
	END
END