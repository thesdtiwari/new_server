const PendingJobModel = require("../../database/models/pendingjob.model");

const getNewJob = async (req, res, next) => {
  try {
    const job = await PendingJobModel.findById(req.params.id);
    res.status(200);
    res.send(job);
  } catch (e) {
    next(e);
  }
};

module.exports = getNewJob;
