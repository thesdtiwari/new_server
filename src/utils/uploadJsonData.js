// const CompanyModel = require("../database/models/company.model");
const StudentModel = require("../database/models/student.model");
const JobModel = require("../database/models/job.model");
const NotificationModel = require("../database/models/notification.model");
const announcementModel = require("../database/models/announcement.model");

const hashPassword = require("./hashPassword");

const uploadJsonData = async (req, res, next) => {
  try {
    // console.log(req.body.type);
    // console.log(req.body.data);

    let Model;
    let queryOn;
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    if (req.body.type === "student") {
      Model = StudentModel;
      queryOn = "email";
    } else if (req.body.type === "job") {
      Model = JobModel;
      queryOn = "jobId";
    } else if (req.body.type === "notification") {
      Model = NotificationModel;
      queryOn = "message";
    } else if (req.body.type === "announcement") {
      Model = announcementModel;
      queryOn = "message";
    }

    let successCount = 0;
    let failCount = 0;

    await Promise.all(req.body.data.map(async entry => {
      try {
        if (req.body.type === "student") {
          entry.password = await hashPassword(entry.password);
        }

        let newEntry = new Model(entry);
        // console.log(newEntry);

        const query = { [queryOn]: newEntry[queryOn] };
        // console.log("query", query);
        // const temp = await Model.findOne(query);
        // console.log("temp", temp);

        const update = entry;

        const result = await Model.findOneAndUpdate(query, update, options);
        // console.log("result", result);
        if (result) successCount++;
      } catch (err) {
        console.log("Error in updating/adding " + queryOn, entry);
        console.error(err);
        failCount++;
      }
    }));
    res.status(200).send({ successCount, failCount });
  } catch (err) {
    next(err);
  }
};

module.exports = uploadJsonData;
