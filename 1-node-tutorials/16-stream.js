const fs = require('fs');

const rstream = fs.createReadStream('./content/big.txt','utf-8');

rstream.on('data',(data)=>{
    console.log(data);
});

