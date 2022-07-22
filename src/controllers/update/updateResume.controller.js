const StudentModel = require("../../database/models/student.model");

module.exports = async (req, res) => {
  // console.log(req.body);
  await StudentModel.findByIdAndUpdate(req.user._id, {
    resumeUrl: req.body.resumeUrl,
  }).then(console.log("Resume link updated succesfully"));
  res.status(200).send("Resume link updated succesfully!!");
};
