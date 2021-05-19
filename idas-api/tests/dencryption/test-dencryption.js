const { encryptionKey, encryptionSaltCount } = require(`../../config/encryption/config`);
const bcrypt = require(`bcrypt`);
const encrypt = (password) => {
    return (!password) ? null : bcrypt.hashSync([password, encryptionKey].join(``), encryptionSaltCount);
}
const Test = (uid, password) => {
    console.log(`uid=${uid}, password=${password}, passworHash=${encrypt(password)}`);
}

// Test: root@genio.idas.co.za
Test(`root@genio.idas.co.za`, `root@123`);
// Test: admin@genio.idas.co.za
Test(`admin@genio.idas.co.za`, `admin@123`);
// Test: Jane.Doe@genio.idas.co.za
Test(`Jane.Doe@genio.idas.co.za`, `admin@123`);
// Test: Good.Job@genio.idas.co.za
Test(`Good.Job@genio.idas.co.za`, `admin@123`);
// Test: Bad.Work@genio.idas.co.za
Test(`Bad.Work@genio.idas.co.za`, `admin@123`);
// Test: info@closecorporation.co.za
Test(`info@closecorporation.co.za`, `admin@123`);
// Test: info@thandindabaattorneys.co.za
Test(`info@thandindabaattorneys.co.za`, `admin@123`);