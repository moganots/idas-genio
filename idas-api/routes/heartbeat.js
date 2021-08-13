/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - heartbeat utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|------------------------------------------------------------------------------------------------------------------
 */
const { onHttpSuccess } = require(`../common/logging/logger`);
const { getHttpRequestPacket } = require("../common/http-helper");

/*
|------------------------------------------------------------------------------------------------------------------
| Function(s)
|------------------------------------------------------------------------------------------------------------------
 */
const Heartbeat = (config = getDefaultConfig()) => {
    const ping = (request, response) => {
        return onHttpSuccess(__filename, request, response, {message: `<br />${getApiName(config)}${addRequestAnchorName(request)} API is up and running`});
    }
    return {
        ping: ping
    }
}
const getApiName = (config = getDefaultConfig()) => {
    return `${config.companyName} - ${config.applicationName}`;
}
const getDefaultConfig = () => {
    return require(`./../config/config`);
}
const addRequestAnchorName = (request) => {
    const packet = getHttpRequestPacket(request);
    return ['', 'api', 'ping'].includes(packet.anchorName) ? '' : ` (${packet.anchorName})`;
}

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = Heartbeat;