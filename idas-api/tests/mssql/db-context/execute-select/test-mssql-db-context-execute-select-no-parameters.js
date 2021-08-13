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
const TestExecuteSelectNoParameters = (command, parameters = [], isMultiSet = false) => {
    info(__filename, `TestExecuteSelectNoParameters`, `Started`);
    dbContext.executeSelect(command, parameters, isMultiSet, (err, data, message) => {
        if(err){
            error(__filename, `TestExecuteSelectNoParameters`, err);
        }else{
            info(__filename, `TestExecuteSelectNoParameters`, message);
            console.log(`===> Data <===`);
            console.log(data);
        }
    });
    info(__filename, `TestExecuteSelectNoParameters`, `Completed successfully`);
}

const command = `SELECT TOP 1 * FROM [dbo].[Employee]`;
const parameters = [];
const isMultiSet = false;

TestExecuteSelectNoParameters(command, parameters, isMultiSet);