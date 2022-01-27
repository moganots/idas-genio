/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio - API - Authentication controller class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const _UserProfile = require(`./../../../database/models/UserProfile`);
const _UserRepository = require(`./../../../database/repository/mssql/UserRepository`);
const { isEmptyString, getElementAt } = require(`./../../../common/functions`);
const {
  decrypt,
  validateHash,
} = require(`./../../../common/encryption/dencryption`);
const {
  onHttpRequestStarted,
  onHttpError,
  onHttpSuccess,
} = require(`./../../../common/logging/logger`);
const {
  createJwtUserSessionToken,
} = require("../../../common/authentication/jwt");
const { yyyymmddhmsmsWithDashSeparator } = require("../../../common/date-util");

/*
|------------------------------------------------------------------------------------------------------------------
| Function(s)
|------------------------------------------------------------------------------------------------------------------
 */
const Controller = () => {
  const UserProfile = _UserProfile();
  const UserRepository = _UserRepository();
  const login = (request, response) => {
    try {
      onHttpRequestStarted(__filename, request);
      const uid = request.body.uid;
      const password = request.body.password;
      if (isEmptyString(uid) && isEmptyString(password)) {
        return onHttpError(__filename, request, response, {
          error: `UserID (Email Address) and Password not provided`,
          message: `Authentication failed`,
        });
      } else if (isEmptyString(uid)) {
        return onHttpError(__filename, request, response, {
          error: `UserID (Email Address) not provided`,
          message: `Authentication failed`,
        });
      } else if (isEmptyString(password)) {
        return onHttpError(__filename, request, response, {
          error: `Password not provided`,
          message: `Authentication failed`,
        });
      }
      UserRepository.callGetUserProfile(
        uid,
        uid,
        null,
        null,
        null,
        null,
        (error, data) => {
          if (error) {
            return onHttpError(__filename, request, response, {
              error: error,
              message: `Authentication failed for User: ${uid}`,
            });
          }
          const dataItem0 = getElementAt(data, null);
          const dataItem0AsJson = JSON.parse(dataItem0.data);
          const userProfile = dataItem0AsJson.UserProfile[0];
          if (hasSessionToken(userProfile.SessionToken)) {
            return onHttpError(__filename, request, response, {
              message: `User: ${uid} is already logged in and still has a valid authentication session token`,
              data: userProfile,
            });
          } else {
            const passwordHash = userProfile.PasswordHash;
            const validPassword = validateHash(password, decrypt(passwordHash));
            if (validPassword) {
              const sessionToken = createJwtUserSessionToken(uid);
              if (hasSessionToken(sessionToken)) {
                UserRepository.onSuccessfulLogin(
                  uid,
                  {
                    _id: userProfile._id,
                    DateLastLoggedIn: yyyymmddhmsmsWithDashSeparator(),
                    SessionToken: sessionToken,
                  },
                  (error) => {
                    if (error) {
                      return onHttpError(__filename, request, response, {
                        error: error,
                        message: `Authentication failed for User: ${uid}`,
                      });
                    }
                    return onHttpSuccess(__filename, request, response, {
                      message: `User: ${userProfile.EmailAddress} authenticated successfully`,
                      data: userProfile,
                    });
                  }
                );
              } else {
                return onHttpError(__filename, request, response, {
                  message: `Failed to generate SessionToken for User: ${uid}`,
                });
              }
            } else {
              return onHttpError(__filename, request, response, {
                message: `Invalid password provided for User: ${uid}`,
              });
            }
          }
        }
      );
    } catch (error) {
      return onHttpError(__filename, request, response, {
        error: error,
        message: `Unable to complete user authentication request`,
      });
    } finally {
    }
  };
  const logout = (request, response) => {
    try {
      onHttpRequestStarted(__filename, request);
      if (request.body) {
        const userProfile = UserProfile.fromComponents(request.body.User);
        if (userProfile && userProfile.User) {
          userProfile.SessionToken = null;
          UserRepository.onSuccessfulLogout(
            userProfile._id,
            userProfile,
            (error) => {
              if (error) {
                return onHttpError(__filename, request, response, {
                  error: error,
                  message: `Unable to logout User: ${userProfile.EmailAddress}. Reason: ${error.message}`,
                });
              } else {
                return onHttpSuccess(__filename, request, response, {
                  message: `User: ${userProfile.EmailAddress} logged out successfully`,
                  data: userProfile,
                });
              }
            }
          );
        } else {
          return onHttpError(__filename, request, response, {
            message: `Unable to complete user logout request. Reason: UserProfile was not specified`,
          });
        }
      } else {
        return onHttpError(__filename, request, response, {
          message: `Unable to complete user logout request. Reason: Request body was not specified`,
        });
      }
    } catch (error) {
      return onHttpError(__filename, request, response, {
        error: error,
        message: `Unable to complete user logout request. Reason: ${error.message}`,
      });
    } finally {
    }
  };
  const validateToken = (request, response) => {
    try {
      onHttpRequestStarted(__filename, request);
    } catch (error) {
      return onHttpError(__filename, request, response, {
        error: error,
        message: `Unable to complete token validation request`,
      });
    } finally {
    }
  };
  const cancelToken = (request, response) => {
    try {
      onHttpRequestStarted(__filename, request);
    } catch (error) {
      return onHttpError(__filename, request, response, {
        error: error,
        message: `Unable to complete token cancellation request`,
      });
    } finally {
    }
  };

  /*
    |------------------------------------------------------------------------------------------------------------------
    | Function Return(s)
    |------------------------------------------------------------------------------------------------------------------
     */
  return {
    login: login,
    logout: logout,
    validateToken: validateToken,
    cancelToken: cancelToken,
  };
};
const hasSessionToken = (sessionToken) => {
  return !(
    sessionToken === null ||
    sessionToken === undefined ||
    String(sessionToken).trim().length === 0
  );
};

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = Controller;
