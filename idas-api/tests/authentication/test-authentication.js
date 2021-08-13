console.log(`\r\n===> Start Test:\r\n${__filename}`);
const UserProfile = require(`./../../database/models/UserProfile`);
const { encrypt, decrypt, hashValue, validateHash } = require("../../common/encryption/dencryption");
const bcrypt = require(`bcrypt`);
const { getElementAt } = require("../../common/functions");
const _dbContext = require(`./../../database/db-context/mssql/mssql-idas-genio-db-context`);
const dbContext = _dbContext();
const TestAuthLoginWithUidAndPassword = (uid, password) => {
    // console.log(`===> TestAuthLoginWithUidAndPassword(), started`);
    // console.log(`uid=${uid}`);
    // console.log(`password=${password}`);
    dbContext.getUserProfile(null, null, null, null, uid, (error, data, message) => {
        console.log(`===> Error <===`);
        console.log(error);
        const userProfile = UserProfile().fromEntity(getElementAt(data, null));
        const passwordHash = userProfile.PasswordHash;
        console.log(`passwordHash=\r\n${passwordHash}\r\npasswordHashLength=\r\n${passwordHash.length}`);
        const validPassword = validateHash(password, decrypt(passwordHash));
        console.log(`validPassword=\r\n${validPassword}`);
        if(!error && validPassword){
            console.log(`===> User Profile <===`);
            console.log(userProfile);
        }
    });
}

const uid = `root@genio.idas.co.za`;
const password = `root@123`;
/* const encryptedPassword = encrypt(hashValue(password));
const decryptedPassword = decrypt(encryptedPassword);


console.log(`encryptedPassword=${encryptedPassword}`);
console.log(`decryptedPassword=${decryptedPassword}`);
console.log(`isValidPassword=${bcrypt.compareSync(password, decryptedPassword)}`) */

TestAuthLoginWithUidAndPassword(uid, password);