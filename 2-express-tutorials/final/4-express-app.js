const express = require('express');
const path = require('path');
const app = express();

//setup static and middleware
app.use(express.static('../public'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../navbar-app/index.html'));
})

app.get('*',(req,res)=>{
    res.status(404).send("<h1>Page not found</h1>")
})

app.listen(4085,()=>{
    console.log("Server running on port 4085...");
})