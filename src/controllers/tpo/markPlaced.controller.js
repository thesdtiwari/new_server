const StudentModel = require("../../database/models/student.model");
const { DateTime } = require("luxon");

const markPlaced = async (req, res, next) => {
  try {
    const stuId = req.params.id;
    const jobId = req.body.jobId;
    const job = req.body.job;
    const student = await StudentModel.findById(stuId);

    // console.log(stuId, jobId, job, student);

    student.placed = true;
    student.approvedByTPO = false;
    student.offersReceived.push(jobId);

    const notification = {
      iat: DateTime.now().toLocaleString(),
      exp: DateTime.now().plus({ days: 10 }),
      message: `Congratulations ${student.fullName}.\nYour application for Job ${job} has been accepted.`,
    };

    await student.notification.unshift(notification);
    await StudentModel.findByIdAndUpdate(stuId, student);

    res.status(200);
    res.send({ success: "successful" });
  } catch (err) {
    next(err);
  }
};

module.exports = markPlaced;
