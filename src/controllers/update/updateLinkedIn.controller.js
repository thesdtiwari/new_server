const StudentModel = require("../../database/models/student.model");

module.exports = async (req, res) => {
  await StudentModel.findByIdAndUpdate(req.user._id, {
    linkedlnURL: req.body.linkedlnURL,
  }).then(console.log("LinkedIn link updated succesfully"));
  res.status(200).send("LinkedIn link updated succesfully!!");
};
