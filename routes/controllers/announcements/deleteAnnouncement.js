const asyncHandler = require("express-async-handler");
const Announcement = require("../../../models/Announcement");
const Comment = require("../../../models/Quiz");

const deleteAnnouncement = asyncHandler(async (req, res, next) => {
  await Announcement.findByIdAndDelete(req.params.announcementId);
  res.sendStatus(200);
});

module.exports = deleteAnnouncement;
