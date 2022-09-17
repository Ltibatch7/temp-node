const getAllTasks = (req,res)=>{
    res.status(200).send('Get all the tasks')
}

const createTask = (req,res)=>{
    res.status(200).send(req.body)
}

const getTask = (req,res)=>{
    res.status(200).send('Get one task')
}

const updateTask = (req,res)=>{
    res.status(200).send('Update task')
}

const deleteTask = (req,res)=>{
    res.status(200).send('Delete task')
}

module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask}