// CommonJS -  every file in module (my default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-function');
const data = require('./6-alternative-favor');
require('./7-mind-grenade');

console.log(data);
sayHi('Praveen');
sayHi(names.name1);
sayHi(names.name2);