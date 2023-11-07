const asyncHandler = require("express-async-handler");
const Quiz = require("../../../models/Quiz");

const deleteQuiz = asyncHandler(async (req, res, next) => {
  const result = await Quiz.findByIdAndDelete(req.params.quizId);
  res.sendStatus(200);
});

module.exports = deleteQuiz;
