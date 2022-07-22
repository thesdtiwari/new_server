const StudentModel = require("../../database/models/student.model");

module.exports = async (req, res) => {
  await StudentModel.findByIdAndUpdate(req.user._id, {
    contactNo : req.body.contactNo
  }).then(
    console.log("Contact Number updated succesfully")
  );
  res.status(200).send("Contact Number updated succesfully!!");
};
