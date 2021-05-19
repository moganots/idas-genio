/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - authentication routes class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependencies
|------------------------------------------------------------------------------------------------------------------
 */
const _hearbeat = require(`./../heartbeat`);
const _controller = require(`../../controllers/authentication/mssql/controller`);

/*
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = function(router, config) {
  const heartbeat = _hearbeat(config);
  const controller = _controller(config);

    // ping
    router.route('/authentication/ping')
      .get(heartbeat.ping);

    // register
    router.route('/authentication/register')
      .put(controller.register);

    // login
    router.route('/authentication/login')
      .put(controller.login);

    // loginSso
    router.route('/authentication/loginSso')
      .put(controller.loginSso);

    // logout
    router.route('/authentication/logout')
      .put(controller.logout);

    // validateToken
    router.route('/authentication/validateToken')
      .get(controller.validateToken);

    // cancelToken
    router.route('/authentication/cancelToken')
      .put(controller.cancelToken);

}