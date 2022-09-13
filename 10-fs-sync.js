const fs = require('fs');

//readFileSync
// console.log(fs.readFileSync('./content/first.txt','utf-8'));
console.log(fs.readFileSync('./content/first.txt').toString());

//writeFileSync
console.log(fs.writeFileSync('./content/second.txt','Welcome to second input file.'));
console.log(fs.readFileSync('./content/second.txt','utf-8'));

//with flag append
console.log(fs.writeFileSync('./content/second.txt','Welcome to second input file.',{flag:'a'}));
console.log(fs.readFileSync('./content/second.txt','utf-8'));
