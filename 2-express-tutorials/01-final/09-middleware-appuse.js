const express = require('express')
const app = express()
const logger = require('../logger')
const authorize = require('../authorize')

//req => middleware => res

app.use([logger,authorize])
// /api/home -> invoke func based on path

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/api/products',(req,res)=>{
    res.send('Product Page')
})

app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items Page')
})

app.listen(4085,()=> console.log('Server running on port 4085...'))