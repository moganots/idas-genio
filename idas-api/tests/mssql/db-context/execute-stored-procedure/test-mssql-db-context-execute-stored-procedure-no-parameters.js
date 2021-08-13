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
const TestExecuteStoredProcedureNoParameters = (schemaName, storedProcedureName, parameters = [], isMultiSet = false) => {
    info(__filename, `TestExecuteStoredProcedureNoParameters`, `Started`);
    dbContext.executeStoredProcedure(schemaName, storedProcedureName, parameters, isMultiSet, (err, data, message) => {
        if(err){
            error(__filename, `TestExecuteStoredProcedureNoParameters`, err);
        }else{
            info(__filename, `TestExecuteStoredProcedureNoParameters`, message);
            console.log(`===> Data <===`);
            console.log(data);
        }
    });
    info(__filename, `TestExecuteStoredProcedureNoParameters`, `Completed successfully`);
}

const schemaName = `dbo`;
const storedProcedureName = `spFetchOrSelect_LookupValue`;
const parameters = [];
const isMultiSet = false;

TestExecuteStoredProcedureNoParameters(schemaName, storedProcedureName, parameters, isMultiSet);