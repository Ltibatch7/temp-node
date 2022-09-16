const express = require('express')
const app = express()

//req => middleware => res
const logger = (req,res,next) =>{
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method,url,year);
    next();
}

app.get('/',logger,(req,res)=>{
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method,url,year);
    res.send('Home Page')
})

app.get('/about',logger,(req,res)=>{
    res.send('About Page')
})

app.listen(4085,()=> console.log('Server running on port 4085...'))