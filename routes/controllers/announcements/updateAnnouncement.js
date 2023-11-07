const asyncHandler = require("express-async-handler");
const Announcement = require("../../../models/Announcement");

const updateAnnouncement = asyncHandler(async (req, res, next) => {
  const announcement = new Announcement({
    author: req.body.author,
    imageSrc: req.body.imageSrc,
    text: req.body.text,
    course: req.body.course,
    _id: req.params.announcementId,
  });
  await Announcement.findByIdAndUpdate(req.params.announcementId, announcement);
  res.sendStatus(200);
});

module.exports = updateAnnouncement;
