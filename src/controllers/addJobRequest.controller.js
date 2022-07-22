const PendingJobModel= require("../database/models/pendingjob.model")

const addNewJob = async (req, res, next) => {
  try{
      const jobData=req.body;
      const newJob= new PendingJobModel(jobData);
      await newJob.save();
      res.send(newJob);
  }
  catch(e){
    next(e);
  }
};
module.exports = addNewJob;
