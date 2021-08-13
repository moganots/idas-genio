console.log(`\r\n===> Start Test:\r\n${__filename}`);
const _dbContext = require(`../../../../../database/db-context/mssql/mssql-idas-genio-db-context`);
const dbContext = _dbContext();
const TestDbFetchOrSelectGetAll = (uid, entityName) => {
    dbContext.getAll(uid, entityName, (error, data, message) => {
        console.log(error);
        console.log(data);
        console.log(message);
    });
}

let uid = {
    _id: 1,
    EmailAddress: `root@genio.idas.co.za`
}
let entityName = `User`;

TestDbFetchOrSelectGetAll(uid._id, entityName);