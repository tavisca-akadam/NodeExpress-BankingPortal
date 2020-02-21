const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync('src/json/accounts.json', { encoding: 'UTF8' });
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync('src/json/users.json', { encoding: 'UTF8' });
const users = JSON.parse(userData);

writeJSON = () => {
    const accountsJSON = JSON.stringify(accounts, null, 4);
    fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, 'utf8');
}

module.exports = {
    accounts,
    users,
    writeJSON
};