
const express = require('express')
const app = express()
const port = 4085
const taskRoutes = require('./routes/taskRoutes')
const connectDB = require('./db/connection')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks',taskRoutes)
app.use(notFound)
app.use(errorHandler)

const start = async() =>{
    try {
        await connectDB(process.env.mongo_url)
        app.listen(port,()=>{
        console.log(`Server running on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()





// app.get('/api/v1/tasks') = get all the tasks 
// app.post('/api/v1/tasks') = create a task 
// app.get('/api/v1/tasks:id') = get one task
// app.patch('/api/v1/tasks:id') = update task
// app.delete('/api/v1/tasks:id') = delete task 