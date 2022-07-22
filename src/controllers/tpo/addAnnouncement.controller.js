const Announcement = require("../../database/models/announcement.model");

const addAnnouncement = async (req, res, next) => {
  try {
    const announcement = {
      date_announced: Date.now(),
      message: req.body.message,
    };

    // console.log(announcement);

    const newAnnouncement = new Announcement(announcement);
    await newAnnouncement.save();
    res.status(200);
    res.send(newAnnouncement);
  } catch (e) {
    next(e);
  }
};

module.exports = addAnnouncement;
