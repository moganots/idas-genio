/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio API routes utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependencies
|------------------------------------------------------------------------------------------------------------------
 */
const express = require(`express`);
const config = require(`./config/config`);

/*
|------------------------------------------------------------------------------------------------------------------
| Dependencies
|------------------------------------------------------------------------------------------------------------------
 */
function eRoutes() {
    const router = express.Router();
    var root = require(`./routes/root`)(router, config);
    var authentication = require(`./routes/authentication/api`)(router, config);
    var users = require(`./routes/user/api`)(router, config);
    var users = require(`./routes/user/group/api`)(router, config);
    var users = require(`./routes/user/menu-item/api`)(router, config);
    return router;
}

module.exports = eRoutes;