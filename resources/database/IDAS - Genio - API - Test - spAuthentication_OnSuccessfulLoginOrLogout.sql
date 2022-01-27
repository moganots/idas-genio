USE [IdasGenioDb]
GO

DECLARE @_id [bigint] = 1;
DECLARE @EmailAddress [nvarchar](640) = NULL; --'root@genio.idas.co.za';
DECLARE @DateLastLoggedIn [datetime] = GETDATE();
DECLARE @SessionToken [varchar](255) = NEWID();

UPDATE [dbo].[User]
SET
	[DateLastLoggedIn] = @DateLastLoggedIn,
	[SessionToken] = @SessionToken,
	[DateModified] = GETDATE()
WHERE
	(@_id IS NULL OR [_id] = @_id)
	AND (@EmailAddress IS NULL OR [EmailAddress] = @EmailAddress)
SELECT * FROM [dbo].[User] WHERE (@_id IS NULL OR [_id] = @_id) AND (@EmailAddress IS NULL OR [EmailAddress] = @EmailAddress)