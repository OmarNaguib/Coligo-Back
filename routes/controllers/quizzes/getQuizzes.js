const asyncHandler = require("express-async-handler");
const Quiz = require("../../../models/Quiz");

const getQuizs = asyncHandler(async (req, res, next) => {
  const quizs = await Quiz.find({ post: req.params.postId }).exec();
  res.status(200);
  res.json({ quizs });
});

module.exports = getQuizs;
