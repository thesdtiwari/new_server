const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  test: Boolean,
});

// create test model
const testModel = mongoose.model("test", TestSchema);

module.exports = testModel;
