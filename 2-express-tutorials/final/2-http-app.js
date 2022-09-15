const http = require('http');
const fs = require('fs');

const homePage =fs.readFileSync('../navbar-app/index.html');
const homeStyle = fs.readFileSync('../navbar-app/index.css');

const server = http.createServer((req,res)=>{
    const url = req.url;
    //home page
    if(url === '/'){
      res.writeHead(200,{'content-type':'text/html'});
      res.write(homePage);
      res.end();  
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>About page</h1>');
        res.end(); 
    }
    else if(url === '/index.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeStyle);
        res.end();
    }
    //404 page
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end(); 
    }
      
});

server.listen(4085);