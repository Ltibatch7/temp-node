const { createServer } = require("http");

const server = createServer((req,res)=>{
    console.log("Server event");
    res.write('Server event');
    res.end();
});
server.listen(4085,()=>{
    console.log('Server run on the port 4085...');
})