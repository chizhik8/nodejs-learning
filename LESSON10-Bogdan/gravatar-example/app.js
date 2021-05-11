const gravatar = require("gravatar");

const email1 = "info@goit.ua";
const email2 = "info-goit@ukr.net";

const email1URL = gravatar.url(email1, {protocol: 'https', s: '100'});
console.log(email1URL);






