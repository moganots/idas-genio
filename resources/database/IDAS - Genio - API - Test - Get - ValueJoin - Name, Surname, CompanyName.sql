DECLARE @Name [nvarchar](255) = 'Name';
DECLARE @Surname [nvarchar](255) = '';
DECLARE @CompanyName [nvarchar](255) = 'CompanyName';

DECLARE @RetValue [nvarchar](MAX) =
	CASE
		WHEN LEN(LTRIM(RTRIM(@Name))) <> 0 AND LEN(LTRIM(RTRIM(@Surname))) <> 0 AND LEN(LTRIM(RTRIM(@CompanyName))) <> 0 THEN CONCAT(@Name, ' ', @Surname, ' - ', @CompanyName)
		WHEN LEN(LTRIM(RTRIM(@Name))) <> 0 AND LEN(LTRIM(RTRIM(@CompanyName))) <> 0 THEN CONCAT(@Name, ' - ', @CompanyName)
		WHEN LEN(LTRIM(RTRIM(@Surname))) <> 0 AND LEN(LTRIM(RTRIM(@CompanyName))) <> 0 THEN CONCAT(@Surname, ' - ', @CompanyName)
		WHEN LEN(LTRIM(RTRIM(@Name))) <> 0 AND LEN(LTRIM(RTRIM(@Surname))) <> 0 THEN CONCAT(@Name, ' ', @Surname)
		WHEN LEN(LTRIM(RTRIM(@Name))) <> 0 THEN @Name
		WHEN LEN(LTRIM(RTRIM(@Surname))) <> 0 THEN @Surname
		WHEN LEN(LTRIM(RTRIM(@CompanyName))) <> 0 THEN @CompanyName
		ELSE NULL
	END;

SELECT @RetValue