const asyncHandler = require("express-async-handler");
const Announcement = require("../../../models/Announcement");

const getAnnouncements = asyncHandler(async (req, res, next) => {
  const announcements = await Announcement.find(req.query).exec();
  res.status(200);
  res.json({ announcements });
});

module.exports = getAnnouncements;
