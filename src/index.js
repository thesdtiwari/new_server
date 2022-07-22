const dotenv = require("dotenv");
const app = require("./server");

dotenv.config();
const port = process.env.PORT || 5000;

// stablish connection to DB
const { connectToDB } = require("./database");

const startServer = async () => {
  // start listening on specified port
  app.listen(port, () => {
    console.log(`Server listinening on http://localhost:${port}`);
  });

  // connect to database
  try {
    await connectToDB();
    console.log("Database Connected.");
  } catch (err) {
    // console.log(err);
    console.log(">ERROR :", err.name);
    console.log(">Error Message :", err.message);
    console.log(">Error Code :", err.code ? err.code : 0);
    console.log(">Error CodeName :", err.codeName ? err.codeName : "null");
  }
};

startServer();
