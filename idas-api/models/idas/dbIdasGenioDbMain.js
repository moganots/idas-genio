/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio API utilities class using the IdasGenioDb connection string
|------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const connectionString = require(`./../../config/database/mssql/config`).IdasGenioDb;
const dbContext = () => require(`./../../common/database/mssql/dbContext`);
const { info } = require(`./../../common/logging/logger`);
const { error } = require(`./../../common/logging/logger`);
const { logToPromise } = require(`./../../common/logging/logger`);

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const getQuery = (modelName, command, params, isMultiSet = false) => {
  return dbContext().getQuery(modelName, command, params, connectionString, isMultiSet, (err, data) => {

  });
}
const spGetQuery = (modelName, command, connectionString, isMultiSet = false) => {
  
}
const spExecute = (modelName, command, params, connectionString) => {
  
}



const create = (uid, model, entity, datesAsTimestamp = false) => {
  try{
    return dbu().create(uid, model, entity, dbUri(), datesAsTimestamp);
  }catch(error){ return onErrorPromise(`create`, error); }
  finally{}
}
const getAll = (uid, model) => {
  try{
    return dbu().findAll(uid, model, dbUri());
  }catch(error){ return onErrorPromise(`getAll`, error); }
  finally{}
}
const getBy = (uid, model, predicate) => {
  try{
    return dbu().findBy(uid, model, predicate, dbUri());
  }catch(error){ return onErrorPromise(`getBy`, error); }
  finally{}
}
const update = (uid, model, predicate, entity, datesAsTimestamp = false) => {
  try{
    return dbu().update(uid, model, predicate, entity, dbUri(), datesAsTimestamp);
  }catch(error){ return onErrorPromise(`update`, error); }
  finally{}
}
const deleteOne = (uid, model, predicate, datesAsTimestamp = false) => {
  try{
    return dbu().deleteOne(uid, model, predicate, dbUri(), datesAsTimestamp);
  }catch(error){ return onErrorPromise(`deleteOne`, error); }
  finally{}
}
const deleteMany = (uid, model, predicate, datesAsTimestamp = false) => {
  try{
    return dbu().deleteMany(uid, model, predicate, dbUri(), datesAsTimestamp);
  }catch(error){ return onErrorPromise(`deleteMany`, error); }
  finally{}
}
const executeFunction = (schema, functionName, parameters = {}) => {
  try{
    return dbu().executeFunction(schema, functionName, parameters);
  }catch(error){ return onErrorPromise(`executeFunction`, error); }
  finally{}
}
const executeProcedure = (schema, procedureName, parameters = {}) => {
  try{
    return dbu().executeProcedure(schema, procedureName, parameters);
  }catch(error){ return onErrorPromise(`executeFunction`, error); }
  finally{}
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Internal Functions
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const onErrorPromise = (methodName, error, data = null) => {
  return logToPromise(__filename, `ERROR`, methodName, error, data);
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module exports
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
module.exports = {
  create: create,
  getAll: getAll,
  getBy: getBy,
  update: update,
  deleteOne: deleteOne,
  deleteAll: deleteMany,
  executeFunction: executeFunction,
  executeProcedure: executeProcedure
}