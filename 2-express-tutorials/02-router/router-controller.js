const {people} = require('../data')

const getPeople = (req,res) =>{
    res.status(200).json({success:true,data:people})
}

const createPerson = (req,res) =>{
    const {name} = req.body
    if(!name){
        res.status(401).send({success:false,data:'Please enter your name'})
    }
    else{
        res.status(200).json({success:true,data:name})
    } 
}

const createPersonPostman = (req,res) =>{
    const {id,name} = req.body
    if(!name){
        res.status(401).send({success:false,data:'Please enter your name'})
    }
    else{
        res.status(200).json({success:true,data:[...people,{id,name}]})
    }
}

const updatePerson = (req,res) =>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        res.status(404).json({success:false,data:`Person with this id:${id} is not available`})
    }   
    else{
        const newPeople = people.map((person)=>{
            if(person.id === Number(id)){
                person.name=name
            }
            return person
        })
        res.status(200).json({success:true,data:newPeople})
    }
}

const deletePerson = (req,res) =>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false,data:`Person with this id:${id} is not available`})
    }   
    else{
        const newPeople = people.filter((person)=>person.id !== Number(id))
        return res.status(200).json({success:true,data:newPeople})
    }
}

module.exports = {getPeople,createPerson,createPersonPostman,updatePerson,deletePerson}