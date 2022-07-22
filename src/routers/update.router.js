const router = require("express").Router();

router.post("/phone", require("../controllers/update/updatePhone.controller"));
router.post(
  "/resume",
  require("../controllers/update/updateResume.controller")
);
router.post(
  "/password",
  require("../controllers/update/updatePassword.controller")
);
router.post(
  "/linkedin",
  require("../controllers/update/updateLinkedIn.controller")
);

module.exports = router;
