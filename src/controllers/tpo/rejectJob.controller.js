const PendingJobModel = require("../../database/models/pendingjob.model");

const rejectNewJob = async (req, res, next) => {
  try {
    await PendingJobModel.findByIdAndDelete(req.params.id);
    res.status(200);
    res.send({ success: "Job Deleted" });
  } catch (e) {
    next(e);
  }
};

module.exports = rejectNewJob;
