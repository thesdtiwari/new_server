module.exports = {
  // test route
  test: require("./test.router"),

  tpo: require("./tpo.router"),

  jobs: require("./jobs.router"),

  update: require("./update.router.js"),

  students: require("./students.router.js"),

  // companies: require("./companies.router.js"),

  login: require("../controllers/login.controller"),

  profile: require("../controllers/profile.controller"),

  studentProfile: require("../controllers/studentProfile.controller"),

  jobrequest: require("../controllers/addJobRequest.controller"),

  // Notification is handled by /profile
  // notification: require("../controllers/notification.controller")

  // TODO in actual app
  // dashboard: require("./dashboard.router")
};
