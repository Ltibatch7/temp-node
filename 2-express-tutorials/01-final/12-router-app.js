const express = require('express')
const app = express()
const people = require('../02-router/people')
const auth =require('../02-router/auth')

//static assests
app.use(express.static('./method-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

app.use('/api/people',people)
app.use('/listen',auth)

app.listen(4085,()=>{
    console.log('Server running on port 4085....');
})