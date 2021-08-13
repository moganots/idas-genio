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
const {error, info } = require(`./../../../common/logging/logger`);
const _dbContext = require(`./../../../database/db-context/mssql/mssql-db-context`);
const dbContext = _dbContext(connectionConfig);
const TestExecuteSelectWithParameters = (command, parameters = [], isMultiSet = false) => {
    info(__filename, `TestExecuteSelectWithParameters`, `Started`);
    dbContext.executeSelect(command, parameters, isMultiSet, (err, data, message) => {
        if(err){
            error(__filename, `TestExecuteSelectWithParameters`, err);
        }else{
            info(__filename, `TestExecuteSelectWithParameters`, message);
            console.log(`===> Data <===`);
            console.log(data);
        }
    });
    info(__filename, `TestExecuteSelectWithParameters`, `Completed successfully`);
}

const command = `SELECT * FROM [dbo].[Employee] WHERE [_id] = @_id`;
const parameters = [{_id: 3}];
const isMultiSet = false;

TestExecuteSelectWithParameters(command, parameters, isMultiSet);