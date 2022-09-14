const fs = require('fs');

console.log("First task started");
fs.readFile('../content/first.txt',(err,data)=>{ //asynchronous
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
        console.log('First task completed');
    }
});
console.log("Going to next task");