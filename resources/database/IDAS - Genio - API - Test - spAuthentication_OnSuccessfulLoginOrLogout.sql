USE [IdasGenioDb]
GO

DECLARE @uid [nvarchar](320) = 8; --'root@genio.idas.co.za'; -- 8;
DECLARE @DateLastLoggedIn [datetime] = GETDATE();
DECLARE @SessionToken [nvarchar](255) = NULL;
DECLARE @ModifiedBy [nvarchar](320) = 3; -- 'admin@genio.idas.co.za'; --8;

IF(ISNUMERIC(@uid) <> 1)
BEGIN
	SET @uid = (SELECT [_id] FROM [dbo].[User] WHERE ([EmailAddress] = CAST(@uid AS [nvarchar](MAX))));
END

IF(ISNUMERIC(@ModifiedBy) <> 1)
BEGIN
	SET @ModifiedBy = ISNULL((SELECT [_id] FROM [dbo].[User] WHERE ([EmailAddress] = CAST(@ModifiedBy AS [nvarchar](MAX)))), @uid);
END

UPDATE [dbo].[User]
SET
	[DateLastLoggedIn] = ISNULL(@DateLastLoggedIn, [DateLastLoggedIn]),
	[SessionToken] = @SessionToken,
	[DateModified] = GETDATE(),
	[ModifiedBy] = @ModifiedBy
WHERE
	([_id] = @uid)

SELECT * FROM [dbo].[User] WHERE ([_id] = @uid)

--EXECUTE [dbo].[spAuthentication_OnSuccessfulLoginOrLogout]
--	@uid,
--	@DateLastLoggedIn,
--	@SessionToken,
--	@ModifiedBy