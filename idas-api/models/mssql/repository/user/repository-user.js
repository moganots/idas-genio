/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio API - MS SQL [dbo].[User] database repository model class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const dbContext = require(`../../../../database/mssql/context/context-idas-genio-db-mssql`);
const TYPES = require(`tedious`).TYPES;
const { info, error, httpOnError, httpOnSuccess } = require(`./../../../../common/logging/logger`);

/*
|------------------------------------------------------------------------------------------------------------------
| Functions
|------------------------------------------------------------------------------------------------------------------
 */
const Repository = () => {
    const getAll = (request, response) => {
        try{
            dbContext(request.query.uid).getAll({schema: `dbo`, functionName: `GetAllUsers`}, function (error, data, message) {
                return onRequestCompleted(request, response, error, data, message);
            });
        }catch(error){
            return httpOnError(__filename, request, response, error);
        }finally{}
    }
    const getBy = (request, response, next) => {

    }

    /*
    |------------------------------------------------------------------------------------------------------------------
    | Function Return(s)
    |------------------------------------------------------------------------------------------------------------------
     */
    return {
        getAll: getAll,
        getBy: getBy
    };

}
const onRequestCompleted = (request, response, error, data, message) => {
    if(error){
        return httpOnError(__filename, request, response, error);
    }else{
        return httpOnSuccess(__filename, request, response, {data: data, message: message});
    }
}

/*
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = Repository;
