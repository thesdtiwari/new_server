module.exports = {
  approvejob: require("./approveJob.controller"),
  rejectjob: require("./rejectJob.controller"),
  getpendingjob: require("./getPendingJob.controller"),
  getpendingjobbyid: require("./getPendingJobById.controller"),
  queries: require("./getQueries.controller"),
  answerQuery: require("./answerQuery.controller"),
  addAnnouncement: require("./addAnnouncement.controller"),
  addNotification: require("./addNotification.controller"),
  markPlaced: require("./markPlaced.controller"),
};
