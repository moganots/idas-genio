/****** Script for SelectTopNRows command from SSMS  ******/
SELECT
      *
	  ,CONCAT(LOWER(LEFT([Name], 1)) + RIGHT([Name], LEN([Name]) - 1), ':', CASE WHEN ISNUMERIC([Value]) = 1 THEN [Value] ELSE '`' + [Value] + '`' END, ',')
  FROM [IdasGenioDb].[dbo].[ConfigurationSetting]