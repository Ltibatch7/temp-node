const mongoose = require('mongoose')

const connectDB = (url) =>{
    return mongoose.connect(url,{
        dbName: "03-Task-manager",
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
} 

module.exports = connectDB
