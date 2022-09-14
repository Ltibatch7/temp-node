const fs = require('fs');

for(let i=0;i<1000;i++){
    fs.appendFile('./content/big.txt',`Hello World ${i}\n`,(err)=>{
        if(err) console.log(err);
        else{
            console.log('Big file created');
        }
    })
}

for(let i=0;i<1000;i++){
    fs.writeFileSync('./content/big.txt',`Hello World ${i}\n`,{flag:'a'})
}