const QueryModel= require("../../database/models/queries.model")

const getQueries= async (req,res,next)=>{
    try{
        const allquery= await QueryModel.find({});
        res.status(200).send(allquery);
    }
    catch(e){
        next(e);
    }
}

module.exports = getQueries;