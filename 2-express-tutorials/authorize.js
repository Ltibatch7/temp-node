const authorize = (req,res,next) => {
    const {user} = req.query 
    if(user === 'john'){
        req.user = {id:3,name:'john'}
        next()
    }else{
        res.status(404).send('Unauthorized')
    }
    next()
}

module.exports = authorize