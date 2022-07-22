const JobModel = require("../../database/models/job.model");
// const CompanyModel = require("../../database/models/company.model");
const AnnouncementModel = require("../../database/models/announcement.model");
const { DateTime } = require("luxon");

const addNewJob = async (req, res, next) => {
  try {
    const newJob = new JobModel(req.body);
    await newJob.save();

    const announcement = {
      date_announced: Date.now(),
      message: `New Job Offer from ${newJob.companyName}.\nJob Id: ${newJob.jobId}.\nLast date to Apply: ${newJob.deadlineDate}.`,
    };

    const newAnnouncement = new AnnouncementModel(announcement);
    await newAnnouncement.save();

    res.send({
      isJobAdded: `New job at ${newJob.companyName}, JobId ${newJob.jobId} registered successfully.`,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addNewJob;
