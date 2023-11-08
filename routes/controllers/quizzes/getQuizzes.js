const asyncHandler = require("express-async-handler");
const Quiz = require("../../../models/Quiz");

const getQuizzes = asyncHandler(async (req, res, next) => {
  const quizzes = await Quiz.find({ post: req.params.postId }).exec();
  res.status(200);
  res.json({ quizzes });
});

module.exports = getQuizzes;
