// CommonJS -  every file in module (my default)
// Modules - Encapsulated code (only share minimum)

const names = require('./04-names');
const sayHi = require('./05-function');
const data = require('./06-alternative-favor');
require('./07-mind-grenade');

console.log(data);
sayHi('Praveen');
sayHi(names.name1);
sayHi(names.name2);