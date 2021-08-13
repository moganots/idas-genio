console.log(`\r\n===> Start Test:\r\n${__filename}`);

const UserProfile = {
    _id: 1,
    EmailAddress: `root@genio.idas.co.za`
}

const { toMidnightInHours } = require("../../common/date-util");
const { createJwtUserSessionToken, validateJwtUserSessionToken, setSessionTokenExpiresIn } = require(`./../../common/authentication/jwt`);

const sessionTokenExpiresIn = setSessionTokenExpiresIn(new Date(), toMidnightInHours());
const sessionToken = createJwtUserSessionToken(`${UserProfile.EmailAddress}`, sessionTokenExpiresIn);

console.log(`\r\nUserProfile:
_id=${UserProfile._id}
EmailAddress=${UserProfile.EmailAddress}
\r\nsessionTokenExpiresIn=\r\n${sessionTokenExpiresIn}
\r\nsessionToken=\r\n${sessionToken}`);

const validateSessionToken = validateJwtUserSessionToken(sessionToken);

console.log(`\r\nsessionTokenValidationMessage=\r\n${(validateSessionToken.error || {message: `Token is still valid`}).message}`);
console.log(`\r\nisSessionTokenValid=\r\n${(validateSessionToken.error === null)}`);