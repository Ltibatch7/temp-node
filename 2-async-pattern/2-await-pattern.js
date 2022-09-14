const fs = require('fs').promises;

const start = async()=>{
    try {
        const first = await fs.readFile('./content/first.txt','utf-8');
        await fs.writeFile('./content/second.txt','Welcome to the async',{flag:'a'});
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}

start()


// const getFunc = (path) =>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     });
// }

// getFunc('./content/first.txt').then((data)=>console.log(data.toString())).catch((err)=>console.log(err));