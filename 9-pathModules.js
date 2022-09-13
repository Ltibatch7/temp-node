const path = require('path');

console.log(path.sep);//segment separator

const pathName = path.join('content','sub-content','text.txt'); //join segment of path
console.log(pathName);

const base = path.basename(pathName);// filename
console.log(base);

console.log(path.resolve(__dirname,pathName)); //absoulte path