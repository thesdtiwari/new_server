const JobModel = require("../../database/models/job.model");
const PendingJobModel= require("../../database/models/pendingjob.model")
//const CompanyModel = require("../../database/models/company.model");
const AnnouncementModel = require("../../database/models/announcement.model");
const { DateTime } = require("luxon");

const addNewJob = async (req, res, next) => {
  try{
    const tempJob= (await PendingJobModel.findById(req.params.id)).toObject();
    //const _id=req.params.id;
    delete tempJob['_id'];
    delete tempJob['__v'];
    //console.log(tempJob);
    const newJob = new JobModel(tempJob);
    //console.log(newJob);

    await newJob.save();
    await PendingJobModel.findByIdAndDelete(req.params.id);

    const announcement = {
      date_announced: Date.now(),
      message: `New Job Offer from ${newJob.companyName}. Last date to Apply: ${newJob.deadlineDate}.`,
    };

    const newAnnouncement = new AnnouncementModel(announcement);
    await newAnnouncement.save();

    res.send({
      isJobAdded: `New job at ${newJob.companyName} registered successfully.`,
    });
  }
  catch(e){
    next(e);
  }
};
module.exports = addNewJob;
