/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - base configuration
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = {
  apiHost: `localhost`,
  appHost: `localhost`,
  apiPort: 4238,
  appPort: 4237,
  applicationName: `Genio`,
  companyName: `IDAS`,
  maximumFileSize: 9994.24,
  apiProtocol: `http`,
  appProtocol: `http`,
  apiLogDirectory: `/data/{0}/{1}/api/logs/{2}`,
  appAttachmentsDirectory: `/data/{0}/{1}/secure/attachments`,
  appLogDirectory: `/data/{0}/{1}/app/logs/{2}`,
  apiLogFile: `{0}.{1}.api.{2}.log`,
  appAttachmentsRouterLink: `#/secure/attachments`,
  appLogFile: `{0}.{1}.app.{2}.log`,
  appEncryptionKey: `0x390044003600300031003300390046002D0038004600450045002D0034003100300044002D0042003800360036002D00410045003200330044003300330044003100320044003300310044004000530020002D002000470033004E003100300020002D002000320020005400680065007300730061006C006F006E00690061006E007300200033003A003300`,
  appEncryptionSaltCount: 10,
};
