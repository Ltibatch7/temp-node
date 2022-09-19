class customErrorAPI extends Error{
    constructor(msg,statuscode){
        super(msg)
        this.statuscode=statuscode
    }
}
const createCustomError = (msg,statuscode) =>{
    return new customErrorAPI(msg,statuscode)
}
module.exports = {customErrorAPI,createCustomError}
