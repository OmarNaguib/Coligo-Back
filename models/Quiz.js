const { model, Schema } = require("mongoose");
// TODO: Add date formatting: luxon

const quizSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  link: { type: String, required: true },
  course: { type: String, required: true },
  topic: { type: String, required: true },
  dueDate: { type: String, required: true },
});

const Quiz = model("Quiz", quizSchema);

module.exports = Quiz;
