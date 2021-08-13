/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - authentication encryption utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const { encryptionKey, encryptionSaltCount } = require(`../../config/encryption/config`);
const bcrypt = require(`bcrypt`);
const crypto = require(`crypto`);
const { isObjectSet } = require("../functions");

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const getCipherKey = () => {
    return crypto.createHash('sha256').update(String(encryptionKey)).digest('base64').substr(0, 32);
}
const encrypt = (value) => {
    if(isObjectSet(value)) {
        const iv = crypto.randomBytes(16); // AES encryption
        const cipher = crypto.createCipheriv(`aes-256-cbc`, Buffer.from(getCipherKey()), iv);
        let encrypted = cipher.update(value);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return `${iv.toString('hex')}/${encrypted.toString('hex')}`;
    }
    return value;
}
const decrypt = (value) => {
    if(isObjectSet(value)) {
        let valueParts = value.split('/');
        let iv = Buffer.from(valueParts.shift(), 'hex');
        let encryptedValue = Buffer.from(valueParts.join('/'), 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(getCipherKey()), iv);
        let decrypted = decipher.update(encryptedValue);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
    return value;
}
const hashValue = (value) => {
    return (isObjectSet(value)) ? bcrypt.hashSync(value, encryptionSaltCount) : null;
}
const validateHash = (plainValue, hashedValue) => {
    return bcrypt.compareSync(plainValue, hashedValue);
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module.exports
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
module.exports = {
    getCipherKey: getCipherKey,
    encrypt: encrypt,
    decrypt: decrypt,
    hashValue: hashValue,
    validateHash: validateHash
}