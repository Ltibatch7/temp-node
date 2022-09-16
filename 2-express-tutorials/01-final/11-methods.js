//http methods
const express = require('express')
const app = express()
const {people} = require('../data')

//static assests
app.use(express.static('../method-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

//get method
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

//post method
app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        res.status(401).send({success:false,data:'Please enter your name'})
    }
    else{
        res.status(200).json({success:true,data:name})
    }    
})

//post method - add data
app.post('/api/people/postman',(req,res)=>{
    const {id,name} = req.body
    if(!name){
        res.status(401).send({success:false,data:'Please enter your name'})
    }
    else{
        res.status(200).json({success:true,data:[...people,{id,name}]})
    }    
})

//post method
app.post('/login',(req,res)=>{
    const {name} = req.body
    if(name){
        res.status(200).send(`Welcome ${name}`)
        //res.status(201).json({success:true,data:name})
    }
    res.status(401).send('Please enter your name')
})

//put method - update
app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        res.status(404).send({success:false,data:`Person with this ${id} is not available`})
    }   
    else{
        const newPeople = people.map((person)=>{
            if(person.id === Number(id)){
                person.name=name
            }
            return person
        })
        res.status(200).send({success:true,data:newPeople})
    }
    
})

//delete method
app.delete('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        res.status(404).send({success:false,data:`Person with this ${id} is not available`})
    }   
    else{
        const newPeople = people.filter((person)=>person.id !== Number(id))
        res.status(200).send({success:true,data:newPeople})
    }
})

app.listen(4085,()=>{
    console.log('Server running on port 4085....');
})