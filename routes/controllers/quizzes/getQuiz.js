const asyncHandler = require("express-async-handler");
const Quiz = require("../../../models/Quiz");

const getQuiz = asyncHandler(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.quizId).exec();
  res.status(200);
  res.json({ quiz });
});

module.exports = getQuiz;
