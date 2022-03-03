// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApi: `http://localhost:4238/api/`,
  companyName: `IDAS`,
  applicationName: `Genio`,
  encryptionKey: `0x390044003600300031003300390046002D0038004600450045002D0034003100300044002D0042003800360036002D00410045003200330044003300330044003100320044003300310044004000530020002D002000470033004E003100300020002D002000320020005400680065007300730061006C006F006E00690061006E007300200033003A003300`,
  encryptionSaltCount: 10,
  attachmentsDirectory: `/data/{0}/{1}/secure/attachments`
  // ,testAs: `admin`
  // ,testAs: `root`
  // ,testAs: `general`
  ,testAs: `employee-manager`
  // ,testAs: `employee-active`
  // ,testAs: `employee-inactive`
  // ,testAs: `client`
  // ,testAs: `supplier`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
