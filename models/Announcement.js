const { model, Schema } = require("mongoose");

const announcementSchema = new Schema({
  author: { type: String, required: true },
  imageSrc: { type: String, required: true },
  text: { type: String, required: true },
  course: { type: String, required: true },
});

const Announcement = model("Announcement", announcementSchema);

module.exports = Announcement;
