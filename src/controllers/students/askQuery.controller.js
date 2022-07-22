const QueryModel = require("../../database/models/queries.model");

const askQuery = async (req, res, next) => {
  try {
    const newQuery = new QueryModel();
    newQuery.question=req.body.question;
    newQuery.askedBy=req.user._id;
    await newQuery.save();
    res.send(newQuery);
  } catch (err) {
    next(err);
  }
}

module.exports = askQuery;