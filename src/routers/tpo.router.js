const router = require("express").Router();
const tpo = require("../controllers/tpo/index");
const uploadJsonData = require("../utils/uploadJsonData.js");
const deleteAllData = require("../utils/deleteAllCollection.js");

router.get("/queries", tpo.queries);
router.get("/pendingjob", tpo.getpendingjob);
router.get("/pendingjob/:id", tpo.getpendingjobbyid);
router.post("/approvejob/:id", tpo.approvejob);
router.delete("/rejectjob/:id", tpo.rejectjob);
router.post("/answer-query/:id", tpo.answerQuery);
router.post("/add-announcement", tpo.addAnnouncement);
router.post("/uploadjsondata", uploadJsonData);
router.post("/deleteAllData", deleteAllData);
router.post("/add-notification", tpo.addNotification);
router.post("/mark-placed/:id", tpo.markPlaced);

module.exports = router;
