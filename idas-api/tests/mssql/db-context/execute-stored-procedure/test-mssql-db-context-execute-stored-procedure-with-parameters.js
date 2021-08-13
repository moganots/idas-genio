console.log(`\r\n===> Start Test:\r\n${__filename}`);
const connectionConfig = {
    server: `localhost`,
    authentication: {
        type: `default`,
        options: {
            domain: `.`,
            userName: `IdasGenioAdminUser`,
            password: `admin@123`
        }
    },
    options: {
        database: `IdasGenioDb`,
        encrypt: false,
        instanceName: `MSSQLSERVER`,
        rowCollectionOnDone: true,
        useColumnNames: false,
    }
}
const {error, info } = require(`../../../../common/logging/logger`);
const _dbContext = require(`../../../../database/db-context/mssql/mssql-db-context`);
const dbContext = _dbContext(connectionConfig);
const TestExecuteStoredProcedureWithParameters = (schemaName, storedProcedureName, parameters = [], isMultiSet = false) => {
    info(__filename, `TestExecuteStoredProcedureWithParameters`, `Started`);
    dbContext.executeStoredProcedure(schemaName, storedProcedureName, parameters, isMultiSet, (err, data, message) => {
        if(err){
            error(__filename, `TestExecuteStoredProcedureWithParameters`, err);
        }else{
            info(__filename, `TestExecuteStoredProcedureWithParameters`, message);
            console.log(`===> Data <===`);
            console.log(data);
        }
    });
    info(__filename, `TestExecuteStoredProcedureWithParameters`, `Completed successfully`);
}

const schemaName = `dbo`;
const tableName = `LookupCategory`;
const storedProcedureName = `spFetchOrSelect_${tableName}`;
const parameters = [{_id: 10}];
const isMultiSet = false;

TestExecuteStoredProcedureWithParameters(schemaName, storedProcedureName, parameters, isMultiSet);