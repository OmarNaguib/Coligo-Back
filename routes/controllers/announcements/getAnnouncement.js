const asyncHandler = require("express-async-handler");
const Announcement = require("../../../models/Announcement");

const getAnnouncement = asyncHandler(async (req, res, next) => {
  const announcement = await Announcement.findById(
    req.params.announcementId
  ).exec();
  res.status(200);
  res.json({ announcement });
});

module.exports = getAnnouncement;
