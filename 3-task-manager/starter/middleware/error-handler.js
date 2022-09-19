const {customErrorAPI} = require('../error/error')
const errorHandler = (err,req,res,next)=>{
    if(err instanceof customErrorAPI){
        return res.status(err.statuscode).json({msg:err.message})
    }
    return res.status(500).json({err:"Something went wrong, please try again"})
}

module.exports=errorHandler 