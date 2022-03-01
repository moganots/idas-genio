/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - FileSystem routes class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|------------------------------------------------------------------------------------------------------------------
 */
const _hearbeat = require(`../heartbeat`);
const _controller = require(`../../controllers/images/controller`);

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = function (router, config) {
  const apiAnchorName = `images`;
  const heartbeat = _hearbeat(config);
  const controller = _controller(config);

  // ping
  router.route(`/${apiAnchorName}/ping`).get(heartbeat.ping);

  // getImagesAvatars
  router
    .route(`/${apiAnchorName}/getImagesAvatars`)
    .get(controller.getImagesAvatars);

  // getImagesBanks
  router
    .route(`/${apiAnchorName}/getImagesBanks`)
    .get(controller.getImagesBanks);

    // getImagesBanksIcon
    router
      .route(`/${apiAnchorName}/getImagesBanksIcon`)
      .get(controller.getImagesBanksIcon);

      // getImagesBanksMain
      router
        .route(`/${apiAnchorName}/getImagesBanksMain`)
        .get(controller.getImagesBanksMain);

  // getImagesFileTypes
  router
    .route(`/${apiAnchorName}/getImagesFileTypes`)
    .get(controller.getImagesFileTypes);

  // getImagesIcons
  router
    .route(`/${apiAnchorName}/getImagesIcons`)
    .get(controller.getImagesIcons);

  // getImagesIdas
  router.route(`/${apiAnchorName}/getImagesIdas`).get(controller.getImagesIdas);
};
