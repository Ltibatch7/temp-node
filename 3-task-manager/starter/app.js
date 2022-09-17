const express = require('express')
const app = express()
const port = 4085
const taskRoutes = require('./routes/taskRoutes')

//middleware
app.use(express.json())

//routes
app.get('/home',(req,res)=>{
    res.send('Tast Manager App')
})

app.use('/api/v1/tasks',taskRoutes)

// app.get('/api/v1/tasks') = get all the tasks 
// app.post('/api/v1/tasks') = create a task 
// app.get('/api/v1/tasks:id') = get one task
// app.patch('/api/v1/tasks:id') = update task
// app.delete('/api/v1/tasks:id') = delete task 

app.listen(port,()=>{
    console.log(`Server running on port ${port}...`);
})