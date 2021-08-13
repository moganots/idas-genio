/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio - API - Default MS SQL database context utilities class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const Connection = require(`tedious`).Connection;
const Request = require(`tedious`).Request;
const TYPES = require("tedious").TYPES;
const { info } = require("../../../common/logging/logger");
const {
  hasValues,
  toLocaleLowerCaseTrim,
} = require("../../../common/functions");
const {
  getInfoOnConnectionMessage,
  getInfoOnFetchSuccessfulMessage,
  getInfoOnFetchNoDataMessage,
} = require(`../../common/dbCommonMessages`);

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const DatabaseContext = (connectionConfig) => {
  const connectionString = getConnectionString(connectionConfig);
  const executeSelect = (command, parameters, isMultiSet, callback) => {
    try {
      const connection = onInitConnection(connectionConfig, connectionString);
      connection.connect((error) => {
        if (error) {
          callback(error);
        } else {
          let data = [];
          let dataset = [];
          let request = new Request(command, (error, rowCount) => {
            sendDbResponse(command, error, rowCount, data, callback);
            onCloseConnection(connection, request, connectionString);
          });
          addRequestParameters(request, parameters);
          initRequestBuildRow(request, data);
          ({ dataset, data } = initRequestDoneInProcDataset(
            request,
            dataset,
            data,
            isMultiSet
          ));
          info(
            __filename,
            `executeSelect`,
            [`Preparing to execute command`, command].join(`\r\n`)
          );
          connection.execSql(request);
        }
      });
    } catch (error) {
      callback(error);
    }
  };
  const executeScalarFunction = (
    schemaName,
    functionName,
    parameters,
    isMultiSet,
    callback
  ) => {
    try {
      const connection = onInitConnection(connectionConfig, connectionString);
      connection.connect((error) => {
        if (error) {
          callback(error);
        } else {
          const parameterNames = getParameterNamesWithAt(parameters).join(",");
          const command = `SELECT [${
            schemaName || "dbo"
          }].[${functionName}](${parameterNames}) AS [data]`;
          let data = [];
          let dataset = [];
          let request = new Request(command, (error, rowCount) => {
            sendDbResponse(command, error, rowCount, data, callback);
            onCloseConnection(connection, request, connectionString);
          });
          addRequestParameters(request, parameters);
          initRequestBuildRow(request, data);
          ({ dataset, data } = initRequestDoneInProcDataset(
            request,
            dataset,
            data,
            isMultiSet
          ));
          info(
            __filename,
            `executeScalarFunction`,
            [`Preparing to execute command`, command].join(`\r\n`)
          );
          connection.execSql(request);
        }
      });
    } catch (error) {
      callback(error);
    } finally {
    }
  };
  const executeTableFunction = (
    schemaName,
    functionName,
    parameters,
    isMultiSet,
    callback
  ) => {
    try {
      const connection = onInitConnection(connectionConfig, connectionString);
      connection.connect((error) => {
        if (error) {
          callback(error);
        } else {
          const parameterNames = getParameterNamesWithAt(parameters).join(",");
          const command = `SELECT * FROM [${
            schemaName || "dbo"
          }].[${functionName}](${parameterNames})`;
          let data = [];
          let dataset = [];
          let request = new Request(command, (error, rowCount) => {
            sendDbResponse(command, error, rowCount, data, callback);
            onCloseConnection(connection, request, connectionString);
          });
          addRequestParameters(request, parameters);
          initRequestBuildRow(request, data);
          ({ dataset, data } = initRequestDoneInProcDataset(
            request,
            dataset,
            data,
            isMultiSet
          ));
          info(
            __filename,
            `executeTableFunction`,
            [`Preparing to execute command`, command].join(`\r\n`)
          );
          connection.execSql(request);
        }
      });
    } catch (error) {
      callback(error);
    } finally {
    }
  };
  const executeStoredProcedure = (
    schemaName,
    storedProcedureName,
    parameters,
    isMultiSet,
    callback
  ) => {
    try {
      const connection = onInitConnection(connectionConfig, connectionString);
      connection.connect((error) => {
        if (error) {
          callback(error);
        } else {
          const command = `[${schemaName || `dbo`}].[${storedProcedureName}]`;
          let data = [];
          let dataset = [];
          getDatabaseObjectParameters(
            schemaName,
            storedProcedureName,
            false,
            (error, objParameters) => {
              let request = new Request(command, (error, rowCount) => {
                sendDbResponse(command, error, rowCount, data, callback);
                onCloseConnection(connection, request, connectionString);
              });
              if (!error && objParameters && hasValues(objParameters)) {
                objParameters.forEach((objParameter) => {
                  const parameterValue =
                    parameters[objParameter.ParameterName] || null;
                  console.log(parameterValue);
                  request.addParameter(
                    objParameter.ParameterName,
                    getTediousMsSqlDataType(objParameter.DataType),
                    parameterValue
                  );
                });
              }
              initRequestBuildRow(request, data);
              ({ dataset, data } = initRequestDoneInProcDataset(
                request,
                dataset,
                data,
                isMultiSet
              ));
              info(
                __filename,
                `executeStoredProcedure`,
                [`Preparing to execute command`, command].join(`\r\n`)
              );
              connection.callProcedure(request);
            }
          );
        }
      });
    } catch (error) {
      callback(error);
    } finally {
    }
  };
  const getDatabaseObjectParameters = (
    schemaName,
    objectName,
    isMultiSet,
    callback
  ) => {
    try {
      const parameters = [
        { SchemaName: schemaName },
        { ObjectName: objectName },
      ];
      executeTableFunction(
        schemaName,
        `GetDatabaseObjectParameters`,
        parameters,
        isMultiSet,
        callback
      );
    } catch (error) {
      callback(error);
    } finally {
    }
  };

  return {
    executeSelect: executeSelect,
    executeScalarFunction: executeScalarFunction,
    executeTableFunction: executeTableFunction,
    executeStoredProcedure: executeStoredProcedure,
    getDatabaseObjectParameters: getDatabaseObjectParameters,
  };
};
const getConnectionString = (connectionConfig = {}) => {
  return `
    server: ${connectionConfig.server || `Not specified`},
    instanceName: ${connectionConfig.options.instanceName || `Not used`},
    authentication.type: ${
      connectionConfig.authentication.type || `Not specified`
    },
    authentication.domainName: ${
      connectionConfig.authentication.options.domain || `Not used`
    },
    authentication.userId: ${
      connectionConfig.authentication.options.userName || `Not specified`
    },
    authentication.password: ${
      connectionConfig.authentication.options.password || `Not specified`
    },
    databaseName: ${connectionConfig.options.database || `Not specified`}`;
};
const onInitConnection = (connectionConfig, connectionString) => {
  info(
    __filename,
    `onInitConnection`,
    getInfoOnConnectionMessage(connectionString, `MS SQL`)
  );
  return new Connection(connectionConfig);
};
const sendDbResponse = (command, error, rowCount, data, callback) => {
  try {
    if (callback) {
      const numberOfRecords = hasValues(data) ? data.length : rowCount;
      let message = error
        ? error.message
        : numberOfRecords > 0
        ? getInfoOnFetchSuccessfulMessage(command, "row", numberOfRecords)
        : getInfoOnFetchNoDataMessage(command, "row");
      callback(error, data, message);
    } else {
      throw `DBContext: failed to execute callback`;
    }
  } catch (error) {
    callback(error);
  } finally {
  }
};
const onCloseConnection = (connection, request, connectionString) => {
  if (connection && request) {
    try {
      connection.closeConnection(request.__connection);
      info(
        __filename,
        `onCloseConnection`,
        `Database connection closing\r\n${addConnectionString(
          connectionString
        )}`
      );
    } catch (err) {
      error(__filename, `onCloseConnection`, `An error has occured`, err);
    } finally {
    }
  }
};
const addConnectionString = (connectionString) => {
  return connectionString
    ? `ConnectionString:\r\n${connectionString
        .split(`,`)
        .map((cs) => (cs || ``).trim())
        .join(`\r\n`)}`
    : `Not specified`;
};
const addRequestParameters = (request, parameters = []) => {
  if (request && hasValues(parameters)) {
    console.log(parameters);
    parameters.forEach((parameter) => {
      const parameterName = Object.getOwnPropertyNames(parameter)[0];
      const parameterValue = parameter[parameterName] || null;
      const parameterType =
        parameterValue instanceof Date ? "date" : typeof parameterValue;
      const parameterMsSqlType = getJSMsSqlDataType(parameterType);
      request.addParameter(parameterName, parameterMsSqlType, parameterValue);
    });
  }
};
const getJSMsSqlDataType = (typeName) => {
  switch (toLocaleLowerCaseTrim(typeName || "")) {
    case "boolean":
      return TYPES.Bit;
    case "date":
      return TYPES.DateTime;
    case "number":
      return TYPES.BigInt;
    default:
      return TYPES.NVarChar;
  }
};
const getTediousMsSqlDataType = (typeName) => {
  switch (toLocaleLowerCaseTrim(typeName || "")) {
    case "bit":
      return TYPES.Bit;
    case "tinyint":
      return TYPES.TinyInt;
    case "smallint":
      return TYPES.SmallInt;
    case "int":
      return TYPES.Int;
    case "bigint":
      return TYPES.BigInt;
    case "numeric":
      return TYPES.Numeric;
    case "decimal":
      return TYPES.Decimal;
    case "smallmoney":
      return TYPES.SmallMoney;
    case "money":
      return TYPES.Money;
    case "float":
      return TYPES.Float;
    case "real":
      return TYPES.Real;
    case "smalldatetime":
      return TYPES.SmallDateTime;
    case "datetime":
      return TYPES.DateTime;
    case "datetime2":
      return TYPES.DateTime2;
    case "datetimeoffset":
      return TYPES.DateTimeOffset;
    case "time":
      return TYPES.Time;
    case "date":
      return TYPES.Date;
    case "char":
      return TYPES.Char;
    case "varchar":
      return TYPES.VarChar;
    case "text":
      return TYPES.Text;
    case "nchar":
      return TYPES.NChar;
    case "nvarchar":
      return TYPES.NVarChar;
    case "ntext":
      return TYPES.NText;
    case "binary":
      return TYPES.Binary;
    case "varbinary":
      return TYPES.VarBinary;
    case "image":
      return TYPES.Image;
    case "null":
      return TYPES.Null;
    case "tvp":
      return TYPES.TVP;
    case "udt":
      return TYPES.UDT;
    case "uniqueidentifier":
      return TYPES.UniqueIdentifier;
    case "variant":
      return TYPES.Variant;
    case "xml":
      return TYPES.xml;
  }
};
const getParameterNamesWithoutAt = (parameters = []) => {
  return parameters.map((parameter) => Object.getOwnPropertyNames(parameter));
};
const getParameterNamesWithAt = (parameters = []) => {
  return getParameterNamesWithoutAt(parameters).map(
    (parameter) => `@${parameter}`
  );
};
const initRequestBuildRow = (request, data = []) => {
  if (request) {
    request.on(`row`, (columns) => {
      let row = {};
      columns.forEach((column) => {
        row[column.metadata.colName] = column.value;
      });
      data.push(row);
    });
  }
};
const initRequestDoneInProcDataset = (request, dataset, data, isMultiSet) => {
  request.on(`doneInProc`, function () {
    if (isMultiSet === true) {
      dataset.push(data);
      data = [];
    } else {
      dataset = data;
    }
  });
  return { dataset, data };
};

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| module.exports
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
module.exports = DatabaseContext;
