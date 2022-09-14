const fs = require('fs');

//readFile
fs.readFile('./content/first.txt',(err,data)=>{
    if(err) console.log(err);
    else console.log(data.toString());
});

//writeFile

fs.writeFile('./content/second.txt','Welcome second file',(err)=>{
    if(err) console.log(err);
    console.log("Written");
});

//appendFile
fs.appendFile('./content/second.txt','Welcome to fs module',(err)=>{
    if(err) console.log(err);
    console.log("Appended");
});

//rename - fs.rename();
//delete - fs.unlink();

//sync vs async
console.log('start');
fs.appendFile('./content/second.txt','Welcome to fs module',(err)=>{
    if(err) console.log(err);
    console.log("Appended");
});
console.log('go to next');
