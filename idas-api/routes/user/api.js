/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio API user routes class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependencies
|------------------------------------------------------------------------------------------------------------------
 */
const _hearbeat = require(`./../heartbeat`);
const _repository = require(`./../../models/mssql/repository/user/repository-user`);

/*
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = function(router, config) {
  const heartbeat = _hearbeat(config);
  const repository = _repository(config);

    // ping
    router.route('/user/ping')
      .get(heartbeat.ping);

    // getAll
    router.route('/user/getAll')
      .get(repository.getAll);

}