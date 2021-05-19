DECLARE @UniqueSequence NVARCHAR(MAX) = NEWID();
DECLARE @ThumbPrint NVARCHAR(MAX) = '1D@S - G3N10 - 2 Thessalonians 3:3';

SELECT
	@UniqueSequence [@UniqueSequence],
	@ThumbPrint [@ThumbPrint],
	CONVERT(VARBINARY(MAX), (@UniqueSequence + @ThumbPrint)) [@EncryptionKey]