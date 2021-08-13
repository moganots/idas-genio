DECLARE @Value VARCHAR(MAX) = 'CamelCaseCamelCaseCamelCaseCamelCaseCamelCaseCamelCaseCamelCase';

DECLARE @KeepValues AS VARCHAR(50);
SET @KeepValues = '%[^ ][A-Z]%';

WHILE (PATINDEX(@KeepValues COLLATE LATIN1_GENERAL_BIN, @Value) > 0)
BEGIN
    SET @Value = STUFF(@Value, PATINDEX(@KeepValues COLLATE LATIN1_GENERAL_BIN, @Value) + 1, 0, ' ');
END

SELECT @Value