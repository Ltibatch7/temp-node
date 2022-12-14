const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("<h1>Home Page</h1>");
})

app.get('/about',(req,res)=>{
    res.status(200).send("<h1>About Page</h1>");
})

app.get('*',(req,res)=>{
    res.status(404).send("<h1>Page not found</h1>");
})

app.listen(4085,()=>{
    console.log("Server running on the port 4085....");
});

//app.get()
//app.post()
//app.put()
//app.delete()
//app.all()
//app.use()
//app.listen()