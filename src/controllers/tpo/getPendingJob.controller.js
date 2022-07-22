const PendingJobModel = require("../../database/models/pendingjob.model");

const getNewJob = async (req, res, next) => {
  try {
    const allJobs = await PendingJobModel.find({});
    res.status(200);
    res.send(allJobs);
  } catch (e) {
    next(e);
  }
};

module.exports = getNewJob;
