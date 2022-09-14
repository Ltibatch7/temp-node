//npm -version or -v

//local dependency (used it only in this project)
//npm i <packagename>

//global dependency (used it in any project)
//npm install -g <packagename>

//package.json - manifest file (contain info about the prokject/package)
//manual process (create package.json in the root, create properties etc)
//npm init - (step by step, press enter to skip)
//npm init -y (everything default)

const fs = require('fs');

const stream = fs.createReadStream('./content/big.txt','utf-8');

stream.on('data',(data)=>{
    console.log(data);
});

