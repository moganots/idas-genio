DECLARE @SchemaName [nvarchar](255) = 'dbo';
DECLARE @ObjectName [nvarchar](255) = 'spFetchOrSelect_LookupValue';

SELECT
	[parameter_id] AS [ParameterOrderId]
	,[name] AS [ParameterName]
	,type_name(user_type_id) AS [DataType]
	,[max_length] AS [DataLength]
	,CASE
		WHEN TYPE_NAME(system_type_id) = 'uniqueidentifier'
			THEN [precision]
		ELSE ODBCPREC([system_type_id], [max_length], [precision])
		END AS [DataPrecision]
	,ODBCSCALE([system_type_id], [scale]) AS [DataScale]
	,CONVERT([sysname], 
		CASE
			WHEN system_type_id in (35, 99, 167, 175, 231, 239)
				THEN SERVERPROPERTY('collation') END) AS [DataCollation]
FROM sys.parameters WHERE [object_id] = OBJECT_ID('[DBO].[SPFETCHORSELECT_LOOKUPVALUE]')