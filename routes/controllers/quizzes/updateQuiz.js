const asyncHandler = require("express-async-handler");
const Quiz = require("../../../models/Quiz");

const updateQuiz = asyncHandler(async (req, res, next) => {
  const quiz = new Quiz({
    title: req.body.title,
    type: req.body.type,
    link: req.body.link,
    course: req.body.course,
    topic: req.body.topic,
    dueDate: req.body.dueDate,
    _id: req.params.quizId,
  });
  await Quiz.findByIdAndUpdate(req.params.quizId, quiz);
  res.sendStatus(200);
});

module.exports = updateQuiz;
