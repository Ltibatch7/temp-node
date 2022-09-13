const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page');
    }
    else if(req.url === '/about'){
        res.end('Welcome to about page');
    }
    else{
        res.end(`
    <h1>Oops!!!</h1>
    <p>Page that you are looking for is not available currently please try again after sometimes
    <a href='/'>Back to home</a>`);
    }
});

server.listen(4085); 



// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.write('Welcome to home page');
//     res.end();
// });

// server.listen(4085);    