console.log(`\r\n===> Start Test:\r\n${__filename}`);
const _repository = require(`./../../../database/repository/mssql/UserRepository`);
const repository = _repository();
const result = repository.getAll();

console.log(result)