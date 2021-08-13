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
const TestExecuteScalarFunctionNoParameters = (schemaName, functionName, parameters = [], isMultiSet = false) => {
    info(__filename, `TestExecuteScalarFunctionNoParameters`, `Started`);
    dbContext.executeScalarFunction(schemaName, functionName, parameters, isMultiSet, (err, data, message) => {
        if(err){
            error(__filename, `TestExecuteScalarFunctionNoParameters`, err);
        }else{
            info(__filename, `TestExecuteScalarFunctionNoParameters`, message);
            console.log(`===> Data <===`);
            console.log(data);
        }
    });
    info(__filename, `TestExecuteScalarFunctionNoParameters`, `Completed successfully`);
}

const schemaName = `dbo`;
const functionName = `GetUserProfile`;
const parameters = [];
const isMultiSet = false;

TestExecuteScalarFunctionNoParameters(schemaName, functionName, parameters, isMultiSet);