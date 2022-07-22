const QueryModel= require("../../database/models/queries.model")

const Query= async (req,res,next)=>{
    const queryId=req.params.id;
    try{
        const query =await QueryModel.findById(queryId);
        query.answer=req.body.answer;
        await QueryModel.findByIdAndUpdate(queryId,query);
        res.status(200).send(query);
    }
    catch(e){
        next(e);
    }
}

module.exports = Query;