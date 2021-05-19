/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio - API - MS SQL [dbo].[User] database repository model class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const dbContext = require(`../../../../database/mssql/context/context-idas-genio-db-mssql`);
const TYPES = require(`tedious`).TYPES;
const { info, error, onHttpRequestCompleted } = require(`./../../../../common/logging/logger`);

/*
|------------------------------------------------------------------------------------------------------------------
| Functions
|------------------------------------------------------------------------------------------------------------------
 */
const Repository = () => {
    const create = (request, response, next) => {
        try{
            return onHttpRequestCompleted(__filename, request, response, null, 'Request executed successfully', null);
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }finally{}
    }
    const getAll = (request, response) => {
        try{
            dbContext(request.query.uid).getAll({schema: `dbo`, functionName: `GetAllUsers`}, function (error, data, message) {
                return onHttpRequestCompleted(__filename, request, response, error, message, data);
            });
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }finally{}
    }
    const getById = (request, response, next) => {
        try{
            return onHttpRequestCompleted(__filename, request, response, null, 'Request executed successfully', null);
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }finally{}
    }
    const update = (request, response, next) => {
        try{
            return onHttpRequestCompleted(__filename, request, response, null, 'Request executed successfully', null);
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }finally{}
    }
    const _delete = (request, response, next) => {
        try{
            return onHttpRequestCompleted(__filename, request, response, null, 'Request executed successfully', null);
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }finally{}
    }

    /*
    |------------------------------------------------------------------------------------------------------------------
    | Function Return(s)
    |------------------------------------------------------------------------------------------------------------------
     */
    return {
        create: create,
        getAll: getAll,
        getById: getById,
        update: update,
        delete: _delete
    };

}

/*
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = Repository;
