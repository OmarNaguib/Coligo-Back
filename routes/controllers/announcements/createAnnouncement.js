const asyncHandler = require("express-async-handler");
const Announcement = require("../../../models/Announcement");

const createAnnouncement = asyncHandler(async (req, res, next) => {
  // Todo: get user from jwt
  const announcement = new Announcement({
    author: req.body.author,
    imageSrc: req.body.imageSrc,
    text: req.body.text,
    course: req.body.course,
  });

  const result = await announcement.save();
  res.sendStatus(200);
});

module.exports = createAnnouncement;
