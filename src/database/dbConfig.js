// // getting environment variables
// dotenv already configured in index.js
// const dotenv = require("dotenv");
// dotenv.config();

// mongo database URI
const mongoUri = process.env.MONGO_URI;

const configObj = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

module.exports = { mongoUri, configObj };
