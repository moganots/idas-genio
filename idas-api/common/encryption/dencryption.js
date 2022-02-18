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
const { security } = require(`./../../config/config`);
const encryptionKey = security.encryption.key;
const encryptionSaltCount = security.encryption.saltCount;
const encryptionAlgorithm = security.encryption.algorithm.aes256cbc;
const encryptionHash = security.encryption.hash.sha256;
const bcrypt = require(`bcrypt`);
const crypto = require(`crypto`);
const { isObjectSet } = require("../functions");

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const getCipherKey = () => {
    return crypto.createHash(encryptionHash.name).update(String(encryptionKey)).digest(`base64`).substring(0, encryptionHash.length);
}
const encrypt = (value) => {
    if(isObjectSet(value)) {
        const iv = crypto.randomBytes(encryptionAlgorithm.length);
        const cipher = crypto.createCipheriv(encryptionAlgorithm.name, Buffer.from(getCipherKey()), iv);
        let encrypted = cipher.update(value);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return `${iv.toString(`hex`)}/${encrypted.toString(`hex`)}`;
    }
    return value;
}
const decrypt = (value) => {
    if(isObjectSet(value)) {
        let valueParts = value.split(`/`);
        let iv = Buffer.from(valueParts.shift(), `hex`);
        let encryptedValue = Buffer.from(valueParts.join(`/`), `hex`);
        let decipher = crypto.createDecipheriv(encryptionAlgorithm.name, Buffer.from(getCipherKey()), iv);
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