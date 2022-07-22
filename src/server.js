// import required node_modules
// ! DO NOT CHANGE ANYTHING HERE.
// ! CHANGING ANYTHING HERE MIGHT BREAK THE APP
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
// ------------------------------------------------------------------------
//
// import required created files
const routes = require("./routers");
const fulfillWithTimeLimit = require("./utils/fulfillPromiseInTime");

// to be removed later
const announcementModel = require("./database/models/announcement.model");
const QueryModel = require("./database/models/queries.model");
const PendingJobModel = require("./database/models/pendingjob.model");
//const addNewCompany = require("./utils/addNewCompany");
const addNewJob = require("./utils/addNewJob");
const {
  markAsRead,
  deleteNotification,
} = require("./controllers/notification.controller");

// initialize express app
const app = express();

// /////////////////////    CORS    /////////////////////////////////////////
// ! DO NOT CHANGE ANYTHING HERE
//
// to allow all cross-origin requests, use
// app.use(cors());
//
// to allow cors for selected origins, use
app.use(
  cors({
    // use JSON.parse to convert the string received from process.env to required JavaScript format (array)
    origin: JSON.parse(at(process.env.ALLOWED_ORIGINS)),
    optionsSuccessStatus: 200,
  })
);
// /////////////////////    CORS END /////////////////////////////////////////

// log all requests in console
app.use(morgan("dev"));

// ///////////////    Compulsory Middlewares    //////////////////////////////
// ! DO NOT CHANGE ANYTHING HERE
// to parse json body data from requests (i.e req.body)
app.use(express.json());
// to parse data from x-urlencoded-forms
app.use(express.urlencoded({ extended: true }));
// ///////////////    Compulsory Middlewares END /////////////////////////////

// //////////////////////////////    ROUTES   ////////////////////////////////

// if database is not connected, throw error
app.use(function (req, res, next) {
  // mongoose.connection.readyState is
  // 0 = disconnected
  // 1 = connected
  // 2 = connecting
  // 3 = disconnecting
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    res.status(500);
    res.json({ error: "Internal Server Error" });
  }
});

// test route
app.use("/test", routes.test);

// login the user
app.post("/login", routes.login);

app.get(
  "/verifyToken",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).send({ isTokenValid: "valid" });
  }
);

app.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  routes.profile
);

app.get(
  "/studentProfile/:id",
  passport.authenticate("jwt", { session: false }),
  routes.studentProfile
);

app.get("/announcement", async (req, res) => {
  const data = await announcementModel.find({});
  res.status(200);
  res.json(data);
});

app.get("/all-query", async (req, res) => {
  const data = await QueryModel.find({}).populate("askedBy");
  res.status(200);
  res.json(data);
});

app.use(
  "/update",
  passport.authenticate("jwt", { session: false }),
  routes.update
);

app.use("/jobs", passport.authenticate("jwt", { session: false }), routes.jobs);

// Calling notifications using /profile
// app.get("/notification",
//   passport.authenticate("jwt", { session: false }),
//   routes.notification
// );

// app.use(
//   "/companies",
//   passport.authenticate("jwt", { session: false }),
//   routes.companies
// );

app.post("/add-job", routes.jobrequest);

app.use(
  "/students",
  passport.authenticate("jwt", { session: false }),
  routes.students
);

app.use(
  "/tpo",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    if (req.user.email !== "placements@iitism.ac.in") {
      next(
        {
          name: "Unauthorized request",
          message: "This request is only authorized for the TPO",
          status: 401,
        },
        req,
        res
      );
    } else next();
  },
  routes.tpo
);

// app.post(
//   "/tpo/uploadjsondata",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => {
//     req.user.email === "placements@iiitl.ac.in"
//       ? uploadJsonData(req, res, next)
//       : next({
//           name: "Unauthorized request",
//           message: "This request is only authorized for the TPO",
//           status: 401,
//         });
//   }
// );
// app.post(
//   "/tpo/deleteAllData",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => {
//     req.user.email === "placements@iiitl.ac.in"
//       ? deleteAllData(req, res, next)
//       : next({
//           name: "Unauthorized request",
//           message: "This request is only authorized for the TPO",
//           status: 401,
//         });
//   }
// );

app.post(
  "/markAsRead",
  passport.authenticate("jwt", { session: false }),
  markAsRead
);

app.post(
  "/deleteNotification",
  passport.authenticate("jwt", { session: false }),
  deleteNotification
);

// ///////////////////////////    ROUTES END  ////////////////////////////////

// Handle errors.
app.use(function (err, req, res, next) {
  // console.log(req)
  console.error(">ERROR", err.name, ": ", err.message);
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
