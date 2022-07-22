const StudentModel = require("../database/models/student.model");
const JobModel = require("../database/models/job.model");
const AnnouncementModel = require("../database/models/announcement.model");

module.exports = async (req, res, next) => {
  try {
    let Model;
    if (req.body.type === "student") {
      Model = StudentModel;
    } else if (req.body.type === "announcement") {
      Model = AnnouncementModel;
    } else if (req.body.type === "job") {
      Model = JobModel;
    }
    const deleted = await Model.deleteMany({});
    res.send("Deleted " + deleted.deletedCount + req.body.type);
  } catch (err) {
    next(err);
  }
};
