/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - authentication routes class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|------------------------------------------------------------------------------------------------------------------
 */
const _hearbeat = require(`../heartbeat`);
const _controller = require(`../../controllers/authentication/mssql/controller`);

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = function(router, config) {
  const apiAnchorName = `authentication`;
  const heartbeat = _hearbeat(config);
  const controller = _controller(config);

    // ping
    router.route(`/${apiAnchorName}/ping`)
      .get(heartbeat.ping);

    // login
    router.route(`/${apiAnchorName}/login`)
      .put(controller.login);

    // logout
    router.route(`/${apiAnchorName}/logout`)
      .put(controller.logout);

    // validateToken
    router.route(`/${apiAnchorName}/validateToken`)
      .get(controller.validateToken);

    // cancelToken
    router.route(`/${apiAnchorName}/cancelToken`)
      .put(controller.cancelToken);

}